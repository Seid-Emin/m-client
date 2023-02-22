import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ProtectedRouteComponent } from 'core/components/protected-route/protected-route.component';
import { LayoutComponent } from 'core/components/layout/layout.component';
import { useColorTheme } from 'hooks/useColorTheme';

export const App = () => {
  const { theme, activeTheme } = useColorTheme();

  const isLogged = localStorage.accessToken;
  console.log({theme});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      {/*<ToastContainer limit={3} />*/}
      {/*{isLoading*/}
      {/*    ? <Box>Loading...</Box>*/}
      {/*    : (*/}
      {/*{*/}
      {/*  !isLogged*/}
      {/*  ? <div>!!!</div>*/}
      {/*  : <div>Hello World!!!</div>*/}
      {/*}*/}
      <Routes>
        {
          !isLogged
          ? <Route path={'/'} element={<div>Auth Component</div>}/>
          : (
            <Route path={'/'} element={<LayoutComponent/>}>

              {/*<Route path={'/auth'} element={<Auth/>}/>*/}
              {/*<Route path={'/registerAgencyUser/:data'} element={<RegisterAgencyUserComponent/>}/>*/}
              {/*<Route path={'/joinAgency/:data'} element={<JoinAgency/>}/>*/}
              {/*<Route path={'/home'} element={<HomeComponent/>}/>*/}
              <Route element={<ProtectedRouteComponent/>}>
                <Route path={'/dashboard'} element={<div>Dashboard</div>}/>

              </Route>
            </Route>
          )
        }
      </Routes>


    </ThemeProvider>
  );
};