import React from 'react';
import Card from '@/components/Card';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Label from '@/components/Label';
import Title from '@/components/Title';
import { AiOutlineUser } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

function Resume() {
  const t = useTranslations('Index.resume');

  const bodyFrontend = (
    <div className='flex flex-wrap gap-4'>
      <Icon src='/iconFront/javascript.svg' alt='next13' />
      <Icon src='/iconFront/react.svg' alt='next13' />
      <Icon src='/iconFront/redux.svg' alt='next13' />
      <Icon src='/iconFront/next2.svg' alt='next13' />
      <Icon src='/iconFront/html.svg' alt='next13' />
      <Icon src='/iconFront/css.svg' alt='next13' />
      <Icon src='/iconFront/tailwind.svg' alt='next13' />
    </div>
  );

  const bodyBackend = (
    <div className='flex flex-wrap gap-4 p-[3px]'>
      <Icon src='/iconBack/node.svg' alt='node' />
      <Icon src='/iconBack/typescript.svg' alt='typescript' />
      <Icon src='/iconBack/jest.svg' alt='jest' />
      <Icon src='/iconBack/heroku.svg' alt='heroku' />
      <Icon src='/iconBack/prisma.svg' alt='prisma' />
      <Icon src='/iconBack/sql.svg' alt='sql' />
      <Icon src='/iconBack/mongo.svg' alt='mongo' />
      <Icon src='/iconBack/firebase.svg' alt='firebase' />
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

  const bodySchool = <p className='text-justify'>{t('bodySchoolT')}</p>;
  const bodyFullStack = <p className='text-justify'>{t('bodyFullStackT')}</p>;

  const etiquetas = (
    <span className='flex gap-3 flex-wrap'>
      <Label title='ReactJS' bgColor='bg-green-300' />
      <Label title='MongoDB' bgColor='bg-red-300' />
      <Label title='NodeJS' bgColor='bg-gray-300' />
      <Label title='Express' bgColor='bg-orange-300' />
    </span>
  );

  return (
    <Container>
      <div className='flex flex-col gap-7 my-7 dark:text-white'>
        <Title title={t('title.profileT')} textCenter textBig />
        <section className='flex flex-col gap-5'>
          <Title title={t('title.aboutT')} icon={AiOutlineUser} />
          <p className='text-justify'>{t('aboutT')}</p>
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
            title={<Title title={t('title.technologyT')} />}
            body={bodytechnology}
            bordered
            line
          />
        </section>
        <section className='flex flex-col gap-5'>
          <Title title={t('title.educationT')} />
          <Card
            title={<Title title='Systems Engineering' />}
            fecha='Jan 2016 - jul 2021'
            body={bodySchool}
            bordered
          />
        </section>
        <section className='flex flex-col gap-5'>
          <Title title={t('title.experienceT')} />
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
          <Title title={t('title.languagesT')} />
          <span className='flex gap-3 flex-wrap'>
            <p className='btn btn-outline '>{t('languagesENT')}</p>
            <p className='btn btn-outline '>{t('languagesEST')}</p>
          </span>
        </section>
      </div>
    </Container>
  );
}

export default Resume;
