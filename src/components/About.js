import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          After years of working in field of IT as supply Chain Manager and
          Technician , I've decided to turn my hobby into a full-time job and
          succeeded in securing a spot at Salt's JavaScript bootcamp. I was
          chosen among over 1000 applicants and together with thirty other
          passionate hobby coders started my journey into the world of
          full-stack development. After three intensive, challenging, and most
          importantly rewarding months, I am excited about joining a company and
          contributing to its growth. I love creative problem solving, building
          websites and mobile applications. I am always looking to learn new
          skills and develop my abilities.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
