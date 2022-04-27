import { Routes, Route } from 'react-router-dom';
import AppProvider from './hoc/AppProvider';
import HomePage from './pages/HomePage';
import PostViewPage from './pages/PostViewPage';
import PostNewPage from './pages/PostNewPage';
import PostEditPage from './pages/PostEditPage/PostEditPage';
import './crud.css';

export default function Crud() {
  return (
    <div className='crud'>
      <div className='crud__container'>
        <AppProvider>        
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="posts/new/*" element={<PostNewPage />} />
            <Route path="posts/:id" element={<PostViewPage />} />
            <Route path="posts/edit/:id/*" element={<PostEditPage />} />
          </Routes>
        </AppProvider>
      </div>
    </div>
  );
}
