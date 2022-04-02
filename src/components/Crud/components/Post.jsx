import { Link } from 'react-router-dom';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostMenu from './PostMenu';

/* Компонент Post имеет два варианта отображения:
   1. Первый вариант - по ссылке '/'.
      Текст поста является ссылкой и ведет на страницу просмотра поста ('/posts/{postId}').
      В подвале подставляется компонент для написания комментариев.
   2. Второй вариант - по ссылке '/posts/{postId}'.
      Текст поста не является ссылкой.
      В подвале подставляется компонент с меню и кнопками 'Изменить', 'Удалить'.
   isLink: по умолчанию - true. Должен ли быть текст поста ссылкой?
   footer: компонет для комментариев или меню.
   */

export default function Post({ isLink, footer, post }) {
  return (
    <div className='crud__post post-crud'>
      <div className='card-crud'>
        <div className='card-crud__body card-crud__wrapp-top'>
          <div className='card-crud__container'>
            <PostHeader created={post.created} />
            {isLink ?
              <Link 
                className='post-crud__link'
                to={`posts/${post.id}`}>
                <PostContent content={post.content} />
              </Link> :
              <PostContent content={post.content} />}
            <PostMenu />
          </div>

          <footer className='post-crud__footer'>
            <div className='card-crud__container'>
              {footer}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

Post.defaultProps = {
  isLink: true,
}
