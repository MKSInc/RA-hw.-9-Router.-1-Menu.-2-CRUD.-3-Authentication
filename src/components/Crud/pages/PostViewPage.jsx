import { useState, useEffect } from 'react';
import Post from '../components/Post';
import CrudMenu from '../components/CrudMenu';
import { useParams } from 'react-router-dom';
import links from '../utility/links';

const menuPostViewLinks = [
  { name: 'Изменить', to: '' },
  { name: 'Удалить', to: '/task2', color: 'red', onClick: () => {} }
];

export default function PostViewPage() {
  const [ post, setPost ] = useState(null);
  const { id } = useParams();

  menuPostViewLinks.find((link) => link.name === 'Изменить')
    .to = `/task2/posts/edit/${id}`;

  const handleDeleteClick = () => {
    fetch(`${links.root}/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json())
      .then((data) => { if (!data.success) throw new Error('Ошибка при удалении поста.') });
  };

  menuPostViewLinks.find((link) => link.name === 'Удалить')
    .onClick = handleDeleteClick;

  useEffect(() => {
    fetch(`${links.root}/post/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className='crud__post-view-page'>
      {post && <Post post={post} footer={<CrudMenu links={menuPostViewLinks} />} isLink={false} /> }
    </div>
  );
}
