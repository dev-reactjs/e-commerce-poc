const onSignUpSubmit = (data) => {
	var whitleSpaceRegex = /\s/g;
	const {
		email,
		fname,
		password,
		phoneNumber,

	} = data;
	if (
		!email || !fname || !password || !phoneNumber
	) {
		return {
			isError: true,
			message: "Please fill all the required fields marked with *",
		};
	}

	if (password.match(whitleSpaceRegex)) {
		return { isError: true, message: "Password can't have blank spaces" };
	}
	if (password.length < 8) {
		return {
			isError: true,
			message: "Password should have minimum 8 character",
		};
	}
	// if (password1 !== password2) {
	//   return {
	//     isError: true,
	//     message: "Password and Confirm Password should be same",
	//   };
	// }
	if (phoneNumber && isNaN(phoneNumber)) {
		return {
			isError: true,
			message: "Mobile number can have only numbers",
		};
	}
	// if (office_number && isNaN(office_number)) {
	//   return {
	//     isError: true,
	//     message: "Office number can have only numbers",
	//   };
	// }
	if (phoneNumber && isNaN(phoneNumber)) {
		return {
			isError: true,
			message: "Mobile number can have only numbers",
		};
	} else {
		return { isError: false };
	}
}
export default onSignUpSubmit;
