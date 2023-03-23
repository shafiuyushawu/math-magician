import { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const category = 'happiness';

    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/quotes', {
      params: { category },
      headers: {
        'X-Api-Key': 'HmE/CVXQyHmYONdR03v5PA==RVOBKSCgWyZif3BP',
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
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>
        &ldquo;
        {quote}
        &rdquo;
      </p>
      <p>{author}</p>
    </div>
  );
};

export default Quotes;
