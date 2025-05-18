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
          <p>Odekakeru</p>
          <li style={{ padding: '10px 20px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              一覧
            </a>
          </li>
          <li style={{ padding: '10px 20px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              投稿
            </a>
          </li>
        </ul>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '10px 20px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              マイページ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
