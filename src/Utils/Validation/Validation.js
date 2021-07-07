/* To handle first name validation*/
export const validateName = (name) => {
	var nameRegex = /^[a-zA-Z ]+$/;
	var name = name.trim();
	if (name == "" || name == undefined || name == null) {
		return { status: false, error: 'Please enter name.' };
	}
	else if (!nameRegex.test(name)) {
		return { status: false, error: 'Please enter valid name.' };
	}
	else if (name.length < 2) {
		return { status: false, error: 'Name must contain atleast two characters.' }
	}
	else {
		return { status: true, error: '' };
	}
}
/* To handle email validation */
export const validateEmail = email => {
	var emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
	email = email.trim();
	if (email == "" || email == undefined || email == null) {
		return { status: false, error: 'Please enter email.' };
	}
	else if (!emailRegex.test(email)) {
		return { status: false, error: 'Please enter valid email address.' };
	}
	else {
		return { status: true, error: '' };
	}
}
/* To validate password */
export const validatePassword = (password) => {
	// var passwordRegex = /^ (?=^.{8,16}$)((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/;
	var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
	password = password.trim();

	if (password == "" || password == undefined || password == null) {
	    return { status: false, error: 'Please enter valid password.' }
	}
	// else if (!passwordRegex.test(password)) {
	//     return { status: false, error: 'Passwor must contain atleast 8 characters, which includes atleast 1 capital alphabet, 1 small aplabet, 1 number and 1 special character.' };
	// }
	else if (password.length < 8) {
	    return { status: false, error: 'Passwor must contain atleast 8 characters.' };
	}
	else {
	    return { status: true, error: '' }
	}
}
/* To validate Mobile No. */
export const validateMobileNo = (mobileNo) => {
	var numberRegex = /^[1-9][0-9]{9,12}$/;
	mobileNo = mobileNo.trim()
	if (mobileNo == "" || mobileNo == undefined || mobileNo == null) {
		return { status: false, error: 'Please enter phone number.' }
	} else if (!numberRegex.test(mobileNo)) {
		return { status: false, error: 'Please enter valid phone number.' }
	} else {
		return { status: true, error: '' }
	}
}
export const requireEmail = userId => {
	let userEmail = userId.toString().trim()
	if (userEmail == '' || userEmail == undefined || userEmail == null) {
		return { status: false, error: 'Please enter email address.' };
	}
	else return { status: true, error: '' }
}
/* To Handle Password validation on Login */
export const requirePassword = password => {
	let userPassword = password.toString().trim()
	if (userPassword == "" || userPassword == undefined || userPassword == null) {
		return { status: false, error: 'Please enter password.' }
	}
	else return { status: true, error: '' }

}