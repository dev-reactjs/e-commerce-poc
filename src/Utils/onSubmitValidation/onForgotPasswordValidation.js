const onForgotSubmit = (data) => {
	var whitleSpaceRegex = /\s/g;
	const {
		email,
	} = data;
	if (
		!email 
	) {
		return {
			isError: true,
			message: "Please fill all the required fields marked with *",
		};
	}
	else {
		return { isError: false };
}
}
export default onForgotSubmit;