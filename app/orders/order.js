const { mongoose } = require("../../db/db");
const { Schema } = mongoose;
const autoIncrement = require("mongoose-sequence")(mongoose)

const orderSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  total: Number,
  billingAddress: {
    type: Object,
    required: true
  },
  shippingAddress: {
    type: Object,
    required: true
  },
  salesTax: Number,
  createdAt: { 
    type: Date, 
    default: new Date() 
  },
  updatedAt: { 
    type: Date, 
    default: new Date() 
  },
  shippingMethod: String,
  state: {
    type: String,
    default: "pending"
  },
  paymentMethod: {
    type: String,
    default: "COD"
  },
  quantity: {
    type: Number, 
    default: 1
  },
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: Date,
  orderNumber: {
    type: Number,
    default: 0
  }
});

orderSchema.plugin(autoIncrement, {
  inc_field: 'orderNumber'
});

exports.Order = mongoose.model("Order", orderSchema);
