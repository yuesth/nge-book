import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Redirect, Routes, Route } from 'react-router-dom'
// import Login from "./pages/login"
const LazyLogin = lazy(() => import('./pages/login'))


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/login" element={<LazyLogin />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    // <div className="bg-red-500 w-full min-h-screen">Wi</div>
  );
}

export default App;
