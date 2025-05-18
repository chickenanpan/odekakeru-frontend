import React, { useState } from 'react'
import './PostForm.css'

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    setImage(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }

  const handlePostSubmit = (
    title: string,
    description: string,
    image: File | null
  ) => {
    alert(
      `タイトル: ${title}\n説明: ${description}\n画像: ${
        image ? image.name : 'なし'
      }`
    )
    // 投稿処理をここに追加
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handlePostSubmit(title, description, image)
    setTitle('')
    setDescription('')
    setImage(null)
    setImagePreview(null)
    setShowModal(false)
  }

  return (
    <div className="post-form-container">
      <form className="post-form" onSubmit={handleSubmit}>
        <h2 className="post-form-title">お出かけスポットをシェアしよう</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label className="post-form-label">タイトル:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="post-form-input"
            placeholder="タイトルを入力"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label className="post-form-label">説明文:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="post-form-textarea"
            placeholder="説明文を入力"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label className="post-form-label">画像:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ fontSize: 16 }}
          />
          {imagePreview && (
            <>
              <img
                src={imagePreview}
                alt="プレビュー"
                className="post-form-image-preview"
                onClick={() => setShowModal(true)}
                title="クリックで拡大"
              />
              {showModal && (
                <div
                  className="post-form-modal"
                  onClick={() => setShowModal(false)}
                >
                  <img
                    src={imagePreview}
                    alt="拡大プレビュー"
                    className="post-form-modal-image"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </>
          )}
        </div>
        <button type="submit" className="post-form-button">
          投稿
        </button>
      </form>
    </div>
  )
}
