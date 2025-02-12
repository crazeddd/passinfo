import type { Request, Response } from "express";
import bcrypt from "bcrypt";

import Item from "src/db/itemModel";

export const createNewItem = async (req: Request, res: Response) => {
    const { username, password, token } = req.body;

    try {

        const hashPassword = async () => {
            if (password) {
                return await bcrypt.hash(password, 14).catch((error) => {
                    res.status(500).send({
                        message: "Error hashing password",
                        error,
                    });
                });
            } else {
                throw new Error("Failed to hash password");
            }
        }

        const hashedPassword = await hashPassword();

        const item = new Item({
            owner_id: token.userId,
            username: username,
            password: hashedPassword,
        });

        await item.save();

        res.status(200).send({ message: "Created new item!" });

    } catch (error: any) {
        res.status(500).send({ message: "Failed to create new item" });
        console.error(error);
    }
};