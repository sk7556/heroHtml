# .env의 DB_URL을 불러와 SQLAlchemy 엔진을 생성하는 코드입니다.
# FastAPI / MySQL 연동 설정파일. 앱 전체에서 딱 한번 수행, 다른 파일들이 참고함 
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

# DB_URL = os.getenv("DB_URL")
DB_URL = f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
engine = create_engine(DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
# 데이터베이스 세션을 생성하는 함수입니다.