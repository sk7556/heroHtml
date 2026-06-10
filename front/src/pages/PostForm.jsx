import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function PostForm() {
  const { id } = useParams()       // id 있으면 수정, 없으면 작성
  const navigate = useNavigate()   // 페이지 이동용

  const [form, setForm] = useState({
    title: '',
    content: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form) // 나중에 API 연동
    navigate('/')     // 제출 후 목록으로 이동
  }

  return (
    <div className="container" style={{ marginTop: '24px' }}>
      <div style={{
        backgroundColor: 'var(--bg-white)',
        border: '1px solid var(--border)',
        padding: '24px'
      }}>
        <h2 style={{ marginBottom: '24px' }}>
          {id ? '게시글 수정' : '게시글 작성'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>제목</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid var(--border)',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>내용</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={15}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button type="button" onClick={() => navigate(-1)} style={{
              padding: '8px 20px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-white)',
              fontSize: '14px'
            }}>
              취소
            </button>
            <button type="submit" style={{
              padding: '8px 20px',
              border: 'none',
              backgroundColor: 'var(--primary)',
              color: 'white',
              fontSize: '14px'
            }}>
              {id ? '수정완료' : '작성완료'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostForm