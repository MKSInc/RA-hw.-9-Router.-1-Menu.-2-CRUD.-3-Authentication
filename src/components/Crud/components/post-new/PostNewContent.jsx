import { Route, Routes } from 'react-router-dom';
import Publication from './Publication';
import Camera from './Camera';
import Stream from './Stream';
import More from './More';
import './post-new-content.css';

export default function PostNewContent({ content, setContent }) {
  return (
    <div className='post-new-crud__main'>
      <div className='post-crud__avatar _ibg'>
        <img src="https://placeimg.com/40/40/people" alt="Post author avatar"/>
      </div>

      <div className='post-crud__block-1'>
        <Routes>
          <Route index element={<Publication content={content} setContent={setContent} />} />
          <Route path="camera" element={<Camera />} />
          <Route path="stream" element={<Stream />} />
          <Route path="more" element={<More />} />
        </Routes>
      </div>
    </div>
  );
}
