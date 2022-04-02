import { Link } from 'react-router-dom';
import PostNewLink from './PostNewLink';
import './post-new-header.css';

const menuLinks = [
  { name: 'Публикация', to: ''},
  { name: 'Фото/видео', to: 'camera'},
  { name: 'Прямой эфир', to: 'stream'},
  { name: 'Ещё', to: 'more'},
];

export default function PostNewHeader() {
  return (
    <header className='post-new-crud__header'>
      <nav className='post-new-crud__menu menu-post-new-crud'>
        <ul className='menu-post-new-crud__list'>
          {menuLinks.map((menuLink, index) =>
            <li key={index}>
              <div className='menu-post-new-crud__link-wrapp'>
                <PostNewLink className='menu-post-new-crud__link' to={menuLink.to}>{menuLink.name}</PostNewLink>
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Link className='post-new-crud__btn-close' to="/task2"><span className='_visually-hidden'>Закрыть</span></Link>
    </header>
  );
}
