import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks';

import { themeTokens } from 'core/themes/tokens';

export const useTokenColors: () => { [key: string]: { [key: string]: { [key: string]: string } } } = () => {
    const activeTheme = useAppSelector((state) => state.auth.user.settings.ui.theme);

    const [themeColors, setThemeColors] = useState(themeTokens[activeTheme]);

    useEffect(() => {
        activeTheme && setThemeColors(themeTokens[activeTheme])
    }, [activeTheme])

    return { themeColors };
};