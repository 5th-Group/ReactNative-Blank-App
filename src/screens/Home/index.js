import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

export const Home = () => {
  return (
    <SafeAreaView style={style.wrap}>
      {/* Box 1 */}
      <View style={style.boxOne}>
        <Icon name="menu" size={30} color="black"></Icon>
        <TouchableOpacity>
          <Image
            style={style.avt}
            source={require('../../assets/Images/avt.jpg')}
          />
        </TouchableOpacity>
      </View>
      {/* Box 2 */}
      <View style={style.boxTwo}>
        <Text style={{fontSize: 20, color: 'gray'}}>Welcome back, Bi!</Text>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          What do you want to read today?
        </Text>
      </View>
      {/* Box 3 */}
      <View style={style.boxThree}>
        <TextInput style={style.input} placeholder="Search"></TextInput>
        <Icon2
          style={style.icon}
          name="search1"
          size={20}
          color="#c4c4c4"></Icon2>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    gap: 1000,
  },
  boxOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  boxTwo: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  boxThree: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
    position: 'relative',
  },
  text: {
    color: 'black',
  },
  avt: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  input: {
    height: 49,
    paddingHorizontal: 40,
    width: 353,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  icon: {
    top: '30%',
    left: 10,
    position: 'absolute',
  },
});
