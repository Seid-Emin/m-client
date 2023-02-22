import React, { useState, useEffect, ReactElement, ReactNode  } from 'react';
import { useLocation, useNavigate, Outlet, Navigate } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';


export const ProtectedRouteComponent = ({
                                          isAllowed = false,
                                          redirectPath = '/auth',
                                          children
                                        }
                                          : {
  isAllowed?: boolean,
  redirectPath?: string,
  children?: any
}) => {
  const isLogged = localStorage.accessToken;
  // const token = useAppSelector(state => state);
  const navigate = useNavigate();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to={redirectPath} state={{ from: location }} replace/>;
  }

  return children;
};
