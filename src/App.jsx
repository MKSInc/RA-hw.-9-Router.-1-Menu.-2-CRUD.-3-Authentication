import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Task1 from './components/Task1';
import Crud from './components/Crud';

// В зависимости от нажатой ссылки подставляется компонент соответствующей задачи.
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				{/* Чтобы по адресу "/" отображалась первая задача, сделана переадресация на "/task1". */}
				<Route index element={<Navigate to="/task1" replace />}/>
				{/* Переадресация после запуска команды 'npm run start'. */}
				<Route path="RA-hw.-9-Router.-1-Menu.-2-CRUD.-3-Authentication" element={<Navigate to="/task1" replace />}/>
				{/* Первую задачу можно было бы выводить и сразу по адресу "/",
				 но для единообразия дерева ссылок она находится по адресу "/task1". */}
				<Route path="task1/*" element={<Task1 />} />			
				<Route path="task2/*" element={<Crud />} />
				<Route path="task3/*" element={<div>Task3</div>} />
			</Route>
		</Routes>
	);
}
