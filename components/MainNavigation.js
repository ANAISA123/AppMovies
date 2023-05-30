import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

class MainNavigation extends React.PureComponent{
    render(){
        return(
            name = "Home"
            component = {Home}
        )
    }
}