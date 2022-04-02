export default function Publication({ content, setContent }) {
  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className='post-crud__publication'>
      <textarea value={content} onChange={handleTextareaChange} placeholder='Напишите текст публикации...'/>
    </div>
  );
}
