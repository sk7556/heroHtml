import { useParams, Link } from 'react-router-dom'

function PostDetail() {
  const { id } = useParams() // URL에서 id 추출

  // 더미 데이터
  const post = {
    seq: id,
    title: '첫 번째 게시글',
    content: '게시글 내용입니다.',
    nickname: '홍길동',
    created_at: '2026-04-17'
  }

  return (
    <div className="container" style={{ marginTop: '24px' }}>
      <div style={{
        backgroundColor: 'var(--bg-white)',
        border: '1px solid var(--border)',
      }}>
        {/* 게시글 헤더 */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid var(--border)'
        }}>
          <h2 style={{ marginBottom: '8px' }}>{post.title}</h2>
          <span style={{ color: 'var(--text-light)', fontSize: '13px' }}>
            {post.nickname} · {post.created_at}
          </span>
        </div>

        {/* 게시글 본문 */}
        <div style={{ padding: '24px', minHeight: '200px' }}>
          {post.content}
        </div>

        {/* 하단 버튼 */}
        <div style={{
          padding: '16px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end'
        }}>
          <Link to="/">
            <button style={{
              padding: '6px 16px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-white)',
              fontSize: '13px'
            }}>목록</button>
          </Link>
          <button style={{
            padding: '6px 16px',
            border: 'none',
            backgroundColor: 'var(--primary)',
            color: 'white',
            fontSize: '13px'
          }}>수정</button>
          <button style={{
            padding: '6px 16px',
            border: 'none',
            backgroundColor: 'var(--danger)',
            color: 'white',
            fontSize: '13px'
          }}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default PostDetail