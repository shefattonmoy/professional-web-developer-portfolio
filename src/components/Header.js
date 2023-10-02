import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
            <h3 className='text-5xl font-semibold'><span className='bg-gradient-to-r from-violet-500 via-indigo-500 to-indigo-300 inline-block text-transparent bg-clip-text'>Shefat</span><br />Tonmoy</h3>
            <button className='btn btn-sm'><Link to="contact">Hire Me</Link></button>
        </div>
      </div>
    </header>
  );
};

export default Header;