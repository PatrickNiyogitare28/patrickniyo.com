import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { ISocialMedia } from './interfaces/ISocialMedia';

export const About = (): JSX.Element => {
  const media: Array<ISocialMedia> = [
    {
      name:'Github',
      link:'https://github.com/PatrickNiyogitare28'
    },
    {
      name:'Twitter',
      link:'https://twitter.com/niyogitare'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/patrick-niyogitare-76b469184/'
    },
    {
      name:'Github gist',
      link:'https://gist.github.com/PatrickNiyogitare28'
    }
  ]
  return (
    <Layout
      customMeta={{
        title: 'About - Code-Ark',
      }}
    >
      <div className='flex justify-between w-4/5  items-center' style={{height:'60vh'}}>
        <div className='w-2/5'>
          <Image src="/images/avatar.jpg" alt="Patrick Niyogitare" width="200" height="200" 
          className='rounded-full'
          />
        </div>
        <div className='w-4/5'>
        <h2>Patrick Niyogitare</h2>
        <p className='mt-10'>Software engineering candidate @RwCodingAcademy. 🎯 building experience working with teams. blogger | Open source enthusiast.</p>
         
        <div className="mt-2">
        {media.map((platform:ISocialMedia, index:number) => (
          <code  key={index.toString()}>
          <a href={platform.link} target='_blank'
          className='ml-2 text-xs border p-2 rounded'
         >{platform.name}</a>
          </code>
        ))}
        </div>

        <p className='mt-5'>You can reach out via <a href='mailto:patrickniyogitare28@gmail.com' target='_blank'>patrickniyogitare28@gmail.com</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
