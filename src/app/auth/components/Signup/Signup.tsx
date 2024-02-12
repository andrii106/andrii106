import React, { FC, useState, useEffect } from 'react';
import { Layout } from '../Layout';
import { Button, Divider, Typography, TextField, Box, FormControl, InputLabel, InputAdornment, OutlinedInput, Stack, IconButton, PaletteColor } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkStyles } from '../shared/styles/linkStyles';
import { isEmail } from '../shared/utils/isEmail';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GoogleLogo from "assets/images/login-signup-forgetpass-form/google-logo.svg";
import theme from 'core/MuiProvider/theme';


interface CriteriaStatus {
    hasMinimumLengthEight: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}



const Signup: FC = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false)

    const criteriasForPassword = [
        'hasMinimumLengthEight',
        'hasNumber',
        'hasSymbol',
    ]

    const [criteriaStatus, setCriteriaStatus] = useState<CriteriaStatus>({
        hasMinimumLengthEight: false,
        hasNumber: false,
        hasSymbol: false,
    });

    useEffect(() => {
        // Update overall status when criteriaStatus changes
        setPasswordError(
            !criteriaStatus.hasMinimumLengthEight ||
            !criteriaStatus.hasNumber ||
            !criteriaStatus.hasSymbol
        );
    }, [criteriaStatus]);

    const successColor = (theme.palette?.success as PaletteColor)?.main
    const errorColor = (theme.palette?.error as PaletteColor)?.main
    const defaultColor = (theme.palette?.text as { secondary?: string })?.secondary;



    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()


        console.log(email, password)
        // auth result from server rotine here
        // for test


    }

    const validateEmail = (inputEmail: string) => {
        setEmail(inputEmail)

        if (isEmail(inputEmail) || inputEmail === '') {
            setEmailError(false);
        } else {
            setEmailError(true)
        }
    }

    const checkPassword = (inputPassword: string) => {

        // check validation 
        // Check password criteria
        checkPasswordCriteria(inputPassword)
        setPassword(inputPassword);

    }

    const checkPasswordCriteria = (input: string) => {

        const newCriteriaStatus: CriteriaStatus = {
            hasMinimumLengthEight: input.length >= 8,
            hasNumber: /\d/.test(input),
            hasSymbol: /[\W_]/.test(input),
        };

        setCriteriaStatus(newCriteriaStatus);

        // You can also use newCriteriaStatus for other purposes if needed
    };


    return <React.Fragment>
        <Layout headerTitle='Welcome to ViralSwiper!'>
            <Typography color="text.secondary" sx={{ marginTop: "1rem" }}> Start your <Link to="/#" style={linkStyles}>14-days-free trial!</Link> No credit card required.</Typography>
            <form autoComplete="on" onSubmit={handleSubmit}>
                <Stack spacing="1.5rem" mt="2.5rem">
                    <TextField
                        label="Full name, e.g. John Doe"
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        variant="outlined"
                        color="secondary"
                        type="text"
                        fullWidth
                        value={fullName}
                    />
                    <Box display="flex" flexDirection="column">
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
                            onChange={e => checkPassword(e.target.value)}
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
                    </FormControl>
                    <Stack spacing="0.62rem">
                        {criteriasForPassword.map((criteria, index) => {
                            return (
                                <Stack spacing="1rem" direction="row" key={index}>
                                    {!password.length ? <CircleIcon sx={{ color: defaultColor }} /> : criteriaStatus[criteria as keyof CriteriaStatus] ? <CheckCircleOutlineIcon sx={{ color: successColor }} /> : <CancelOutlinedIcon sx={{ color: errorColor }} />}

                                    <Typography
                                        sx={{
                                            color: !password.length ? defaultColor : criteriaStatus[criteria as keyof CriteriaStatus]
                                                ? successColor
                                                : errorColor,
                                        }}
                                    >
                                        {criteria === 'hasMinimumLengthEight'
                                            ? 'Minimum 8 characters'
                                            : criteria === 'hasNumber'
                                                ? 'At least one number'
                                                : 'At least one symbol'}
                                    </Typography>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
                <Stack spacing="1.5rem" sx={{ my: "2.5rem" }}>
                    <Button variant="contained" color="primary" fullWidth disabled={emailError || passwordError || fullName === ''} type="submit">Sign up</Button>
                    <Divider sx={{ color: 'text.secondary', my: "1.5rem" }} >or</Divider>
                    <Button variant="outlined" startIcon={<img src={GoogleLogo} alt="Google" />} color="primary" fullWidth sx={{}} type="submit">Sign up with Google</Button>
                    <Typography color="text.secondary" sx={{ marginTop: "1rem" }}> Already have an account? <Link to="/login" style={linkStyles}>Login now</Link></Typography>
                </Stack>
                <Typography color="text.secondary" mx={5} > By signing up, you agree to our <Link to="/#" style={linkStyles}>Terms of service</Link> and <Link to="/#" style={linkStyles}> Privacy policy </Link></Typography>
            </form>
        </Layout>
    </React.Fragment>;
};

export default Signup;
