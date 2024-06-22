


const asyncHandler = (requestHandler) => {
    (req , res , next ) => {
        Promise.resolve(requestHandler(req , res , next )).catch((err) =>  next(err))
    }
} 

export {asyncHandler}
// 2nd step 

// const asyncHandler  = (fn) =>  async (req ,res, next ) => { 
//     try {
        
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message,
//         })
//     }
// } 

