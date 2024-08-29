// pages/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    destroyCookie({ res }, 'auth', { path: '/' });
    return res.status(200).json({ success: true });
};

export default handler;
