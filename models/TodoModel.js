import { Schema } from "mongoose";

const TODOSchema = new Schema(
    {
        task: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
    collection: "TODOS",
    timestamps: true, 
    }
)

const Post = mongoose.model("TODO", PostSchema);
module.exports = TODO;