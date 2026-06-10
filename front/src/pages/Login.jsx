import { useState } from 'react'
import { Link } from 'react-router-dom'

// 로그인 페이지예요. useState 값을 사용하여 입력값 관리

function Login() {
  // 입력값 상태 관리
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userId, password) // 나중에 API 연동
  }

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '60px' }}>
      <div style={{
        backgroundColor: 'var(--bg-white)',
        border: '1px solid var(--border)',
        padding: '32px'
      }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>로그인</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>아이디</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid var(--border)',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid var(--border)',
                fontSize: '14px'
              }}
            />
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            fontSize: '14px'
          }}>
            로그인
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-light)' }}>
          계정이 없으신가요? <Link to="/register" style={{ color: 'var(--primary)' }}>회원가입</Link>
        </p>
      </div>
    </div>
  )
}

export default Login