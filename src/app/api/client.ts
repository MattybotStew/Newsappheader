import axios from 'axios';

const WORDPRESS_API_URL = 'https://accesswdun.com/wp-json/wp/v2';

export const wordpressClient = axios.create({
  baseURL: WORDPRESS_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default wordpressClient;
