import { FC, ReactNode } from 'react';
import { Header } from '../Header';
import { Box } from '@mui/material';

interface LayoutProps {
  headerTitle: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ headerTitle, children }) => {
  return <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems:"center" }}>
    <Box sx={{borderRadius:"1rem", backgroundColor:"#FFF", padding:"2.5rem", width:"fit-content"}}>
      <Header title={headerTitle} />
      <main style={{width:"28.125rem"}}>{children}</main>

    </Box>
  </Box>;
};

export default Layout;
