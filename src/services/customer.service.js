import Customer from '../models/customer.model'

export const addCustomer=async (body) => {
    const customerData =await Customer.findOne({userId :body.userId})
    let customerAddress={
        addressType:body.addressType,
        fullAddress:body.fullAddress,
        city: body.city,
        state:body.state, 
        pincode:body.pincode
    }
    if(customerData == null){
        const addressArray=[]
        addressArray.push(customerAddress)
        body.address=addressArray
        const createCustomer=await Customer.create({
            userId:body.userId,
            fullname:body.fullname,
            mobileNumber:body.mobileNumber,
            address:body.address
        })
        console.log(createCustomer)
        return createCustomer
    }
    else{
        
        await customerData.address.push(customerAddress)
        customerData.save();
        return customerData
    }
}