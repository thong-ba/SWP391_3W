import React from 'react';
import Header from './components/Header';  // Đảm bảo bạn chỉ import Header một lần
import LayoutUtils from './utils/LayoutUtils';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}


export default App;
