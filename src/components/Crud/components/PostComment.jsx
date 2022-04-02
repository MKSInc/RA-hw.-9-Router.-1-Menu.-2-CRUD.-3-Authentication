import smile from '../img/smile.svg';
import camera from '../img/camera.svg';

export default function PostComment() {
  return (
    <div className='post-crud__comment comment-post-crud'>
      <div className='post-crud__avatar post-crud__avatar_small _ibg'>
        <img src="https://placeimg.com/40/40/people" alt="Comment author avatar"/>
      </div>

      <div className='comment-post-crud__input'>
        <input placeholder='Напишите комментарий...'/>
        <div className='comment-post-crud__icons'>
          <button className='comment-post-crud__icon _ibg'>
            <img src={smile} alt="smile" />
          </button>
          <button className='comment-post-crud__icon _ibg'>
            <img src={camera} alt="camera" />
          </button>
        </div>
      </div>
    </div>
  );
}
