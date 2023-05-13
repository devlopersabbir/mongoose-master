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
    step-3 : model
    step-4 : Database query
    
    */

	// res.send('Hello World!')
	// next()

	// creating an interface

	interface IUser {
		id: string;
		role: "student";
		password: string;
		name: {
			firstName: string;
			middleName?: string;
			lastName: string;
		};
		dateOfBirth?: string;
		gender: "male" | "female";
		email?: string;
		contactNo: string;
		emergencyContactNo: string;
		presentAddress: string;
		permanentAddress: string;
	}

	// creating schema using interface

	const userSchema = new Schema<IUser>({
		id: {
			type: String,
			required: true,
			unique: true,
		},
		role: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			firstName: {
				type: String,
				required: true,
			},
			middleName: {
				type: String,
			},
			lastName: {
				type: String,
				required: true,
			},
		},
		dateOfBirth: {
			type: String,
		},
		gender: {
			type: String,
			enum: ["male", "female"],
		},
		email: {
			type: String,
		},
		contactNo: {
			type: String,
			required: true,
		},
		emergencyContactNo: {
			type: String,
			required: true,
		},
		presentAddress: {
			type: String,
			required: true,
		},
		permanentAddress: {
			type: String,
			required: true,
		},
	});

	// creating model

	const User = model<IUser>("User", userSchema);

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
