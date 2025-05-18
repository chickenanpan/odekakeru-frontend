import React from 'react'
import './PostList.css'

type Post = {
  id: number
  title: string
  image: string
  description: string
}

type PostListProps = {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
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
