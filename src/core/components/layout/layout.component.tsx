import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { useTokenColors } from 'hooks/useTokenColors';

import { HeaderComponent } from 'core/components/header/header.component';


export const LayoutComponent = () => {
  const { themeColors } = useTokenColors();

  return (
    // <Box display={'flex'} className={'App'} backgroundColor={themeColors.primary[400] }>
      <Box flexGrow={1}>
        <HeaderComponent/>
        <Outlet/>
      </Box>
    // </Box>
  );
};
