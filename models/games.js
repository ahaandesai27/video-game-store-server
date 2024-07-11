import mongoose, {Schema, model} from "mongoose"

const Games = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    platform: { type: [String], required: true },
    categories: { type: [String], required: true },
    releaseDate: { type: Date, default: Date.now },
    publisher: { type: String, required: true },
    developer: { type: String, required: true },
    coverImage: { type: mongoose.SchemaTypes.Url},      //not making required for now
    Images: { type: [mongoose.SchemaTypes.Url] },
    ratings: { type: mongoose.SchemaTypes.ObjectId }
});


export default model('Games', Games);