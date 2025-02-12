import mongoose from "mongoose";

export interface ItemSchema extends mongoose.Schema {
    owner_id: string;
    username: string;
    password: string;
}

const ItemSchema = new mongoose.Schema<ItemSchema>({
    owner_id: {
        type: String,
        required: [true, "please provide an owner"],
        unique: false,
    },
    username: {
        type: String,
        required: [true, "please provide a username"],
        unique: false,
    },
    password: {
        type: String,
        required: [true, "please provide a password"],
        unique: false,
    },
});

export default mongoose.models.Items || mongoose.model("Items", ItemSchema);