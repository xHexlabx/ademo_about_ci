import useBanner from '@/hooks/features/homepage/useBanner';

export default function Banner() {
  const { loading, error, url } = useBanner();

  function renderContent() {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <img src={url} alt='banner' className='w-full h-full object-cover' />
    );
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {renderContent()}
    </div>
  );
}
