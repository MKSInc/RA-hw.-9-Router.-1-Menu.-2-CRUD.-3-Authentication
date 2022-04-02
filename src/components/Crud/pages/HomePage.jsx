import { useState, useEffect } from 'react';
import CrudMenu from '../components/CrudMenu';
import Post from '../components/Post';
import PostComment from '../components/PostComment';
import links from '../utility/links';

const menuHomeLinks = [
  { name: 'Создать пост', to: 'posts/new' },
];

export default function HomePage() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    fetch(`${links.root}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className='crud__home-page'>
      <div className='crud__header'>
        <div className='crud__card card-crud'>
          <div className='card-crud__body'>
            <div className='card-crud__container'>
              <CrudMenu links={menuHomeLinks} />
            </div>
          </div>
        </div>
      </div>

      <div className='crud__posts'>
        {posts.map((post) => <Post key={post.id} post={post} footer={<PostComment />} /> )}
        {/* <div className='crud__post post-crud'>
          <div className='card-crud'>
            <div className='card-crud__body'>
              <div className='card-crud__container'>
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
                      <div className='post-crud__time'>11/22/33</div>
                    </div>                      
                  </div>
                  <div className='header-post-crud__column header-post-crud__column-3'>
                    <button className='post-crud__btn-more'>
                      <span className='_visually-hidden'>Еще</span>
                    </button>
                  </div>
                </header>

                <div className='post-crud__content'>
                  <p>Пост, относящийся к курсу по React</p>
                </div>    

                <nav className='post-crud__menu menu-post-crud'>
                  <ul className='menu-post-crud__list'>
                    <li><button className='menu-post-crud__btn menu-post-crud__btn-like'>Нравится</button></li>
                    <li><button className='menu-post-crud__btn menu-post-crud__btn-comment'>Комментировать</button></li>
                  </ul>
                </nav>              
              </div>

              <footer className='post-crud__footer'>
                <div className='card-crud__container'>
                  <PostComment />
                </div>
              </footer>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
