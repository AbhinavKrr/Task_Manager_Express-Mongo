const getTasks = (req, res)=>{
    res.status(200).json({success: true, data:[]});
}


module.exports = {getTasks}