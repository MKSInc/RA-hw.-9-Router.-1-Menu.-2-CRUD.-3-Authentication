import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? 'menu-header__link menu-header__link_active' : 'menu-header__link';

export default function AppLayout() {
	return (
		<div className='wrapper'>
			<header className='header' id='header'>
				<div className='header__body _container'>
					<div className='header__title'>9. Домашнее задание к лекции «React Router»</div>
					<nav className='header__menu menu-header'>
						<ol className='menu-header__list'>
							<li><NavLink className={setActive} to="/task1">9.1. <span className='menu-header__text'>Навигационное меню</span></NavLink></li>
							<li><NavLink className={setActive} to="/task2">9.2. <span className='menu-header__text'>CRUD</span></NavLink></li>
							<li><NavLink className={setActive} to="/task3">9.3. <span className='menu-header__text'>Authentication*</span></NavLink></li>
						</ol>
					</nav>
				</div>
			</header>

			<main className='main'>
				<div className='task _container'>
					<div className='task__body'>
            {/* Сюда подставится компонент соответствующего роута. */}
						<Outlet />
					</div>
				</div>
			</main>
		</div>
	);
}
