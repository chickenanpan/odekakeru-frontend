import './App.css'
import { Sidebar } from './components/Sidebar'
import { PostList } from './pages/PostList'
import { PostForm } from './pages/PostForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Top from './pages/Top'
import Mypage from './pages/Mypage'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <div className="app-root">
      <Router>
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/list" element={<PostList />} />
            <Route path="/post" element={<PostForm />} />
            <Route path="/detail/:id" element={<PostDetail />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
