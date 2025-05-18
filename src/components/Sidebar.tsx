import { Link } from 'react-router-dom'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: '#333', fontSize: '24px' }}
          >
            <p>👣 おでかける</p>
          </Link>
          <li style={{ padding: '10px 20px' }}>
            <Link to="/list" style={{ textDecoration: 'none', color: '#333' }}>
              📍 一覧
            </Link>
          </li>
          <li style={{ padding: '10px 20px' }}>
            <Link to="/post" style={{ textDecoration: 'none', color: '#333' }}>
              ✍️ 投稿
            </Link>
          </li>
        </ul>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '10px 20px' }}>
            <Link
              to="/mypage"
              style={{ textDecoration: 'none', color: '#333' }}
            >
              👤 マイページ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
