import ReactDOM from 'react-dom/client';
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SkeletonTheme>
);

