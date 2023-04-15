const SearchBar = () => {
  return (
    <div className='border-b-[1.5px] border-gray-1 flex items-end pb-2 pl-2 focus-within:border-text group transition-all duration-200'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 mr-4 text-gray-1 duration-200  group-focus-within:stroke-text'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <circle cx='10' cy='10' r='7' />
        <line x1='21' y1='21' x2='15' y2='15' />
      </svg>
      <input
        type='search'
        name='search'
        className='outline-none flex-1 sm:flex-none placeholder:text-gray-1 sm:w-80 duration-200'
        id='search'
        placeholder='Search'
      />
    </div>
  );
};

export default SearchBar;
