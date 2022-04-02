import { Link, Routes, Route } from 'react-router-dom';
import Actions from './Actions';
import Camera from './Camera';
import Friends from './Friends';
import Gif from './Gif';
import Map from './Map';
import './action-item.css';

export default function ActionItem({ id }) {
  return (
    <div className='post-edit-crud__action-item action-item-post-edit-crud'>
      <Routes>
        <Route path='camera' element={<Camera />} />
        <Route path='friends' element={<Friends />} />
        <Route path='actions' element={<Actions />} />
        <Route path='map' element={<Map />} />
        <Route path='gif' element={<Gif />} />
      </Routes>
      <Link className='action-item-post-edit-crud__btn-close' to={`/task2/posts/edit/${id}`}>
        <span className='_visually-hidden'>Закрыть</span>
      </Link>
    </div>
  );
}
