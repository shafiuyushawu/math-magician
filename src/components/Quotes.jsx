import { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const category = 'happiness';
    const apiKey = 'Oy3qfj1OKFaF8ZyWqgnb8g==EPLPJ99iT2G8WsUL';

    setLoading(true);

    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
      .then((response) => {
        const data = response.data[0];
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(() => {
        setError('Error displaying quates');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="flex flex-col justify-center h-screen">Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <p>
        &ldquo;
        {quote}
        &rdquo; -
        {' '}
        {author}
      </p>
    </div>
  );
};

export default Quotes;
