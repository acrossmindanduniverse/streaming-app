import axios from 'axios';

export const request = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
  });
};

export const image = 'https://image.tmdb.org/t/p/w500';
