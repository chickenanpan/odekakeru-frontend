import './App.css'
import { Sidebar } from './components/Sidebar'
import { PostList } from './components/PostList'

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
  // 必要に応じて追加
]

function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <main className="main-content">
        <PostList posts={posts} />
      </main>
    </div>
  )
}

export default App
