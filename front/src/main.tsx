import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* !（非nullアサーション演算子）その左側の式がnullまたはundefinedでないことをコンパイラに伝えるもの */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
