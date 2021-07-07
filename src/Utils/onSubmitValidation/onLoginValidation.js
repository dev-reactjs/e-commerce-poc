const onLoginSubmit = (data) => {
	var whitleSpaceRegex = /\s/g;
	const {
		email,
		password,
	} = data;
	if (
		!email || !password
	) {
		return {
			isError: true,
			message: "Please fill all the required fields marked with *",
		};
	}
	if (password.match(whitleSpaceRegex)) {
		return { isError: true, message: "Password can't have blank spaces" };
	}
	// if (password.length < 8) {
	// 	return {
	// 		isError: true,
	// 		message: "Password should have minimum 8 character",
	// 	};
	// } 
	else {
		return { isError: false };
	}
}
export default onLoginSubmit;