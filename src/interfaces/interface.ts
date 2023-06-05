import { IconType } from 'react-icons';

export interface ChildrenProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface TitleProps {
  icon?: IconType;
  title: string;
  textBig?: boolean;
  textSmall?: boolean;
  textCenter?: boolean;
  iconSmall?: boolean;
  iconBig?: boolean;
  iconEnd?: IconType;
  labelColor?: boolean;
  line?: boolean;
  // medium?: boolean;
  // iconMedium?: boolean;
}
