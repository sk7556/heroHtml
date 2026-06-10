실행 환경 정리
개발할 때 서버가 두 개 떠있어야 해요:

FastAPI 서버 (8000)   → uvicorn app.main:app --reload
Vite 개발 서버 (5173) → npm run dev (front 폴더에서)

둘 다 터미널 하나씩 차지해요. VS Code 껐다 켜면 둘 다 다시 실행해줘야 해요.

폴더 위치도 중요해요
uvicorn  → heroHtml 폴더에서 실행
npm run dev → heroHtml/front 폴더에서 실행
폴더 위치 틀리면 에러 나요. 오늘 겪은 것처럼요.

흐름
브라우저 → 5173 (React 화면) → 8000 (FastAPI 데이터) → MySQL