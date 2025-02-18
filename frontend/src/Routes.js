import Loading from 'views/Loading';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'core';
import { Main as MainLayout, Minimal as MinimalLayout } from 'layouts';
import { PrivateRoute, PublicRoute } from 'components';
import Admin from 'views/Admin/Admin';

const HomeView = lazy(() => import('views/Home'));
const LoginView = lazy(() => import('views/Login'));
const NotFoundView = lazy(() => import('views/NotFound'));
const RegisterView = lazy(() => import('views/Register'));
const ProductDetailsView = lazy(() => import('views/ProductDetails'));
const CartView = lazy(() => import('views/Cart'));
const CheckoutView = lazy(() => import('views/Checkout'));
const OrderView = lazy(() => import('views/Order'));
const FavouritesView = lazy(() => import('views/Favourites'));
const ProductList = lazy(() => import('views/Home/components/ProductList'));
const AdminView = lazy(() => import('views/Admin'));
const AllProducts = lazy(() => import('views/Admin/components/AllProduct/AllProducts'));
const AllUsers = lazy(() => import('views/Admin/components/AllUsers/AllUsers'));

export const PageURLs = {
  Login: '/login',
  NotFound: '/404',
  Register: '/register',
  ProductDetails: '/product-detail/:id',
  Cart: '/cart',
  Checkout: '/checkout',
  Order: '/order',
  Favourites: '/favourites',
  ProductList: '/categorys', // Add the route for the product list
  Admin: '/admin',
  AllProducts: '/admin/products/all',
  AllUsers: '/admin/users',
};

const RoutesComponent = () => {
  const { loadingAuth } = useAuth();

  return !loadingAuth ? (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomeView />
              </PrivateRoute>
            }
          />
          <Route
            path={PageURLs.ProductDetails}
            element={
              <PrivateRoute>
                <ProductDetailsView />
              </PrivateRoute>
            }
          />
          <Route
            path={PageURLs.Cart}
            element={
              <PrivateRoute>
                <CartView />
              </PrivateRoute>
            }
          />
          <Route
            path={PageURLs.Checkout}
            element={
              <PrivateRoute>
                <CheckoutView />
              </PrivateRoute>
            }
          />
          <Route
            path={`${PageURLs.Order}/:orderId`}
            element={
              <PrivateRoute>
                <OrderView />
              </PrivateRoute>
            }
          />
          <Route
            path={PageURLs.Favourites}
            element={
              <PrivateRoute>
                <FavouritesView />
              </PrivateRoute>
            }
          />
          <Route
            path={PageURLs.ProductList} // Add the new route
            element={

              <ProductList />

            }
          />
        </Route>
        <Route path="*" element={<NotFoundView />} />
        <Route path="/" element={<MinimalLayout />}>
          <Route
            path={PageURLs.Login}
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path={PageURLs.Register}
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
        <Route path="/admin" element={<Admin />}>
        <Route path="products/all" element={<AllProducts />} />
        <Route path="users" element={<AllUsers />} />
        {/* Các route khác */}
        </Route>

        </Route>


      </Routes>
    </Suspense>
  ) : (
    ''
  );
};

export default RoutesComponent;
