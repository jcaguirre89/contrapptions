const fetch = require('node-fetch');

const baseURL = `http://localhost:8000/api`;

const Mutations = {
  createContraction: (parent, args) => {
    console.log(args);
    const data = args;
    return fetch(`${baseURL}/contractions`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  },
};

module.exports = Mutations;
