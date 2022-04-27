import { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext';
import useHttp from '../../hooks/useHttp';
import CrudMenu from '../../components/CrudMenu';
import Publication from '../../components/post-new/Publication';
import ActionItem from './ActionItem';
import MenuPostEditCrud from './MenuPostEditCrud';
import links from '../../utility/links';
import './post-edit-crud.css';

const menuPostEditLinks = [
  { name: 'Сохранить', to: '/task2', onClick: () => {} }
];

export default function PostEditPage() {
  const { setWaitingResponse } = useAppContext();
  const { request, error, cleanError } = useHttp();
  
  const [ content, setContent ] = useState('');
  const [ post, setPost ] = useState(null);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const responsePost = await request(`${links.root}/post/${id}`);
    if (responsePost) {
      setPost(responsePost);
      setContent(responsePost.content);
    }
  }, [id, request]);

  useEffect(() => fetchData(), [fetchData]);

  const handleSaveClick = async () => {
    setWaitingResponse(true);

    await request(`${links.root}/save`, {
      method: 'POST',
      body: JSON.stringify({...post, content}),
    });

    setWaitingResponse(false);
  };

  useEffect(() => {
    if (error) {
      cleanError();
      // Здесь можно выдать сообщение об ошибке.
    }
  }, [error, cleanError]);

  // Чтобы предотвратить ошибку в консоли: "Can't perform a React state update on an unmounted component. ..."
  useEffect(() => {
    return () => {
      setContent('');
    };
  }, []);

  menuPostEditLinks.find((link) => link.name === 'Сохранить')
    .onClick = handleSaveClick;

  return (
    <div className='crud__post-edit-page'>
      <div className='crud__post post-crud post-edit-crud'>
        <div className='card-crud card-crud_white'>
          <header className='post-edit-crud__header header-post-edit-crud'>
            <div className='header-post-edit-crud__body card-crud__container'>
              <div className='post-edit-crud__title'>Редактировать публикацию</div>
              <Link className='post-edit-crud__btn-close' to='/task2'><span className='_visually-hidden'>Закрыть</span></Link>
            </div>
          </header>

          <div className='card-crud__container'>
            <div className='post-edit-crud__main'>
                <div className='post-crud__avatar _ibg'>
                  <img src="https://placeimg.com/40/40/people" alt="Post author avatar"/>
                </div>
                <div className='post-crud__block-1'>
                  <Publication content={content} setContent={setContent} />
                  <ActionItem id={id} />
                </div>
            </div>
          </div>

          <MenuPostEditCrud />

          <footer className='post-crud__footer post-crud__footer_gray'>
            <div className='card-crud__container'>
              <CrudMenu links={menuPostEditLinks} type={2} />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
