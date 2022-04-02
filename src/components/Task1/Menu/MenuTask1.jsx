import Task1Link from './Task1Link';

export default function MenuTask1() {
  return (
    <nav className="task-1__menu menu-task-1">
      <Task1Link className='menu-task-1__item' to="">Главная</Task1Link>
      <Task1Link className='menu-task-1__item' to="drift">Дрифт-такси</Task1Link>
      <Task1Link className='menu-task-1__item' to="timeattack">Time Attack</Task1Link>
      <Task1Link className='menu-task-1__item' to="forza">Forza Karting</Task1Link>
    </nav>
  )
}
