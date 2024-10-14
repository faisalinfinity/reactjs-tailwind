
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
