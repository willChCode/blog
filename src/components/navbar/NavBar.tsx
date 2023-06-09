import NavStart from './NavStart';
import NavCenter from './NavCenter';
import NavEnd from './NavEnd';
import { useTranslations } from 'next-intl';

function NavBar() {
  const t = useTranslations('Index.navBar');

  return (
    <div
      className='navbar pt-7 font-semibold shadow-md dark:text-white
      max-w-[2520px]
      mx-auto
      xl:px-36
      lg:px-20
      md:px-10
      sm:px-5
      px-2'>
      {/* START */}
      <NavStart
        home={t('navHome')}
        project={t('navProject')}
        blog={t('navBlog')}
        profile={t('navProfile')}
      />
      {/* CENTER */}
      <NavCenter />
      {/* END */}
      <NavEnd />
    </div>
  );
}

export default NavBar;
