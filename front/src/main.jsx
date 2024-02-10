import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
/* BrouserRouterは1番上位のjsxファイルにて設定（Appコンポーネントを囲う） */
import {BrowserRouter as Router} from 'react-router-dom'
/* プロジェクト全体で共通するcss定義用のファイル読込※関数も使用したいためcssファイルではなくjsxファイルを使用するため必要 */
import GlobalStyle from './GlobalStyle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      {/* ルート要素（全体に適用したい場合）にGlobalStyleコンポーネントを置くことでプロジェクト全体に共通のcssを適用できる */}
      <GlobalStyle/>
      <App />
    </Router>
  </React.StrictMode>
);
