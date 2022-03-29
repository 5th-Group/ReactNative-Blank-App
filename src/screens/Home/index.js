import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

import Poster from '../../components/Poster/index';
import {style} from './styles';
import {constants} from '../../constants';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={style.wrap}>
      <StatusBar></StatusBar>
      <ScrollView
        contentContainerStyle={style.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        {/* Box 1 */}
        <View style={style.boxOne}>
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
          <Text
            style={{
              color: constants.primaryColor,
              fontSize: 38,
              // fontWeight: 'bold',
              fontFamily: 'Metropolis-SemiBold',
            }}>
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
          <Text
            style={{
              color: constants.primaryColor,
              opacity: 0.8,
              // fontFamily: 'Metropolis-Light',
            }}>
            Novel
          </Text>
          <Text style={{color: constants.primaryColor, opacity: 0.5}}>
            Science
          </Text>
          <Text style={{color: constants.primaryColor, opacity: 0.5}}>
            Romance
          </Text>
          <Text style={{color: constants.primaryColor, opacity: 0.5}}>
            Sci-fi
          </Text>
        </View>
        {/* Box 5 */}
        <View style={style.boxFive}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/1.png')}
              title="Catcher in the Rye "
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/2.jpg')}
              title="Away"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/4.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              navigation={navigation}
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
          </ScrollView>
        </View>
        {/* Box 6 */}
        <View style={style.boxSix}>
          <Text style={style.title}>New Arrival</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
          </ScrollView>
        </View>
        {/* Box 7 */}
        <View style={style.boxSeven}>
          <Text style={style.title}>Best Seller</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
            <Poster
              image={require('../../assets/Images/Poster/3.jpg')}
              title="Journey to the past"
              author="J.D Salinger"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
