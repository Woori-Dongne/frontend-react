import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { getItem } from '../lib/localStorage';

interface Props {
  children: ReactElement;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = getItem('accessToken') ?? '';

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
