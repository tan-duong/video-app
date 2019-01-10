import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';

class ForgotPasswordScreen extends React.Component {
    static navigationOptions = {
      title: 'Forgot password',
    };
  
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
            <Text>Video App</Text>
        </View>
        
        <View>
            <TextInput 
                value='Email'
            />
        </View>
        <View>
            <Button 
                title='Reset Password'
                onPress={_resetPassword}
            />
        </View>
        
      </KeyboardAvoidingView>
      );
    }
  
    _resetPassword = async () => {
      this.props.navigation.navigate('SignInScreen');
    };


  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default ForgotPasswordScreen