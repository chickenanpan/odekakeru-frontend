import React from 'react'
import './PostList.css'

const posts = [
  {
    id: 1,
    title: '投稿1のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿1の説明',
  },
  {
    id: 2,
    title: '投稿2のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿2の説明',
  },
  {
    id: 3,
    title: '投稿3のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿3の説明',
  },
  {
    id: 4,
    title: '投稿4のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿4の説明',
  },
  {
    id: 5,
    title: '投稿5のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿5の説明',
  },
  {
    id: 6,
    title: '投稿6のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿6の説明',
  },
  {
    id: 7,
    title: '投稿7のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿7の説明',
  },
  {
    id: 8,
    title: '投稿8のタイトル',
    image: 'https://placehold.jp/150x150.png',
    description: '投稿8の説明',
  },
]

export const PostList: React.FC = () => {
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="キーワードで検索"
          className="search-input"
        />
        <button className="search-button">検索</button>
      </div>
      <h2>投稿一覧</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img
              src={post.image}
              alt={post.description}
              className="post-image"
            />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-desc">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
