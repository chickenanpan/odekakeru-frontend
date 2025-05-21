import React from 'react'
import './PostList.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Post = {
  id: number
  title: string
  description: string
  imageUrl: string
  postUserId: number
  latitude: number
  longitude: number
  createdAt: string
  updatedAt: string
}

export const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    let isMounted = true // マウント状態フラグ

    axios
      .get('http://localhost:8000/api/post')
      .then((response) => {
        if (isMounted) {
          console.log(response.data)
          const mappedPosts: Post[] = response.data.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            imageUrl: item.image_url,
            latitude: item.latitude,
            longitude: item.longitude,
            postUserId: item.post_user_id,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
          }))
          setPosts(mappedPosts)
        }
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })

    // クリーンアップ関数
    return () => {
      isMounted = false
    }
  }, [])

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
            <Link to={`/detail/${post.id}`} key={post.id}>
              <img
                src={post.imageUrl}
                alt={post.description}
                className="post-image"
              />
            </Link>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-desc">{post.description}</p>
            <p className="post-desc">{post.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
