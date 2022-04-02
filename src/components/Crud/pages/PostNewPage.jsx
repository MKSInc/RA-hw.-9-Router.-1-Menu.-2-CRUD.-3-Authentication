import { useState } from 'react';
import PostNewHeader from '../components/post-new/PostNewHeader';
import PostNewContent from '../components/post-new/PostNewContent';
import CrudMenu from '../components/CrudMenu';
import links from '../utility/links';

const menuPostNewLinks = [
  { name: 'Опубликовать', to: '/task2', onClick: () => {} },
];

export default function PostNewPage() {
  const [ content, setContent ] = useState('');

  const handlePublishClick = () => {
    fetch(`${links.root}/posts`, {
      method: 'POST',
      body: content,
    })
      .then((response) => response.json())
      .then((data) => {if (!data.success) throw new Error('Ошибка при добавлении поста.')});
  };

  menuPostNewLinks.find((link) => link.name === 'Опубликовать')
    .onClick = handlePublishClick;

  return (
    <div className='crud__post-new-page'>
      <div className='crud__post post-crud post-new-crud'>
        <div className='card-crud card-crud_darker'>
          <div className='card-crud__body card-crud__wrapp-top'>
            <div className='card-crud__container'>
              <PostNewHeader />
              <PostNewContent content={content} setContent={setContent} />
            </div>

            <footer className='post-crud__footer post-crud__footer_gray'>
              <div className='card-crud__container'>
                <CrudMenu links={menuPostNewLinks} type={2} />
              </div>
            </footer>
          </div>
        </div>
      </div>    
    </div>
  );
}
