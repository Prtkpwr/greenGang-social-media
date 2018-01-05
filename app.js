var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(body-parser.json({limit:'10mb',extended:true}));
app.use(body-parser.urlencoded({limit:'10mb',extended:true}));


//fs module, by default module for file management in nodejs
var fs = require('fs');

//include all our model files
fs.readdirSync('./app/model').forEach(function(file){
	//check if file is js or not
	if(file.indexOf('.js'))
		//if it is then include the file from that folder into express app using require
		require('./app/model/'+file);
});//end for each

//include contrllers
fs.readdirSync('./app/controller')forEach(function(file){
	if(file.indexOf('.js')){
		//include a file as a route variable
		var route = require('./app/controller/'+file);
		//call controller function of each file and pass your app instance to it
		route.controller(app)
	}
});//end for each




app.listen(3000,function(){
	console.log("Example App is running on port 3000!");
});