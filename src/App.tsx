import './App.css'
import { Sidebar } from '../components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '40px', marginLeft: '200px' }}>
        <div>Hello</div>
      </main>
    </div>
  )
}

export default App
