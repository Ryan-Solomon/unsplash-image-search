import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID TQduGXbJEGduRERO231MpuZLjKN9arqW7KHqQtYF7_c',
  },
});
