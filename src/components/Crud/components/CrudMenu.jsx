import { Link } from 'react-router-dom';

const setColor = (color) => color ? ` menu-crud__link_${color}`: '';

export default function CrudMenu({ links, type }) {
  const menuTypes = {
    1: 'menu-crud_type-1',
    2: 'menu-crud_type-2',
  };

  return (
    <nav className={`crud__menu menu-crud ${menuTypes[type]}`}>        
      <ul className='menu-crud__list'>
        {links.map((link, index) => 
          <li key={index}>
            <Link className={`menu-crud__link${setColor(link.color)}`} to={link.to} onClick={link.onClick}>{link.name}</Link>
          </li>)}
      </ul> 
    </nav>
  );
}

CrudMenu.defaultProps = {
  type: 1,
}
