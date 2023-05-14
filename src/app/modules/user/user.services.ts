import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	// creating a new user
	const user = new User(payload); // User -> class , user ->instance
	await user.save();
	// user.fullName() //custom instance methods
	console.log(user.fullName());

	return user;
	// console.log(user);
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
	const users = await User.find();
	return users;
};

export const getUserByIdFromDB = async (
	payload: string
): Promise<IUser | null> => {
	const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
	return user;
};
export const getAdminUsersFromDB = async () => {
	const admins = await User.getAdminUsers();
	console.log(admins);
	return admins;
};

// class -> Attach -> Method -> Directly call using class
// user = new User
// user.  -> instance methods
// User.getAdminUsers()
