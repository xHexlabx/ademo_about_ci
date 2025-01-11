import { useState, useEffect } from 'react';

export default function useBanner() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = await response.json();
        setUrl(data.message);
      } catch {
        setError('Failed to fetch banner. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, url };
}
