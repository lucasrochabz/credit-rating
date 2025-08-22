import { BASE_API_URL } from '../../config';

const POST_DATA = (body) => {
  return {
    url: `${BASE_API_URL}/verificar`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export { POST_DATA };
