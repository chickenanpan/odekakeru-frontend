import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './PostDetail.css'

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

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<Post>()
  const params = useParams()

  useEffect(() => {
    let isMounted = true // マウント状態フラグ

    axios
      .get('http://localhost:8000/api/post/detail?id=' + params.id)
      .then((response) => {
        if (isMounted) {
          const mappedPost: Post = {
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            imageUrl: response.data.image_url,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
            postUserId: response.data.post_user_id,
            createdAt: response.data.created_at,
            updatedAt: response.data.updated_at,
          }
          setPost(mappedPost)
        }
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })

    // クリーンアップ関数
    return () => {
      isMounted = false
    }
  }, [params.id])

  return (
    <div className="post-detail-container">
      <div className="post-detail-card">
        <div className="post-detail-header">
          <div className="post-detail-avatar">
            <span>{post?.postUserId || '?'}</span>
          </div>
          <div className="post-detail-meta">
            <div className="post-detail-username">
              ユーザーID: {post?.postUserId}
            </div>
            <div className="post-detail-date">
              {post?.createdAt && new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
        {post?.imageUrl && (
          <div className="post-detail-image-wrap">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="post-detail-image"
            />
          </div>
        )}
        <div className="post-detail-body">
          <h2 className="post-detail-title">{post?.title}</h2>
          <p className="post-detail-desc">{post?.description}</p>
        </div>
        <div className="post-detail-divider" />
        <div className="post-detail-info-row">
          <span>投稿ID: {post?.id}</span>
          <span>
            更新: {post?.updatedAt && new Date(post.updatedAt).toLocaleString()}
          </span>
        </div>
        <div className="post-detail-location-row">
          <span>緯度: {post?.latitude}</span>
          <span>経度: {post?.longitude}</span>
        </div>
        {post?.latitude && post?.longitude && (
          <div className="post-detail-map">
            <MapContainer
              center={[post.latitude, post.longitude]}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[post.latitude, post.longitude]} />
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostDetail
