import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: { fontSize: '3rem', marginBottom: '1rem' }
    }, 'MindSuite'),
    React.createElement('p', {
      key: 'subtitle',
      style: { fontSize: '1.25rem', opacity: 0.8 }
    }, 'Your AI-Powered Productivity Suite')
  ])
}

const root = createRoot(document.getElementById('root'))
root.render(React.createElement(App))