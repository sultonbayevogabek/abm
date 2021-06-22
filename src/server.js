const express = require("express");
const server = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const cors = require('cors')
const helmet = require('helmet')
const postgres = require('./modules/postgres.js')

require("dotenv").config({path: path.join(__dirname, '..', '.env')});

async function main() {
	let db = await postgres() 
	const PORT = process.env.PORT;
	
	if(!PORT){
		throw new ReferenceError("PORT is not defined")
	}
	
	
	//Server Middlawares
	server.use(express.json());
	server.use(express.urlencoded({extended: true}));
	server.use(cookieParser());
	server.use(express.static(path.join(__dirname, 'public')));
	server.use(cors())
	server.use(helmet())
	server.use(async (req, res, next) => {
        req.postgres = db
        next()
    })
	
	//Setting
	server.set('view engine', 'ejs');
	server.set('views', path.join(__dirname, 'views'));
	
	
	//Routes
	const RoutesPath = path.join(__dirname, 'routes');
	fs.readdir(RoutesPath, (err, files) => {
		if(err) throw new Error(err);
		files.forEach(route => {
			const RoutePath = path.join(RoutesPath, route);
			const Route = require(RoutePath);
			if(Route.path && Route.router) server.use(Route.path, Route.router);
		});
	});
	
	server.listen(PORT, () => console.log("Server " + PORT + "da ishlashni boshladi"));
}

main()