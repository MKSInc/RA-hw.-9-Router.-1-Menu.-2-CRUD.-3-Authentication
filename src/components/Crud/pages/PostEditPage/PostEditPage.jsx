import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [ content, setContent ] = useState('');
  const [ post, setPost ] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${links.root}/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setPost(data);
      });
  }, [id]);

  const handleSaveClick = () => {
    fetch(`${links.root}/save`, {
      method: 'POST',
      body: JSON.stringify({...post, content}),
    })
  };

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
