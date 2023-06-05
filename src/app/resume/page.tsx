import Card from '@/components/Card';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Label from '@/components/Label';
import Title from '@/components/Title';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';

function resumePage() {
  const bodyFrontend = (
    <div className='flex flex-wrap gap-4'>
      <Icon src='javascript.svg' alt='next13' />
      <Icon src='react.svg' alt='next13' />
      <Icon src='redux.svg' alt='next13' />
      <Icon src='next2.svg' alt='next13' />
      <Icon src='html.svg' alt='next13' />
      <Icon src='css.svg' alt='next13' />
      <Icon src='tailwind.svg' alt='next13' />
    </div>
  );

  const bodyBackend = (
    <div className='flex flex-wrap gap-4 p-[3px]'>
      <Icon src='/backend/node.svg' alt='node' />
      <Icon src='/backend/typescript.svg' alt='typescript' />
      <Icon src='/backend/jest.svg' alt='jest' />
      <Icon src='/backend/heroku.svg' alt='heroku' />
      <Icon src='/backend/prisma.svg' alt='prisma' />
      <Icon src='/backend/sql.svg' alt='sql' />
      <Icon src='/backend/mongo.svg' alt='mongo' />
      <Icon src='/backend/firebase.svg' alt='firebase' />
    </div>
  );

  const bodytechnology = (
    <div className='flex flex-wrap gap-4 p-[2px]'>
      <Icon src='/technology/git.svg' alt='git' />
      <Icon src='/technology/github.svg' alt='github' />
      <Icon src='/technology/jira.svg' alt='jira' />
      <Icon src='/technology/vscode.svg' alt='vscode' />
    </div>
  );

  const bodySchool = (
    <p className='text-justify'>
      This years I coursed my degree in Computer Sciene. I acquired a great
      fundamental knowledge about computers and programming. I took several
      types of subjects, going from AI to Cloud in my last year.
    </p>
  );
  const bodyFullStack = (
    <p className='text-justify'>
      This years I coursed my degree in Computer Sciene. I acquired a great
      fundamental knowledge about computers and programming. I took several
      types of subjects, going from AI to Cloud in my last year.
    </p>
  );

  const etiquetas = (
    <span className='flex gap-3'>
      <Label title='ReactJS' bgColor='bg-green-300' />
      <Label title='MongoDB' bgColor='bg-red-300' />
      <Label title='NodeJS' bgColor='bg-gray-300' />
      <Label title='Express' bgColor='bg-orange-300' />
    </span>
  );

  return (
    <Container>
      <div className='flex flex-col gap-7 my-7 dark:text-white'>
        <Title title='Resume' textCenter textBig />
        <section className='flex flex-col gap-5'>
          <Title title='About' icon={AiOutlineUser} />
          <p className='text-justify'>
            I consider myself a very curious person and a good learner. I am
            always investigating about new technologies, tools and ways to do
            things better. I am good at working in a team environment, always
            exchaning ideas about how to approach problems and solve them
            efficiently.
          </p>
        </section>
        <section className='flex flex-col gap-5'>
          <Title title='Skills' icon={HiCode} />
          <Card
            title={<Title title='Frontend' />}
            body={bodyFrontend}
            bordered
            line
          />
          <Card
            title={<Title title='Backend' />}
            body={bodyBackend}
            bordered
            line
          />
          <Card
            title={<Title title='Technology' />}
            body={bodytechnology}
            bordered
            line
          />
        </section>
        <section className='flex flex-col gap-5'>
          <Title title='Education' textBig />
          <Card
            title={<Title title='Systems Engineering' />}
            fecha='Jan 2016 - jul 2021'
            body={bodySchool}
            bordered
          />
        </section>
        <section className='flex flex-col gap-5'>
          <Title title='Experience' textBig />
          <Card
            title={<Title title='FullStack Bootcamp' />}
            fecha='Sep 2020 - Mar 2021'
            body={bodyFullStack}
            label={etiquetas}
            bordered
          />
          <Card
            title={<Title title='Fiverr Freelancer' />}
            fecha='Sep 2021 - Mar 2023'
            body={bodyFullStack}
            label={etiquetas}
            bordered
          />
        </section>
        <section className='flex flex-col gap-5'>
          <Title title='Languages' textBig />
          <span className='flex gap-3'>
            <p className='btn btn-outline '>English: Basic</p>
            <p className='btn btn-outline '>Spanish: Native</p>
          </span>
        </section>
      </div>
    </Container>
  );
}

export default resumePage;
