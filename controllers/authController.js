import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered', user });
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json( {message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful'});
};