// DO NOT EDIT.
module.exports = {
  routes: {
    '/': '/routes/index',
    '/movies/:id': '/routes/movies/[id]',
    '/people/:id': '/routes/people/[id]',
    '/tv/:id': '/routes/tv/[id]',
    '/tv/': '/routes/tv/index',
  },
  islands: {
    boot: 'islandy/client.js',
    
  }
};
