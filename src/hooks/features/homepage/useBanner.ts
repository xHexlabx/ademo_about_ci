import { api } from '@/api/axios';
import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export default function useBanner() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/breeds/image/random');
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = response.data;
        setUrl(data.message);
      } catch (error) {
        setError(
          error instanceof AxiosError
            ? error.message
            : 'An unknown error occurred'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, url };
}
