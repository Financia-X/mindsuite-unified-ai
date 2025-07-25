import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: '4rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          MindSuite
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          opacity: 0.8
        }}>
          Your AI-Powered Productivity Suite
        </p>
        <p style={{
          fontSize: '1.1rem',
          opacity: 0.7
        }}>
          70+ AI tools designed for every role and industry. Experience the future of productivity.
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)