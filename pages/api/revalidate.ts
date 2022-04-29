import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    for (const url of req.body) {

        await res.unstable_revalidate(url);

    }
    
    res.status(200).json({ revalidate: true });


};
