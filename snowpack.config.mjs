export default {
  mount: {
    src: { url: '/dist' },
    public: {url: '/', static: true},
  },
  routes: [
    {match: 'routes', src: '.*', dest: '/index.html'}
  ],
  buildOptions: {
    out: 'dist',
    baseUrl: '.',
  },
  optimize: {
    // entrypoints: 'auto',
    bundle: true,
    minify: true,
    treeshake: true,
    manifest: true,
    target: 'es2018',
  },
};
