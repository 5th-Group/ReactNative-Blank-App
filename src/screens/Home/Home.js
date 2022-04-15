import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';

// CONST
import {style} from './styles';
import {COLORS, SIZES, FONTS} from '../../constants/constants';
import {bookCategory} from '../../constants/constants';
import {dummyData} from '../../constants/constants';

// Components
import Poster from '../../components/Poster/Poster';

const Home = ({navigation}) => {
  // Renders

  //
  const renderGreetingAndAvt = (userName = 'Welcome back, Bi!', userAvt) => {
    return (
      <>
        <Text style={{...FONTS.h2}}>{userName}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            style={style.avt}
            source={require('../../assets/Images/avt.jpg')}
          />
        </TouchableOpacity>
      </>
    );
  };
  //
  // SearchBar
  const renderSearchBar = () => {
    return (
      <>
        <TextInput style={style.input} placeholder="Search"></TextInput>
        <Icon2
          style={style.icon}
          name="search1"
          size={SIZES.body1}
          color="#c4c4c4"></Icon2>
      </>
    );
  };
  //
  // BookCategory
  const renderCategory = () => {
    return (
      <>
        {bookCategory.map((item, index) => {
          return (
            <Text key={index} style={style.textColor}>
              {item}
            </Text>
          );
        })}
      </>
    );
  };
  //
  //Book
  const renderBooks = () => {
    return dummyData.map((item, index) => {
      return (
        <Poster
          key={index}
          title={item.title}
          author={item.author}
          image={item.image}
          navigation={navigation}
          item={item}></Poster>
      );
    });
  };
  return (
    // Wrapper
    <View style={style.wrap}>
      <ScrollView
        contentContainerStyle={style.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        {/* Avatar  and Greetings*/}
        <View style={style.boxOne}>
          {/* RenderFn */}
          {renderGreetingAndAvt()}
          {/* RenderFn */}
        </View>
        {/* Title */}
        <View style={style.boxTwo}>
          <Text style={{...FONTS.largeTitle, color: COLORS.primary}}>
            What do you want to read today?
          </Text>
        </View>
        {/* Search */}
        <View style={style.boxThree}>
          {/* RenderFn */}
          {renderSearchBar()}
          {/* RenderFn */}
        </View>
        {/* Book categories*/}
        <View style={style.boxFour}>
          <View style={style.category}>
            {/* RenderFn */}
            {renderCategory()}
            {/* RenderFn */}
          </View>
          {/* Line Divider */}
          <View style={style.line}></View>
          {/* Line Divider */}
        </View>
        {/* Book silde */}
        <View style={style.boxFive}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Render Book */}
            {renderBooks()}
            {/* Render Book */}
          </ScrollView>
        </View>
        {/* Box 6 */}
        <View style={style.boxSix}>
          <Text style={{...FONTS.largeTitle, color: COLORS.primary}}>
            New Arrival
          </Text>
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
          <Text style={{...FONTS.largeTitle, color: COLORS.primary}}>
            Best Seller
          </Text>
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
          <Text style={{...FONTS.largeTitle, color: COLORS.primary}}>
            Upcoming
          </Text>
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
