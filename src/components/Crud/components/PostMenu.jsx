export default function PostMenu() {
  return (
    <nav className='post-crud__menu menu-post-crud'>
      <ul className='menu-post-crud__list'>
        <li><button className='menu-post-crud__btn menu-post-crud__btn-like'>Нравится</button></li>
        <li><button className='menu-post-crud__btn menu-post-crud__btn-comment'>Комментировать</button></li>
      </ul>
    </nav> 
  );
}
