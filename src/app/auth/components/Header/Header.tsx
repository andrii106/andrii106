import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <React.Fragment>
    <Stack direction="row" spacing={1} sx={{justifyContent:"center"}}>
      <img src="src/assets/images/login-signup-forgetpass-form/logo.svg" alt="Mark" loading="lazy"/>
      <img src="src/assets/images/login-signup-forgetpass-form/logo-text.svg" alt="Mark" loading="lazy" />
    </Stack>
    <Typography color="text.primary" fontWeight="bold" variant='h4' sx={{marginTop:"1.5rem"}}>{title}</Typography>
  </React.Fragment>;
};

export default Header;
