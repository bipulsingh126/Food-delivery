import { userModel } from '../models/userModels.js';


// add items to user cart

// const addToCart = async (req, res) => {
//     try {
//         let userData = await userModel.findById(req.body.userId)
//         let cartData = userData.cartData;
//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1;
//         }
//         else {
//             cartData[req.body.itemId] += 1;
//         }
//         await userModel.findByAndUpdate(req.bdoy.userId, { cartData });
//         res.json({
//             success: true,
//             message: "Add to cart successfull"
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({
//             success: false,
//             message: "Add to cart failed"
//         })
//     }
// }
const addToCart = async (req, res) => {
    try {
      console.log("Request body:", req.body);
      if (!req.body.userId) {
        throw new Error("userId is required");
      }
      let userData = await userModel.findById(req.body.userId);
      if (!userData) {
        throw new Error("User not found");
      }
      let cartData = userData.cartData;
      if (!cartData) {
        cartData = {}; // Initialize cartData if it doesn't exist
      }
      if (!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1;
      } else {
        cartData[req.body.itemId] += 1;
      }
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({
        success: true,
        message: "Add to cart successful"
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.message
      });
    }
  };

// remove items from user cart 

const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByAndUpdate(req.body, userId, { cartData });
        res.json({
            success: true,
            message: "Remove from cart successfull"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Remove from cart failed"
        })
    }
}

// fatech user cart data

const getCart = async (req, res) => {
try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    res.json({
        success: true,
        cartData
    })
} catch (error) {
    console.log(error);
    res.json({
        success: false,
        message: "Get cart failed"
    })    
}
}

export { addToCart, removeFromCart, getCart }