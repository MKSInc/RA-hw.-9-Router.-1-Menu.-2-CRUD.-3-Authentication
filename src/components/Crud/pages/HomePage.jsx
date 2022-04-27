import { useState, useEffect, useCallback } from 'react';
import useAppContext from '../hooks/useAppContext';
import useHttp from '../hooks/useHttp';
import CrudMenu from '../components/CrudMenu';
import Post from '../components/Post';
import PostComment from '../components/PostComment';
import links from '../utility/links';

const menuHomeLinks = [
  { name: 'Создать пост', to: 'posts/new' },
];

export default function HomePage() {
  const { waitingResponse } = useAppContext();
  const { loading, request, error, cleanError } = useHttp();

  const [ posts, setPosts ] = useState([]);

  const fetchData = useCallback(async () => {
    const posts = await request(`${links.root}/posts`);
    if (posts) setPosts(posts)
  }, [request]);
  
  useEffect(() => {
    if (!waitingResponse) {
      fetchData();
    }
  }, [waitingResponse, fetchData]);

  useEffect(() => {
    if (error) {
      cleanError();
      // Здесь можно выдать сообщение об ошибке.
    }
  }, [error, cleanError]);

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

      {
        waitingResponse || loading
        ?
        <div>Загрузка...</div>
        :
        <div className='crud__posts'>
          {posts.map((post) => <Post key={post.id} post={post} footer={<PostComment />} /> )}
        </div>
      }

    </div>
  );
}
