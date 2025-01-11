import Banner from '@/components/features/homepage/Banner';
import Counter from '@/components/features/homepage/Counter';

function Home() {
  return (
    <div className='flex flex-row justify-between w-full h-full'>
      <Banner />
      <Counter />
    </div>
  );
}

export default Home;
