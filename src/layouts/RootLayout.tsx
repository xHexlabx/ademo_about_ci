import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div className='flex justify-center items-center p-32 w-screen h-screen '>
      <Outlet />
    </div>
  );
}
