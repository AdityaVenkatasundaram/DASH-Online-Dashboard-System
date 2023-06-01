let model = require('../model/model');
let user = require('../model/user');

const createData = (req,res) => {
    let cat = req.body;
    model.insertdata(cat, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat Successfully Added'});
        }
    });
}

const getAlldata = (req,res) => {
    model.getAlldata((err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successful'});
        }
    });
}

const deleteAllData = (req, res) => {
    let cat = req.body;
    model.removedata(cat, (err, result) => {
        if (err) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat successfully Deleted'});
        }
    });
};

const loginSuccessful = (req, res,next) => {
    return res.render('index.ejs');
};

const main = (req, res,next) => {
    return res.render('../public/index.ejs');
};

const userRegistartion = (req, res,next) => {
    console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {
            console.log("enter the controller")

            user.userData(personInfo, (err, result) => {
                if (err) {
                    res.json({statusCode: 400, message: err});
                } else {
                    res.json({statusCode: 200, data: result, message: 'You are regestered,You can login now.'});
                }
            });
	}
    else{
        res.send({"Success":"password is not matched"})
    }
}
};

const userLogin = (req, res,next) => {
//console.log(req.body);
console.log(req.body);
	var personInfo = req.body;
    console.log("entered the controller")
    user.getdata(personInfo, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            console.log(result[0]);
            if(result[0].email == req.body.email && result[0].password == req.body.password)
            {
                res.json({statusCode: 200, data: result, message: 'Success!'});
            }
            else{
                res.json({statusCode: 200, data: result, message: "Wrong password!"});
            }

        }
    });

};

const registrationSuccesful = (req, res,next) => {
    return res.render('login.ejs');
};

const logout = (req, res,next) => {
    console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
};

const forgetPassword = (req, res,next) => {
    res.render("forget.ejs");
};


const forgotPasswordSuccess = (req, res,next) => {
//console.log('req.body');
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
	
};

module.exports = {createData,getAlldata,deleteAllData,loginSuccessful,userRegistartion,registrationSuccesful,userLogin,logout,forgetPassword,forgotPasswordSuccess,main}