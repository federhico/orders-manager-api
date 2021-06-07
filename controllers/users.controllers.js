const Users = require('../models/users.models');
var mongoose = require('mongoose');

let getUserId = (req, res) => {
    let id = new mongoose.Types.ObjectId(req.params.id);    
    Users.find({_id: id}, function (err, data) {        
	    if(err){
			return res.json({
				status: 500,
				mensaje:"Error in DB",
				err			
			})
		}
		if(!data){           
			return res.json({
				status: 400,
				mensaje:"No Match found",
                data				
			})	
		}
        return res.json({
            status: 200,
            error: null,
            data				
        })	
    })
};

let postUser = (req, res) => {
    let body = req.body;
    let user = new Users({
        _id: null,
        phone: body.phone,
        address: body.address
    });
    console.log(user);
    user.save((err, userStored) => {
        if (err) res.status(500).send({
            message: `Cant Save in DB` + err
        });
        else {
            res.status(200).send({
                user: userStored
            })
        }
    })
}

let updateUser = (req,res) => {
    let body = req.body;
    console.log('Putting User')
    let id = new mongoose.Types.ObjectId(body._id);
    Users.find({_id: id}, function (err,data) {
        if(err){
			return res.json({
				status: 500,
				mensaje:"Error in DB",
				err			
			})
		}		

		if(!data){           
			return res.json({
				status: 400,
				mensaje:"No Match found",
                data				
			})	
		}
    
        let user = new Users({
            _id: id,
            phone: body.phone,
            address: body.address            
        });        

        Users.findOneAndUpdate({_id: user._id}, user, {new: true , runValidators: true}, (err2,data2) => {
            if(err2){
                return res.json({
                    status: 500,
                    mensaje:"Error in DB",
                    err2		
                })
            }

            return res.json({
                satus: 200,
                error: null,
                data2                
            })            
        })
    })
}


module.exports = {
    getUserId,
    postUser,
    updateUser
}