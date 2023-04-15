import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

type Props = { src: string; title: string };

const Image = ({ src, title }: Props) => {
  const [save, setSave] = useState(false);

  const clickHandler = () => {
    setSave((prev) => !prev);
  };

  return (
    <div className='relative group'>
      <img src={src} alt={title} />

      <figcaption className='absolute left-0 bottom-0 right-0 bg-black/40 p-2 px-4 duration-500 text-text-inverse opacity-0 group-hover:opacity-100'>
        <div className='flex justify-between'>
          <div>
            <p className='text-sm'>{title}</p>
            <p className='text-xs'>25,325 likes - 3,325 shares</p>
          </div>
          <button onClick={clickHandler}>
            {save ? (
              <FaBookmark className='text-lg' />
            ) : (
              <FaRegBookmark className='text-lg' />
            )}
          </button>
        </div>
      </figcaption>
    </div>
  );
};

export default Image;
