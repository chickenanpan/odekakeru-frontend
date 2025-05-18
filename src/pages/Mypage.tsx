import React from 'react'
import './Mypage.css'

const user = {
  name: '山田 太郎',
  email: 'taro.yamada@example.com',
  avatar: 'https://placehold.jp/150x150.png',
  bio: 'おでかけが大好きな社会人。休日はカフェ巡りや登山を楽しんでいます。',
  stats: {
    posts: 12,
    likes: 34,
    followers: 56,
  },
}

const Mypage: React.FC = () => {
  return (
    <div className="mypage-container">
      <img src={user.avatar} alt="avatar" className="mypage-avatar" />
      <h2 className="mypage-name">{user.name}</h2>
      <div className="mypage-email">{user.email}</div>
      <p className="mypage-bio">{user.bio}</p>
      <div className="mypage-stats">
        <div>
          <div className="mypage-stat-value">{user.stats.posts}</div>
          <div className="mypage-stat-label">投稿</div>
        </div>
        <div>
          <div className="mypage-stat-value">{user.stats.likes}</div>
          <div className="mypage-stat-label">いいね</div>
        </div>
        <div>
          <div className="mypage-stat-value">{user.stats.followers}</div>
          <div className="mypage-stat-label">フォロワー</div>
        </div>
      </div>
      <button className="mypage-edit-btn">プロフィール編集</button>
    </div>
  )
}

export default Mypage
