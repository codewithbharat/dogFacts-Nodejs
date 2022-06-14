const dogFacts = require("dog-facts");
const Fact = require('../models/Fact');

exports.getFact = async (req,res,next) => {
    try{
        const fact = {
            fact : dogFacts.random()
        }
        await Fact.create(fact);
    res.status(200).json({
        success: true,
        message: fact
    });
    } catch (err){
        console.log(err);
    }
};

exports.allFacts = async (req,res,next) => {
    try {
        const facts = await Fact.find();

        res.status(200).json({
            success : true,
            Facts : facts
        })
    } catch (err){
        console.log(err);
    }
}