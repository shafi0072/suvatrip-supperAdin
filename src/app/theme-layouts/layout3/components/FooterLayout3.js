import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import PurchaseButton from '../../shared-components/PurchaseButton';
import DocumentationButton from '../../shared-components/DocumentationButton';
import PoweredByLinks from '../../shared-components/PoweredByLinks';

function FooterLayout3(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
    <ThemeProvider theme={footerTheme}>
    
    </ThemeProvider>
  );
}

export default memo(FooterLayout3);
