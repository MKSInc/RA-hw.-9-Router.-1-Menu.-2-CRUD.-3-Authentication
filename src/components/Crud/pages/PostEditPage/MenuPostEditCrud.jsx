import { Link } from 'react-router-dom';

const menuLinks = [
  { name: 'Фото/Видео', to: 'camera' },
  { name: 'Отметить друзей', to: 'friends' },
  { name: 'Чувства/Действия', to: 'actions' },
  { name: 'Отметить посещение', to: 'map' },
  { name: 'GIF', to: 'gif' },
];

export default function MenuPostEditCrud() {
  return (
    <nav className='post-edit-crud__menu menu-post-edit-crud'>
      <div className='card-crud__container'>
        <ul className='menu-post-edit-crud__list'>
          {menuLinks.map((menuLink, index) => (
            <li key={index}>
              <Link className='menu-post-edit-crud__link' to={menuLink.to}>{menuLink.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
