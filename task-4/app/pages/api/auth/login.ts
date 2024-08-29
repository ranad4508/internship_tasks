import type { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '30d' });
        nookies.set({ res }, 'token', token, { path: '/' });
        res.status(200).json({ message: 'Authenticated' });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}
