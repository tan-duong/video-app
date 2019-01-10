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

class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
            <Text>Video App</Text>
        </View>
        
        <View>
            <TextInput 
                value='Username'
            />
            <TextInput 
                value='Password'
            />
        </View>
        <View>
            <Button 
                title='Login'
                onPress={_signInAsync}
            />
        </View>
        <View>
            <Button 
                title='Sign Up'
                onPress={_signUp}
            />
            <TouchableOpacity
                onPress={_forgotPassword}
            >
                <Text>Forgot password? Click here!</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Main');
    };

    _signUp = () => {
        this.props.navigation.navigate('SignUpScreen');
    }

    _forgotPassword = () => {
        this.props.navigation.navigate('ForgotPasswordScreen')
    }

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default SignInScreen