// material-ui
import * as React from 'react';
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
 // const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="TTDC" width="100" />
     *
     */
    <>
      <a href="https://www.tamilnadutourism.tn.gov.in" >
            <img src="https://www.tamilnadutourism.tn.gov.in/img/logo.webp" alt="Official logo of Tamil Nadu Tourism" width="200" height="100"/>
        </a>
    </>
  );
};

export default Logo;
