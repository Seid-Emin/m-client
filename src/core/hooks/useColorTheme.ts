import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks';

import { createTheme } from '@mui/material/styles';

import { themeSettings } from 'core/themes/theme';


export const useColorTheme = () => {
    const activeTheme = useAppSelector(state => state.auth.user.settings.ui.theme);
    const [theme, setTheme] = useState(createTheme(themeSettings(activeTheme)));

    useEffect(() => {
        activeTheme && setTheme(createTheme(themeSettings(activeTheme)))
    }, [activeTheme])

    return { theme, activeTheme };
};