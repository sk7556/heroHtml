import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

// 토큰을 헤더에 담는 함수
const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
})

// 게시글 목록
export const getPosts = () => axios.get(`${BASE_URL}/posts/`)

// 게시글 상세
export const getPost = (id) => axios.get(`${BASE_URL}/posts/${id}`)

// 게시글 작성
export const createPost = (form) => axios.post(`${BASE_URL}/posts/`, form, authHeader())

// 게시글 수정
export const updatePost = (id, form) => axios.put(`${BASE_URL}/posts/${id}`, form, authHeader())

// 게시글 삭제
export const deletePost = (id) => axios.delete(`${BASE_URL}/posts/${id}`, authHeader())