from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.deps import get_db, get_current_user # 현재 로그인한 유저 정보를 가져오는 함수
from typing import List # 리스트 타입을 명시하기 위해 추가

router = APIRouter()

@router.get("/", response_model=List[schemas.PostResponse]) # 여러 개의 게시글을 반환하기 때문에 List로 감싸줌
def get_posts(db: Session = Depends(get_db)):
    return db.query(models.Post).all()

@router.get("/{post_seq}", response_model=schemas.PostResponse)
def get_post(post_seq: int, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.post_seq == post_seq).first()
    if not post:
        raise HTTPException(status_code=404, detail="게시글을 찾을 수 없습니다.")
    return post

@router.post("/", response_model=schemas.PostResponse)
def create_post(
    post: schemas.PostCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user) # 현재 로그인한 유저 정보 가져오기
):
    new_post = models.Post(
        title=post.title,
        content=post.content,
        author_id=current_user.user_id # 게시글 작성자 정보 저장
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post

@router.put("/{post_seq}", response_model=schemas.PostResponse)
def update_post(
    post_seq: int,
    post: schemas.PostUpdate, # 업데이트용 스키마로 변경
    db: Session = Depends(get_db), # DB 세션 의존성 주입
    current_user: models.User = Depends(get_current_user) # 현재 로그인한 유저 정보 가져오기
):
    existing_post = db.query(models.Post).filter(models.Post.post_seq == post_seq).first()
    if not existing_post:
        raise HTTPException(status_code=404, detail="게시글을 찾을 수 없습니다.")
    if existing_post.author_id != current_user.user_id:
        raise HTTPException(status_code=403, detail="게시글 수정 권한이 없습니다.")
    
    existing_post.title = post.title
    existing_post.content = post.content
    db.commit()
    db.refresh(existing_post)
    return existing_post

@router.delete("/{post_seq}")
def delete_post(
    post_seq: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user) # 현재 로그인한 유저 정보 가져오기
):
    existing_post = db.query(models.Post).filter(models.Post.post_seq == post_seq).first()
    if not existing_post:
        raise HTTPException(status_code=404, detail="게시글을 찾을 수 없습니다.")
    if existing_post.author_id != current_user.user_id:
        raise HTTPException(status_code=403, detail="게시글 삭제 권한이 없습니다.")
    
    db.delete(existing_post)
    db.commit()
    return {"detail": "게시글이 삭제되었습니다."}