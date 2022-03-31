import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

import Poster from '../../components/Poster/index';
import {style} from './styles';
import {constants} from '../../constants';

const Home = ({navigation}) => {
  return (
    <View style={style.wrap}>
      <ScrollView
        contentContainerStyle={style.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View style={style.boxOne}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Image
              style={style.avt}
              source={require('../../assets/Images/avt.jpg')}
            />
          </TouchableOpacity>
        </View>
        {/* Title */}
        <View style={style.boxTwo}>
          <Text style={style.text}>Welcome back, Bi!</Text>
          <Text style={style.title}>What do you want to read today?</Text>
        </View>
        {/* Search */}
        <View style={style.boxThree}>
          <TextInput style={style.input} placeholder="Search"></TextInput>
          <Icon2
            style={style.icon}
            name="search1"
            size={30}
            color="#c4c4c4"></Icon2>
        </View>
        {/* Book categories*/}
        <View style={style.boxFour}>
          <View style={style.category}>
            <Text style={style.textColor}>Novel</Text>
            <Text style={style.textColor}>Science</Text>
            <Text style={style.textColor}>Romance</Text>
            <Text style={style.textColor}>Sci-fi</Text>
          </View>
          <View style={style.line}></View>
        </View>
        {/* Book silde */}
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
          <Text style={style.titleMed}>New Arrival</Text>
          <View style={style.line}></View>
          <ScrollView
            alwaysBounceVertical={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
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
          <Text style={style.titleMed}>Best Seller</Text>
          <View style={style.line}></View>
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
        <View style={style.boxSeven}>
          <Text style={style.titleMed}>Upcoming</Text>
          <View style={style.line}></View>
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
    </View>
  );
};

export default Home;
