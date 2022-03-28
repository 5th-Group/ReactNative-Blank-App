import React from 'react';

import {style} from './styles';
import Poster from '../../components/Poster/index';

import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

export const Home = () => {
  const test = '../../assets/Images/Poster/1.png';
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
      {/* Box 4 */}
      <View style={style.boxFour}>
        <Text>Novel</Text>
        <Text>Science</Text>
        <Text>Romance</Text>
        <Text>Sci-fi</Text>
      </View>
      {/* Box 5 */}
      <View style={style.boxFive}>
        <Poster
          image={require('../../assets/Images/Poster/1.png')}
          title="Catcher in the Rye"
          author="J.D Salinger"
        />
        <Poster
          image={require('../../assets/Images/Poster/2.jpg')}
          title="Away"
          author="J.D Salinger"
        />
        <Poster
          image={require('../../assets/Images/Poster/3.jpg')}
          title="Journey to the past"
          author="J.D Salinger"
        />
      </View>
    </SafeAreaView>
  );
};
