import * as customerService from '../services/customer.service'
import HttpStatus from 'http-status-codes'

//Controller to add customer
export const addCustomerDetails =async (req, res, next) =>{
    try{
    const data= await customerService.addCustomer(req.body)
    res.status(HttpStatus.OK).json({
        code:HttpStatus.OK,
        data:data,
        message:'Customer added successfully'
    });
    }
    catch(error){
        next(error)
    }
}