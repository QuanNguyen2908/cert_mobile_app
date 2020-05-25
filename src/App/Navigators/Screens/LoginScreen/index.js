import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="user-graduate" style={styles.icon} />
      <Text style={styles.textHeader}>Luyen Thi THPT Quoc Gia Mon Toan</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0aba93',
    alignItems: 'center',
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
});
export default LoginScreen;
