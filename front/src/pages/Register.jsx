import { useState } from 'react'
import { Link } from 'react-router-dom'

// 회원가입 페이지예요. useState 객체를 사용하여 입력값 관리
function Register() {
  const [form, setForm] = useState({
    user_id: '',
    username: '',
    nickname: '',
    email: '',
    password: ''
  })

  // 입력 필드 값이 변경될 때마다 form 상태 업데이트
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // submit 버튼 클릭 시 폼 데이터 출력
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form) // 나중에 API 연동
  }

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid var(--border)',
    fontSize: '14px',
    marginBottom: '16px'
  }

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '60px' }}>
      <div style={{
        backgroundColor: 'var(--bg-white)',
        border: '1px solid var(--border)',
        padding: '32px'
      }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>회원가입</h2>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '6px' }}>아이디</label>
          <input type="text" name="user_id" value={form.user_id} onChange={handleChange} style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '6px' }}>이름</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '6px' }}>닉네임</label>
          <input type="text" name="nickname" value={form.nickname} onChange={handleChange} style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '6px' }}>이메일</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} style={inputStyle} />

          <label style={{ display: 'block', marginBottom: '6px' }}>비밀번호</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} style={inputStyle} />

          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            fontSize: '14px',
            marginTop: '8px'
          }}>
            회원가입
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-light)' }}>
          이미 계정이 있으신가요? <Link to="/login" style={{ color: 'var(--primary)' }}>로그인</Link>
        </p>
      </div>
    </div>
  )
}

export default Register