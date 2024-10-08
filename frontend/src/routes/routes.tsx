import React, { lazy, type ReactElement, Suspense } from 'react';
import { Route, Routes as CommonRoutes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { type RouteInterface } from './interfaces/route.interface';
import { RouteEnum } from './enums/route.enum';

const MainPage = lazy(() => import('../components/pages/main'));
const CategoriesPage = lazy(() => import('../components/pages/categories'));
const CategoryProductsPage = lazy(() => import('../components/pages/category-products'));
const ProductsPage = lazy(() => import('../components/pages/products'));
const ProductDetailsPage = lazy(() => import('../components/pages/product-details'));
const SalesPage = lazy(() => import('../components/pages/sales'));
const ShoppingCartPage = lazy(() => import('../components/pages/shopping-cart'));
const NotFoundPage = lazy(() => import('../components/pages/not-found'));

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
    <Suspense fallback={<CircularProgress />}>
      <CommonRoutes>
        {routes.map((route: RouteInterface, key: number) => (
          <Route key={key} path={route.path} Component={route.Component} />
        ))}
        <Route path={RouteEnum.NOT_FOUND} Component={NotFoundPage} />
      </CommonRoutes>
    </Suspense>
  );
};

export default Routes;
