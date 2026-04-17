# API 요청/응답 형식을 정의
# 유효성 검사도 진행
# DTO와 비슷한 역할이라 생각하면됨 
from pydantic import BaseModel, EmailStr
from datetime import datetime

# User 관련 스키마
class UserCreate(BaseModel):  
    user_id: str
    username: str
    nickname: str
    email: EmailStr
    password: str
    
class UserResponse(BaseModel):
    seq: int
    user_id: str
    username: str
    nickname: str
    email: EmailStr
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attribute = True
        
# Post 관련 스키마
class PostCreate(BaseModel):
    title: str
    content: str

class PostUpdate(BaseModel):
    title: str
    content: str

class PostResponse(BaseModel):
    seq: int
    title: str
    content: str
    created_at: datetime
    author_seq: int
    
    class Config:
        from_attribute = True