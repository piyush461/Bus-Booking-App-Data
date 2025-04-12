import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router("db.json");
const middlewares = defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running at http://localhost:${port}`);
});
