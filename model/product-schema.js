import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    brand: String,
    price: Number,
    quantity: Number

});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');
const product = mongoose.model('product', productSchema);

export default product;