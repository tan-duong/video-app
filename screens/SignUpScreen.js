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

class SignUpScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign up',
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
                title='Submit'
                onPress={_submit}
            />
        </View>
        
      </KeyboardAvoidingView>
      );
    }
  
    _submit = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Main');
    };


  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default SignUpScreen