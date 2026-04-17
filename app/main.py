#fastAPI의 진입점 
#SpringBoot Application 클래스와 유사한 역할을 하는 파일입니다.
#FastAPI 애플리케이션을 생성하고, 라우터를 등록하는 코드
from fastapi import FastAPI
from app.database import engine, Base
from app.routers import auth, posts

#DB 테이블 자동 생성
Base.metadata.create_all(bind=engine)
app = FastAPI()

#라우터 등록
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(posts.router, prefix="/posts", tags=["posts"])

@app.get("/")
def root():
    return {"message": "Hello, FastAPI!"}

