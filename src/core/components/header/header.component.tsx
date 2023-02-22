import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, InputBase, Avatar, Button, Typography, MenuItem, Select } from '@mui/material';

import { useTokenColors } from 'hooks/useTokenColors.ts';
import {
    NotificationsOutlined as NotificationsOutlinedIcon,
    LightModeOutlined as LightModeOutlinedIcon,
    DarkModeOutlined as DarkModeOutlinedIcon,
    LogoutOutlined as LogoutOutlinedIcon,
    AccountCircle as AccountCircleIcon,
    VisibilityOffTwoTone as VisibilityOffTwoToneIcon,
    VisibilityTwoTone as VisibilityTwoToneIcon,
    Search as SearchIcon,
    AddCircle as AddCircleIcon,
    CheckCircle as CheckCircleIcon,
    ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';

import { toggleTheme, logoutAction } from 'store/auth/authSlice.ts';
import { useLogoutMutation } from 'store/auth/authApiSlice.ts';
import { setAgencyId } from 'store/ui/uiSlice.ts';

import { userUtils } from 'core/utils/user.utils.ts';

const themeIconsMap = {
    'light': <LightModeOutlinedIcon/>,
    'dark': <DarkModeOutlinedIcon/>,
};

const toggleThemeMap = {
    'light': 'dark',
    'dark': 'light',
};


export const HeaderComponent = ({}) => {
    const user = useSelector(state => state.auth.user);
    const agencyId = useSelector(state => state.ui.agencyId);
    const agencies = useSelector(state => state.admin.agencies);
    const cartLicenses = useSelector(state => state.cart.licenses);

    const { themeColors, activeTheme } = useTokenColors();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logout, { isLoading }] = useLogoutMutation();

    const changeAgency = (e) => {
        dispatch(setAgencyId(e.target.value));
    };

    const admin = userUtils.isAdmin(user);
    const support = userUtils.isSupport(user);


    return (
        <Box display={'flex'} justifyContent={'space-between'} p={1} alignItems={'center'}>
            {/*<Box display={'flex'} justifyContent={'flex-end'} p={1} alignItems={'center'}>*/}
            {/*Search Bar*/}
            <Box display={'flex'} backgroundColor={themeColors.primary[400]} borderRadius={'3px'} height={'30px'}>
                {/*    <InputBase sx={{ ml: 2, flex: 1 }} placeholder={'Search'}/>*/}
                {/*    <IconButton>*/}
                {/*        <SearchIcon/>*/}
                {/*    </IconButton>*/}
                {admin || support
                    ? (
                        <>
                            <Select
                                labelId={'set-agency-id'}
                                id={'set-agency-id'}
                                value={agencyId}
                                onChange={changeAgency}
                                autoWidth
                                label={'Agency'}>
                                {
                                    agencies.map(({ id, name }) => <MenuItem key={id}
                                                                             value={id}><em>{name}</em></MenuItem>)
                                }
                            </Select>
                        </>
                    )
                    : null}
            </Box>

            {/*Icons section*/}
            <Box display={'flex'}
                 height={'50px'}
                 sx={{ alignItems: 'center' }}>
                <Box display={'flex'} sx={{ alignItems: 'center', mr: 2, justifyContent: 'space-between' }}>
                    <IconButton>
                        <ShoppingCartIcon fontSize={'large'} sx={{ color: themeColors.greenAccent[500] }}/>
                    </IconButton>
                    <Typography variant={'h2'} sx={{ mr: 1 }}>
                        {cartLicenses.length}
                    </Typography>
                    <Typography>
                        {`license${cartLicenses.length === 0 || cartLicenses.length > 1 ? 's' : ''} in cart`}
                    </Typography>
                </Box>

                <Button variant={'contained'} startIcon={<CheckCircleIcon/>}>Checkout</Button>
                <IconButton onClick={() => dispatch(toggleTheme(toggleThemeMap[activeTheme]))}>
                    {themeIconsMap[activeTheme]}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton onClick={() => {
                    navigate('/auth');
                }}>
                    <VisibilityOffTwoToneIcon/>
                </IconButton>
                {user.email
                    ? (
                        <>
                            <IconButton onClick={() => {
                                navigate('/profile');
                            }}>
                                <Avatar sx={{ bgcolor: themeColors.primary[800], width: 32, height: 32 }}
                                        aria-label={'profile-avatar'}
                                        alt={'profile-avatar'}
                                        children={`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}/>
                            </IconButton>
                            <IconButton onClick={async () => {
                                const logoutRes = await logout({ email: user.email }).unwrap();

                                if (logoutRes) {
                                    dispatch(logoutAction());
                                    navigate('/home');
                                }
                            }}>
                                <LogoutOutlinedIcon/>
                            </IconButton>
                            {/*<IconButton onClick={async () => {*/}
                            {/*    // const logoutRes = await logout({ email }).unwrap();*/}
                            {/*    //*/}
                            {/*    // dispatch(logoutAction());*/}
                            {/*    //*/}
                            {/*    navigate('/profile');*/}
                            {/*}}>*/}
                            {/*    <AccountCircleIcon/>*/}
                            {/*</IconButton>*/}
                        </>
                    )
                    : null
                }
            </Box>
        </Box>
    );
};

HeaderComponent.propTypes = {};
