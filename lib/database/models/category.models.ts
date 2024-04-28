import {model, models, Schema} from "mongoose";
import {Interface} from "node:readline";


export interface ICategory
    extends Document {
    _id: String,
    name: String
}

const CategorySchema = new Schema({

    name: {type: String, required: true, unique: true}

})

const Category = models.Catefory || model('Category', CategorySchema)

export default Category