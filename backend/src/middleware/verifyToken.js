import jwt from 'jsonwebtoken';

import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.SECRET_KEY;


const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(403).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default verifyToken;