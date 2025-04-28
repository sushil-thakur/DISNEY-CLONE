import React from 'react';

function HeaderItem({ name, icon: Icon }) {
  return (
    <div className='text-white flex flex-col items-center'>
      {Icon && <Icon className="text-2xl mb-1" />}
      <h2 className="text-sm">{name}</h2>
    </div>
  );
}

export default HeaderItem;