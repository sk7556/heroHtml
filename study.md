python3 -m venv .venv

source .venv/bin/activate

pip install fastapi uvicorn

# 설치되는 npm들 정리 
FastAPI ( Python )
fastapi
uvicorn
sqlalchemy
pymysql
python-jose
passlib
bcrypt
python-dotenv
pydantic[email]

React ( Node ) 
react
react-dom
react-router-dom
axios





학습 순서
1단계 - 환경 세팅
프로젝트 구조 잡기
MySQL 연결 (SQLAlchemy)
GitHub 연동

2단계 - 기본 API
FastAPI 라우터 구조 이해
CRUD 엔드포인트 작성
Pydantic 스키마

3단계 - 인증
회원가입 / 로그인
JWT 발급 및 검증
로그인 보호 라우터

4단계 - 게시판
게시글 CRUD
로그인한 사용자만 작성/수정/삭제
작성자 연동

5단계 - 마무리
예외처리
코드 정리 및 GitHub 정리

4/2 
Mysql 설치 및 지정했음 .
스키마 - fastapi_db

pip install sqlalchemy pymysql python-jose passlib bcrypt python-dot

heroHtml/
├── app/
│   ├── main.py        # 앱 진입점
│   ├── database.py    # DB 연결 설정
│   ├── models.py      # DB 테이블 정의
│   ├── schemas.py     # 요청/응답 데이터 형식
│   ├── routers/       # API 라우터
│   │   ├── auth.py    # 로그인/회원가입
│   │   └── posts.py   # 게시판
│   └── deps.py        # 공통 의존성 (JWT 검증 등)
├── .env               # 환경변수
├── .gitignore
└── .venv/


# 1. Vite로 React 프로젝트 생성
# Vite는 리액트를 빠르게 만들고 실행할수 있게 해주는 빌드 도구 ( like maven ) 
npm create vite@latest front -- --template react

# 2. 프로젝트 폴더로 이동
cd front

# 3. 기본 패키지 설치 (package.json 기반)
npm install

# 4. 추가 패키지 설치
npm install react-router-dom axios

# 5. 리액트 프론트 개발 서버 실행 (localhost:5173)
npm run dev 

# 6. 배포용 빌드 (dist 폴더에 변환된 파일 생성)
npm run build




