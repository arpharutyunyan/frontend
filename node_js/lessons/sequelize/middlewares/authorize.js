import jwt from "jsonwebtoken";

const EXCLUDE = [
  'POST:/users/login',
  'POST:/users/register',
]

const { JWT_SECRET } = process.env;
console.log(JWT_SECRET);

function authorize(req, res, next) {
  try {
    const { path, method } = req;
    const { authorization = '' } = req.headers;

    if (method === 'OPTIONS' || EXCLUDE.includes(`${method}:${path}`)) {
      next();
      return;
    }
    const { userId } = jwt.verify(authorization.replace('Bearer ', ''), JWT_SECRET)
    console.log(userId)
    req.userId = userId;
    next();
  } catch (e) {
    e.status = 401;
    next(e);
  }
}

export default authorize;
