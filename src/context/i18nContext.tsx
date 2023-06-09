'use client';
import { createContext, useContext } from 'react';
// import second from 'first'

export interface I18nProps {
  locale: String;
}

export const i18nContext = createContext<I18nProps>({ locale: '' });

//hook
export const useI18n = (): I18nProps => {
  const context = useContext(i18nContext);

  if (!useI18n) throw new Error('useI18n not exists PROVIDER');
  if (!context) throw new Error('Context is empty');

  return context;
};

type ChildrenProps = {
  children: React.ReactNode;
  locale: String;
};
export const I18nProvider = ({ children, locale }: ChildrenProps) => {
  return (
    <i18nContext.Provider value={{ locale }}>{children}</i18nContext.Provider>
  );
};
