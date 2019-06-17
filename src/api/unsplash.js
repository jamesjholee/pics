import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a593a86a48f8cef07f35bb8af9c5e8b9be9a6a9063a18473dcbf6bef05add32d'
  }
});
