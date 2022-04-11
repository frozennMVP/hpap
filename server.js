const jsonServer = require('json-server');
const auth = require('json-server-auth')
const authServer = auth.create()
const authRouter = auth.router('./api/db.json');
const server = jsonServer.create();
const router = jsonServer.router('./api/db.json');
const authMiddlewares = auth.defaults({
  static: './build'
});

const middlewares = jsonServer.defaults({
  static: './build'
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);
authServer(authMiddlewares)

authServer.use(auth.rewriter({
  '/api/*': '/$1',
})
)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))

server.use(router);
authServer.use(authRouter)
server.listen(PORT, () => {
  console.log('Server is running');
});