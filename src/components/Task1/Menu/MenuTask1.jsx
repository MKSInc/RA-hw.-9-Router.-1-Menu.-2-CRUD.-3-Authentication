import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'menu-task-1__item menu-task-1__item-active' : 'menu-task-1__item';

export default function MenuTask1() {
  return (
    <nav className="task-1__menu menu-task-1">
      <NavLink className={setActive} to="/">Главная</NavLink>
      <NavLink className={setActive} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={setActive} to="/timeattack">Time Attack</NavLink>
      <NavLink className={setActive} to="/forza">Forza Karting</NavLink>
    </nav>
  )
}
