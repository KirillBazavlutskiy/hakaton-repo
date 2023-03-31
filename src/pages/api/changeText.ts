import type { NextApiRequest, NextApiResponse } from "next";
import { Translation } from "@/models/text";
import fs from 'fs';
import path from "path";
import process from "process";

const changeTextHandler = (req: NextApiRequest, res: NextApiResponse) => {

    const { method, body } = req;

    switch (method) {
        case 'PUT':
            try {
                const data = JSON.parse(body);
                if (data as Translation) {
                    const filePath = path.join(process.cwd(), 'data', 'localisation.json');
                    fs.writeFileSync(filePath, JSON.stringify(data));
                    res.status(200).json({ message: 'Successfully Updated!' });
                } else {
                    res.status(400).json({ message: 'Incorrect json!' });
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to update!' })
            }
            break;
        default:
            res.setHeader('Allow', ['PUT']);
            res.status(405).json({ message: `Method ${method} is not allowed! Use method PUT instead!` });
            break;
    }
}

export default changeTextHandler;