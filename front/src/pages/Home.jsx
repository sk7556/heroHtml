import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../api/posts'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then(res => setPosts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container" style={{ marginTop: '24px' }}>
      {/* 게시글 작성 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <Link to="/posts/new">
          <button style={{
            padding: '6px 16px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            fontSize: '13px'
          }}>글쓰기</button>
        </Link>
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'var(--bg-white)',
        border: '1px solid var(--border)'
      }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: '10px', width: '60px', textAlign: 'center' }}>번호</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>제목</th>
            <th style={{ padding: '10px', width: '100px', textAlign: 'center' }}>작성자</th>
            <th style={{ padding: '10px', width: '120px', textAlign: 'center' }}>날짜</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.seq} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '10px', textAlign: 'center' }}>{post.seq}</td>
              <td style={{ padding: '10px' }}>
                <Link to={`/posts/${post.seq}`}>{post.title}</Link>
              </td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{post.nickname}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{post.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home