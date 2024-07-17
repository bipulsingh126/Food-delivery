import { foodModel } from "../models/FoodModels.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
    //store the name of image

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: image_filename,
        category: req.body.category
    })
    try {
        await food.save();
        res.json({ success: true, message: "food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "food not Added" })
    }
}

//all food list 

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "food noot found" })
    }
}

//remove food item

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.images}` , ()=>{})
        
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "food removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "food not removed" })
    }
}


export { addFood, listFood, removeFood };












