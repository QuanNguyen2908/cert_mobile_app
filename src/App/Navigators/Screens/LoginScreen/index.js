import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Field, reduxForm} from 'redux-form';

const renderInput = ({input: {onChange, ...restInput}, label}) => {
  return (
    <TextInput style={styles.input} onChangeText={onChange} {...restInput} placeholder={label} secureTextEntry={label==='Password'?true:false}/>
  );
};

const submit = values => {
  console.log('submitting form', values);
};

const LoginScreen = props => {
  const {handleSubmit} = props;

  return (
    <View style={styles.container}>
      <View style={{flex :9, alignItems: 'center'}}>
        <Icon name="user-graduate" style={styles.icon} />
        <Text style={styles.textHeader}>Luyen Thi THPT Quoc Gia Mon Toan</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Field name="email" component={renderInput} label='Email' />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
          <Field name="password" component={renderInput} label='Password' />
        </View>
        <TouchableOpacity onPress={handleSubmit(submit)}  style={{ marginTop:10}}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
          <Text style={{marginHorizontal: 10}}>Don't have accout yet?</Text>
          <TouchableOpacity onPress={handleSubmit(submit)}>
          <Text style={{color: 'white'}}>Sigup</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{flex :1}}>
        <Text style={{color: 'white', marginTop:20}}>Powered by OpenTechiz</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0aba93',
    alignItems: 'center',
    justifyContent : 'flex-end',
    // marginHorizontal: 10,
  },
  textHeader: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  icon: {
    color: 'white',
    fontSize: 80,
    marginVertical: 20,
  },
  input: {
    // borderColor: 'gray',
    // borderWidth: 1,
     width: '75%',
    // borderRadius: 10,
    // marginHorizontal: 50,
    marginLeft: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color:'white',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
    borderRadius: 10,
  },
});
export default reduxForm({
  form: 'test',
})(LoginScreen);
