import * as React from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { Icon } from "react-native-vector-icons/Icon";
import PropTypes from "prop-types";

const propTypes = {
    main: PropTypes.bool,
}

const defaultProps = {
    main: false,
}

class Navbar extends React.PureComponent{
    state = {}
    render(){
        const {navigation, main} = this.props
        return(
            <SafeAreaView>
                 {main ? (
          <View style={styles.mainNav}>
            <Image
              style={styles.logo}
              source={require('../assets/images/palomitas.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icon name={'search-outline'} size={30} color={Colors.white} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color={Colors.lightGray} />
            </TouchableOpacity>
          </View>
        )}
            </SafeAreaView>
        )
    }

}