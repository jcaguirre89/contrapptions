const fetch = require('node-fetch');

const baseURL = `http://localhost:8000/api`;

const Query = {
  users: () => fetch(`${baseURL}/users`).then(res => res.json()),
  user: (parent, args) => {
    const { id } = args;
    return fetch(`${baseURL}/users/${id}`).then(res => res.json());
  },
  contractions: () => fetch(`${baseURL}/contractions`).then(res => res.json()),
  contraction: (parent, args) => {
    const { id } = args;
    return fetch(`${baseURL}/contractions/${id}`).then(res => res.json());
  },
};

module.exports = Query;
