import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from 'pages/_layouts/auth';
import DefaultLayout from 'pages/_layouts/default';

import { store } from 'store';

interface IProps extends RouteProps {
  isPrivate?: boolean;
}

export default function RouteWrapper(props: IProps) {
  const { component: Component, isPrivate, ...rest } = props;

  const { signed } = (store as any).getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/deliveries" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
