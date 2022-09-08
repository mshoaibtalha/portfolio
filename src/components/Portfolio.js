import React from 'react';
import jointheque from '../assets/portfolio/jointheque.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jointheque,
      link: 'https://jointheqq.herokuapp.com/customer/home',
      gitLink: 'https://github.com/mshoaibtalha/jointheQ',
    },
  ];

  return (
    <div name='portfolio' className='bg-white w-full text-black md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, link, gitLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a href={link} target='_blank' rel='noreferrer'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Demo
                  </button>
                </a>
                <a href={gitLink} target='_blank' rel='noreferrer'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
