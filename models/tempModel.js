const mongoose = require('../utils/connectDB');

const tempSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post:{ type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    create_at:{type: Date, default: new Date()},
}
);
const Temp = mongoose.model('Temp', tempSchema);
module.exports = Temp;