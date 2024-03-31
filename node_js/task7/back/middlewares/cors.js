export const ALLOW_CORS = ['http://localhost:3000'];
export default function cors(req, res, next) {
  try {
    const { method } = req;
    const { origin } = req.headers;

    if (ALLOW.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type');
      res.setHeader('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE,OPTIONS,HEAD');
      if (method === 'OPTIONS') {
        res.send('ALLOW: POST,PUT,GET,DELETE,OPTIONS,HEAD')
        return;
      }
    }

    next();
  } catch (e) {
    next(e)
  }
}
