import getTimeAgo from '../utility/getTimeAgo';

export default function PostHeader({ created }) {
  return (
    <header className='post-crud__header header-post-crud'>
      <div className='header-post-crud__column'>
        <div className='post-crud__avatar _ibg'>
          <img src="https://placeimg.com/40/40/people" alt="Post author avatar"/>
        </div>
      </div>
      <div className='header-post-crud__column header-post-crud__column-2'>
        <div className='post-crud__author'>Armani Galeotti</div>
        <div className='post-crud__info'>
          <div className='post-crud__role'>Основатель группы</div>
          <div className='post-crud__time'>{getTimeAgo(created)}</div>
        </div>                      
      </div>
      <div className='header-post-crud__column header-post-crud__column-3'>
        <button className='post-crud__btn-more'>
          <span className='_visually-hidden'>Еще</span>
        </button>
      </div>
    </header>
  );
}
