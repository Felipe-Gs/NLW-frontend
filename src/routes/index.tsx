import { Box } from 'native-base';
import {NavigationContainer, } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';

import SingIn from '../screens/SingIn';
import New from '../screens/New';

export function Routes(){
    const {user} =useAuth();


    return(
        <Box flex={1} bg="gray.900">
            <NavigationContainer>
                {/* {user.name? <AppRoutes/> : <SingIn/>} */}
                <AppRoutes/>
            </NavigationContainer>
        </Box>
    )
}

// 2:10:00