#DB를 python 클래스로 정의하는 파일 
# Base 클래스를 상속받은 클래스파나가 테이블 하나임
# users, posts 를 만들어둘거임 
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.database import Base

class User(Base):
    __tablename__  = "users"
    
    seq = Column(Integer, primary_key=True, index=True, autoincrement=True)
    #접속용
    user_id = Column(String(50), unique=True, index=True, nullable=False)
    #실제이름
    username = Column(String(50), nullable=False)
    #닉네임
    nickname = Column(String(50), nullable=False, unique=True)
    #email
    email = Column(String(100), nullable=False, unique=True)
    #password
    password = Column(String(255), nullable=False)
    #is_active
    is_active = Column(Boolean, default=True)
    #created_at
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    
    posts = relationship("Post", back_populates="author")

class Post(Base):
    __tablename__ = "posts"
    
    seq = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(100), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    author_seq = Column(Integer, ForeignKey("users.seq"), nullable=False)
    
    author = relationship("User", back_populates="posts")