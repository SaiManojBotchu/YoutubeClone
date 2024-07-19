import React from 'react';

function ButtonList() {
  const links = ['All', 'Music', 'Live', 'Cricket', 'News', 'Mixes', 'Game shows'];
  return (
    <div className='p-4 space-x-3'>
      {links.map((link) => (
        <button
          key={link}
          className={`pt-1 pb-1 px-3 font-semibold rounded-lg ${
            link === 'All' ? 'bg-black text-white' : 'bg-gray-200'
          } `}>
          {link}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
