// axios로 FastAPI 서버에 요청을 보내는 함수들을 모아두는 파일이에요. 각 페이지에서 직접 API 호출하는 게 아니라 여기서 한 곳에서 관리해요. Spring의 Service 레이어랑 비슷한 역할이에요.

import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

// 회원가입
export const register = (form) => {
  return axios.post(`${BASE_URL}/auth/register`, form)
}

// 로그인
export const login = (userId, password) => {
  return axios.post(`${BASE_URL}/auth/login?user_id=${userId}&password=${password}`)
}