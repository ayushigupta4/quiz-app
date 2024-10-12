//Verify JWT token
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if(!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, 'secretKey');
        req.user = decoded;
        next();
    } catch(err) {
        res.status(400).send('Invalid token.');
    }
};

export default auth;