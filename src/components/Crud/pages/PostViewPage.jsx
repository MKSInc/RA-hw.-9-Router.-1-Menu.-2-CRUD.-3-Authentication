import { useState, useEffect, useCallback } from 'react';
import useAppContext from '../hooks/useAppContext';
import useHttp from '../hooks/useHttp';
import Post from '../components/Post';
import CrudMenu from '../components/CrudMenu';
import { useParams } from 'react-router-dom';
import links from '../utility/links';

const menuPostViewLinks = [
  { name: 'Изменить', to: '' },
  { name: 'Удалить', to: '/task2', color: 'red', onClick: () => {} }
];

export default function PostViewPage() {
  const { setWaitingResponse } = useAppContext();
  const { loading, request, error, cleanError } = useHttp();

  const [ post, setPost ] = useState(null);
  const { id } = useParams();
  
  const fetchData = useCallback(async () => {
    const post = await request(`${links.root}/post/${id}`);
    if (post) setPost(post);
  }, [id, request]);

  useEffect(() => fetchData(), [fetchData]);

  const handleDeleteClick = async () => {
    setWaitingResponse(true);
    await request(`${links.root}/posts/${id}`, { method: 'DELETE' });
    setWaitingResponse(false);
  };

  useEffect(() => {
    if (error) {
      cleanError();
      // Здесь можно выдать сообщение об ошибке.
    }
  }, [error, cleanError]);

  menuPostViewLinks.find((link) => link.name === 'Изменить')
  .to = `/task2/posts/edit/${id}`;

  menuPostViewLinks.find((link) => link.name === 'Удалить')
    .onClick = handleDeleteClick;

  return (
    <div className='crud__post-view-page'>
      {
        loading
        ?
        <div>Загрузка...</div>
        :
        post && <Post post={post} footer={<CrudMenu links={menuPostViewLinks} />} isLink={false} /> 
      }
    </div>
  );
}
