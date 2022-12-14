import React from 'react';
import shoaibImage from '../assets/shoaib.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-white-800 py-10'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-black mt-14'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-black-500 py-4 max-w-md'>
            A business graduate turned software developer. I am driven by
            problem solving, teamwork and continuous improvement.
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={shoaibImage}
            alt='my profile'
            className='rounded-2xl object-cover h-80 w-50 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
