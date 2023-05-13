import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload : IUser): Promise<IUser> => {
	const user = new User(payload);
	await user.save();
    return user;
	// console.log(user);
};

export const getUsersFromDB = async(): Promise <IUser[]>=>{
	const users = await User.find();
	return users
}

export const getUserByFromDB = async(payload:string): Promise<IUser | null>=>{

	const user = await User.findOne({id: payload}, {name:1});
	return user;
}


