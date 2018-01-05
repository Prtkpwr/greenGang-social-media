var mongoose = require('mongoose');
var express = require('express');
var userRouter = express.Router();


var fs = require('fs');

var response = {
	error:false,
	message:null,
	status:200,
	data:null
};

module.exports.controller = function(app){
	userRouter.get('/all',function(req,res){

		res.send("this is route to get all users. Write your db code")
	});//end get all users

	userRouter.get('/:userName',function(req,res){

		res.send("this is route to get info of perticular user")
	});//end get one user

	//now making it global to app
	app.use('/users',userRouter);

} //end controller code