import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getAuthFactory = async (email, password) => {
  var data = new FormData();
  data.append('email', email);
  data.append('password', password);
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      const response = await axios.post(
        'https://api.opentechiz-cert.just4demo.biz/admin/login',
        data,
      );
      resolve(response);
    } catch (err) {
      reject(err);
      console.log(err)
    }
  });
  // var data = new FormData();
  // data.append("email", email);
  // data.append("password", password);
  // try{
  //   console.log(data)
  //   const response = await axios.post('http://localhost:8080/user/login', data);
  //   return response;
  // } catch (err){
  //   console.log(err)
  // }

  // AsyncStorage.setItem('email', response.data.data.email);
  // AsyncStorage.setItem('token', response.data.data.token);
  // axios.post('http://localhost:8080/user/login', data).then(response => {
  //     AsyncStorage.setItem('email', response.data.data.email);
  //     AsyncStorage.setItem('token', response.data.data.token);
  // });
  // return ((resolve,reject) => {
  //   axios.post('http://localhost:8080/user/login', data).then(response => {
  //     console.log(response);
  //     resolve(response);
  //     console.log(resolve)
  //   }).catch(err => resolve('false'))
  // })
};
