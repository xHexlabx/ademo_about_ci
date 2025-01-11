import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from '@/layouts/RootLayout.tsx';
import Home from '@/views/Home.tsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
