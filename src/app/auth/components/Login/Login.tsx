import React, { FC, useState } from 'react';
import { Box, Button, Divider, FormControlLabel, Checkbox, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout';
import GoogleLogo from "assets/images/login-signup-forgetpass-form/google-logo.svg";
import { linkStyles } from '../shared/styles/linkStyles';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { isEmail } from '../shared/utils/isEmail';

const Login: FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [showPassword, setShowPassword] = React.useState(false)
	const [isUser, setIsUser] = useState(true)
	const [rememberMe, setRememberMe] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const validateEmail = (inputEmail: string) => {
		setEmail(inputEmail)

		if (isEmail(inputEmail) || inputEmail === '') {
			setEmailError(false);
		} else {
			setEmailError(true)
		}
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		
		setEmailError(false)
		setPasswordError(false)

		if (!emailError && password) {
			console.log(email, password)
			// auth result from server rotine here
			// for test
			setIsUser(false)
		}
	}

	return <React.Fragment>
		<Layout headerTitle='Welcome back!'>
			<Typography color="text.secondary" sx={{ marginTop: "1rem" }}>Don't have an account yet? <Link to="/signup" style={linkStyles}>Sign up now</Link></Typography>
			<form autoComplete="on" onSubmit={handleSubmit}>
				<Box display="flex" flexDirection="column" sx={{ mt: "2.5rem", mb: 4 }}>
					<TextField
						label="Email"
						onChange={(e) => validateEmail(e.target.value)}
						required
						variant="outlined"
						color="secondary"
						type="email"
						fullWidth
						value={email}
						error={emailError}
						id="standard-error-helper-text"
					/>
					<Typography color="error" textAlign="left" >
						{emailError && "Invalid email. Please try again."}
					</Typography>
				</Box>

				<FormControl sx={{ mb: 3 }} fullWidth variant="outlined" required>
					<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

					<OutlinedInput
						id="outlined-adornment-password"
						onChange={e => setPassword(e.target.value)}
						type={showPassword ? 'text' : 'password'}
						value={password}
						error={passwordError}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									 {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"

					/>
					{!isUser && <Typography color="error" textAlign="left">
						Incorrect email or password. Please try again.
					</Typography>}
				</FormControl>

				<Box display="flex" alignItems="center" justifyContent='space-between' sx={{ mb: "2.5rem" }}>
					<FormControlLabel control={<Checkbox checked={rememberMe}
						onChange={(e) => setRememberMe(e.target.checked)} />} sx={{ color: "text.secondary" }} label="Remember me" />
					<Link to="/forgotpassword" style={linkStyles}>Forgot password?</Link>
				</Box>
				<Button variant="contained" color="primary" sx={{ width: "100%" }} disabled={email === '' || password === ''} type="submit">Login</Button>
				<Divider sx={{ color: 'text.secondary', my: "1.5rem" }} >or</Divider>
				<Button variant="outlined" startIcon={<img src={GoogleLogo} alt="Google" />} color="primary" sx={{ width: "100%" }} type="submit">Login with Google  ttt</Button>
			</form>

		</Layout>
	</React.Fragment>
};

export default Login;
