import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { ISocialMedia } from '../../interfaces/ISocialMedia';

export const About = (): JSX.Element => {
  const media: Array<ISocialMedia> = [
    {
      name: 'Github',
      link: 'https://github.com/PatrickNiyogitare28',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/niyogitare',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/patrick-niyogitare-76b469184/',
    },
    {
      name: 'Gist',
      link: 'https://gist.github.com/PatrickNiyogitare28',
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@patrickniyogitare6555/videos',
    },
  ];
  return (
    <Layout
      customMeta={{
        title: 'About - Patrick Niyogitare',
      }}
    >
      <div
        className="flex justify-between w-4/5  items-center about-container"
        style={{ height: '60vh' }}
      >
        <div className="w-2/5">
          <Image
            src="/images/avatar.jpg"
            alt="Patrick Niyogitare"
            width="200"
            height="200"
            className="rounded-full"
          />
        </div>

        <div className="w-4/5">
          <h2>Patrick Niyogitare</h2>
          <p className="mt-10">
            <label>
              Rwanda Coding Academy Graduate, Software Engineer, Mentor,
              Blogger, Writer & Gymnast.
            </label>
            <label className="block mt-2">
              2021 NASA Space Apps Galactic Problem Solver.
            </label>
            <label className="mt-4 block">
              Fun fact: I need to take enough sleep before tackling down a tough
              task 😃.
            </label>
          </p>
          <div className="mt-2 social-wrapper">
            {media.map((platform: ISocialMedia, index: number) => (
              <code key={index.toString()}>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-xs border p-2 rounded"
                >
                  {platform.name}
                </a>
              </code>
            ))}
          </div>

          <p className="mt-5">
            You can reach out via{' '}
            <a
              href="mailto:patrickniyogitare28@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              patrickniyogitare28@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="https://activity-graph.herokuapp.com/graph?username=patrickniyogitare28&theme=github&hide_border=true&bg_color=0d1117&area_color=1f6fea&line=38d252&point=1f6fea&color=fefefe"
          height={500}
          width={1000}
        />
      </div>
    </Layout>
  );
};

export default About;
