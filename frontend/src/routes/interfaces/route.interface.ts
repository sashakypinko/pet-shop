import { type FC } from 'react';

export interface RouteInterface {
  path: string;
  Component: FC<any>;
}
