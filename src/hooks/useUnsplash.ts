import { useState, useEffect } from 'react';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

export const useUnsplash = (query: string, perPage: number = 10, orientation: string = 'landscape') => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&orientation=${orientation}&client_id=${ACCESS_KEY}`
        );
        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, perPage, orientation]);

  return { images, loading };
};
