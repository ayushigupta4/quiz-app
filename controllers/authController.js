import User from '../models/Users.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    if(!username || !password) {
        return res.status(400).json({error: 'Empty fields'});
    }

    try {
        const user = await User.create({ username, password });
        res.status(201).json({ message: 'User registered', user });
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if(!user || !(password === user.password)) {
        return res.status(401).json( {message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id}, 'secretKey', {expiresIn: '1h'});
    res.json({ message: 'Login successful'});
};