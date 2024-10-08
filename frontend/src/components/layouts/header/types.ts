import { RouteEnum } from '../../../routes/enums/route.enum';

export type NavLink = {
  label: string;
  url: RouteEnum;
};

export type NavbarProps = {
  links: NavLink[];
  page: RouteEnum;
  onPageChange: (newPage: RouteEnum) => void;
};
