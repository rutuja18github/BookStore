import { model, Schema } from "mongoose";

const customerSchema = new Schema({
   userId: {
      type: String
   },
   fullname: {
      type: String
   },
   mobileNumber: {
       type: Number
    }, 
   address: [{
      addressType: {
          type: String
      },
      fullAddress: {
          type: String
      },
      city: {
          type: String
      },
      state: {
          type: String
      },
      pincode: {
          type: Number
      }
  }],
},
{
   timestamps:true,
   versionKey:false
}
)

export default model('Customer', customerSchema);