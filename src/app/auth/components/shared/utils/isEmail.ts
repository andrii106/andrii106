	// Email validation using regular expression
	

    export const isEmail = (inputEmail: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(inputEmail)) {
			return false;
		} else {
			return true;
		}
	}