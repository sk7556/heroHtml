import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'var(--bg-white)',
      borderBottom: '1px solid var(--border)',
      padding: '0 16px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '48px'
      }}>
        {/* 로고 */}
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '16px' }}>
          HeroBoard
        </Link>

        {/* 메뉴 */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar