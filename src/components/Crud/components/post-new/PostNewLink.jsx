import { Link, useMatch } from 'react-router-dom';

/* Пришлось усложнить код созданием кастомного компонента ссылки. Так как в одном проекте находятся три задачи,
   это влечет за собой использование вложенных роутов. Используется хук useMatch. 
   Сделано на примере из видео: https://www.youtube.com/watch?v=U7c7k-NBtQg&t=449s
   */

export default function PostNewLink({ className, to, children }) {
  const match = useMatch({
    path: `task2/posts/new/${to}`,
    end: !to,
  });

  return (
    <Link
      className={`${className}${match ? ' menu-post-new-crud__link_active' : ''}`}
      to={to}>
    {children}
    </Link>
  );
}
