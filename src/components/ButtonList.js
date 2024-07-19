import React from 'react';

function ButtonList() {
  const links = ['All', 'Music', 'Live', 'Cricket', 'News', 'Mixes', 'Game shows'];
  return (
    <div className='p-4 space-x-3'>
      {links.map((link) => (
        <button className='pt-1 pb-1 px-3 bg-gray-200 rounded-lg'>{link}</button>
      ))}
    </div>
  );
}

export default ButtonList;
