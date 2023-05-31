import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import Navbar from './Navbar'

const Stack = createStackNavigator();

class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode={"screen"}>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            headerTransparent:true,
            header:({navigation}) => (
                <Navbar navigation={navigation} main={true} />  
            ),
        }}
        />
        <Stack.Screen
        name="Detalle"
        component={Detail}
        options={{
        headerTransparent: true,
        header: ({navigation}) => (
            <Navbar main={false} navigation={navigation} />
            ),
            }}
        />
        <Stack.Screen
        name="Busqueda"
        component={Search}
        options={{
            headerTransparent: true,
            header: ({navigation}) => (
            <Navbar main={false} navigation={navigation} />
            ),
        }}
        /> 
 
      </Stack.Navigator>
    );
  }
}
export default MainNavigation