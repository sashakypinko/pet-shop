import React, { type ReactElement } from 'react';
import { Route, Routes as CommonRoutes } from 'react-router-dom';
import { type RouteInterface } from './interfaces/route.interface';
import { RouteEnum } from './enums/route.enum';

import MainPage from '../components/pages/main';
import CategoriesPage from '../components/pages/categories';
import CategoryProductsPage from '../components/pages/category-products';
import ProductsPage from '../components/pages/products';
import ProductDetailsPage from '../components/pages/product-details';
import SalesPage from '../components/pages/sales';
import ShoppingCartPage from '../components/pages/shopping-cart';
import NotFoundPage from '../components/pages/not-found';

const routes: RouteInterface[] = [
  {
    path: RouteEnum.MAIN,
    Component: MainPage,
  },
  {
    path: RouteEnum.CATEGORIES,
    Component: CategoriesPage,
  },
  {
    path: RouteEnum.CATEGORY_PRODUCTS,
    Component: CategoryProductsPage,
  },
  {
    path: RouteEnum.PRODUCTS,
    Component: ProductsPage,
  },
  {
    path: RouteEnum.PRODUCT_DETAILS,
    Component: ProductDetailsPage,
  },
  {
    path: RouteEnum.SALES,
    Component: SalesPage,
  },
  {
    path: RouteEnum.SHOPPING_CART,
    Component: ShoppingCartPage,
  },
];

const Routes = (): ReactElement => {
  return (
    <CommonRoutes>
      {routes.map((route: RouteInterface, key: number) => (
        <Route key={key} path={route.path} Component={route.Component} />
      ))}
      <Route path={RouteEnum.NOT_FOUND} Component={NotFoundPage} />
    </CommonRoutes>
  );
};

export default Routes;
