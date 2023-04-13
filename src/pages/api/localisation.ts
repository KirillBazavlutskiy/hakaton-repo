import type { NextApiRequest, NextApiResponse } from "next";
import { Translation } from "@/models/text";
import fs from 'fs';
import path from "path";
import process from "process";

const localisationHandler = (req: NextApiRequest, res: NextApiResponse) => {

    const { method, body } = req;
    const filePath = path.join(process.cwd(), 'data', 'localisation.json');

    switch (method) {
        case 'PUT':
            try {
                const data = JSON.parse(body);
                if (data as Translation) {
                    fs.writeFileSync(filePath, JSON.stringify(data));
                    res.status(200).json({ message: 'Successfully Updated!' });
                } else {
                    res.status(400).json({ message: 'Incorrect json!' });
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to update!' });
            }
            break;
        case 'GET':
            try {
                const bufData = fs.readFileSync(filePath);
                res.status(200).json(JSON.parse(bufData.toString()))
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to load!' });
            }
            break;
        default:
            res.setHeader('Allow', ['PUT']);
            res.status(405).json({ message: `Method ${method} is not allowed! Use method PUT or GET instead!` });
            break;
    }
}

export default localisationHandler;