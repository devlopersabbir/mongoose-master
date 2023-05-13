import User from "./user.model";

export const createUserToDB = async () => {
	const user = new User({
		id: "45853945793",
		role: "student",
		password: "amipassworddibona",
		name: {
			firstName: "Ms.test",
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
    return user;
	// console.log(user);
};
