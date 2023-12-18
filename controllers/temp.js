const tempService = require("../service/tempService");


const tempController = {
    tempC: async (req,res)=>{
        const { id } =  req.body;
        res.status(200).send("haha");
    },
}
module.exports =  tempController;