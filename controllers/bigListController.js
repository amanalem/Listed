const User = require('../models/User')



let show = (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        res.redirect('../views/bigList/show.ejs', {user})
    })
}


let create = (req, res)=>{
    User.findById(req.params.userId, (err, user)=>{
        if(err){
            res.status(400).res.json(err)
            return
        }
        
    })

}


let update = (req, res)=>{

}




module.exports = {
    show,
    create,
    update,
}