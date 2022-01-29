import { Routes, Route } from 'react-router-dom';
import MenuTask1 from './Menu/MenuTask1';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import TimeAttackPage from './pages/TimeAttackPage';

import './task1.css';

export default function Task1() {
  return (
    <div className='task-1'>
      <header className='task-1__header'>
        <div className='task-1__container'>
          <MenuTask1 />
        </div>
      </header>
      <div className='task-1__container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/forza" element={<ForzaPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
        </Routes>
      </div>
    </div>
  );
}
