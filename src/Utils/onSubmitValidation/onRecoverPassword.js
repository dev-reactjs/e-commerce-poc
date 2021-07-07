const onRecoverPassword = (data) => {
	var whitleSpaceRegex = /\s/g;
	const {
		password1,
   conformPassword
	} = data;
    if (
		!password1 || !conformPassword 
	) {
		return {
			isError: true,
		 	message: "Please fill all the required fields marked with *",
		};
	} 
    if (password1.match(whitleSpaceRegex)) {
		return { isError: true, message: "Password can't have blank spaces" };
	}
	if (password1.length < 8) {
		return {
			isError: true,
			message: "Password should have minimum 8 character",
		};
	}
	if (password1 !== conformPassword) {
	  return {
	    isError: true,
	    message: "Password and Confirm Password should be same",
	  };
	} else {
		return { isError: false };
	}
}
export default onRecoverPassword;