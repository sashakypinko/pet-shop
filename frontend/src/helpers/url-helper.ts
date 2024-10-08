import { RouteEnum } from '../routes/enums/route.enum';

export const getActiveRoute = (): RouteEnum => {
  const currentURL = window.location.href;
  const domain = window.location.origin;
  const urlWithoutDomain = currentURL.replace(domain, '');

  return urlWithoutDomain.split('?')[0] as RouteEnum;
};

export const generateImageUrl = (path: string): string => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};
