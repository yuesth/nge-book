import React, { Suspense, lazy } from 'react'
import { HashRouter, Navigate, Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { BookContextProvider, useBookContext } from './provider/index'
const LazyLogin = lazy(() => import('./pages/login'))
const LazyHome = lazy(() => import('./pages/home'))
const LazyLibrary = lazy(() => import('./pages/library'))


function App({ contract, currentUser, nearConfig, wallet }) {
  const value = { contract, nearConfig, currentUser, wallet };
  return (
    <BookContextProvider value={value}>
      <HashRouter basename={window.location.pathname || ''}>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/login" element={<LazyLogin />}></Route>
            <Route path="/library" element={<PrivateRoute />}>
              <Route path="/library" element={<LazyLibrary />}></Route>
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<LazyHome />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </BookContextProvider>
  );
}

const PrivateRoute = ({ path, element }) => {
  let { currentUser } = useBookContext();
  let location = useLocation();
  if (!currentUser) {
    return (
      <Navigate to="/login" state={{ from: location }} />
    )
  }
  else {
    return (
      <Outlet />
    )
  }
}

export default App;
