import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import WorkbenchPage from './pages/WorkbenchPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workbench" element={<WorkbenchPage />} />
        <Route path="/workbench/:chatId" element={<WorkbenchPage />} />
      </Routes>
    </Router>
  )
}

export default App
