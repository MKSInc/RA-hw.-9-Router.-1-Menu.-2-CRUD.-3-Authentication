import { Link, useMatch } from 'react-router-dom';

/* Пришлось усложнить код созданием кастомного компонента ссылки. Так как в одном проекте находятся три задачи,
   это влечет за собой использование вложенных роутов. Так же чтобы определить активную ссылку в меню в ситуации когда
   отрисовка главной страницы первой задачи происходит по адресу "/", а не "/home", используется хук useMatch. 
   Сделано на примере из видео: https://www.youtube.com/watch?v=U7c7k-NBtQg&t=449s
   */

export default function Task1Link({ className, to, children }) {
  const match = useMatch({
    path: `task1/${to}`,
    end: !to,
  });

  return (
    <Link
      className={`${className}${match ? ' menu-task-1__item-active': ''}`}
      to={to}>
      {children}
    </Link>
  )
}
