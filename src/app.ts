import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	// inserting a text data into mongodb
	/*
    step-1 : Interface -dode
    step-2 : schema -done
    step-3 : model - done
    step-4 : Database query on Model -done
    
    */

	// res.send('Hello World!')
	// next()

	// creating an interface

	

	// creating schema using interface

	
	const createUserToDB = async () => {
		const user = new User({
			id: "454578",
			role: "student",
			password: "jakanaka",
			name: {
				firstName: "Ms.shamima",
				middleName: "Yesmin",
				lastName: "Alina",
			},

			gender: "female",
			email: "dbc@gmail.com",
			contactNo: "23487856378",
			emergencyContactNo: "9753467",
			presentAddress: "Dhaka",
			permanentAddress: "Uganda",
		});
		await user.save();
        console.log(user);
	};
    createUserToDB()
});

export default app;

// pattern MVC=> model,view,controller ,
//modular => route,utils,interface,

/*

 1.interface = interface.ts
 2. schema, Model = model.ts

 route 
 3.route function = controler.ts
 4. database query function = service.ts

*/
