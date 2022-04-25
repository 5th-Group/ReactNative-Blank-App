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
import {COLORS, SIZES, FONTS, IMAGES, UTILS} from '../../constants/constants';
import {dummyData} from '../../constants/constants';
import {category} from '../../constants/data';
import handleIcon from '../../components/Icon/Icon';
import api from '../../api/apiV1';

// Components
import Poster from '../../components/Poster/Poster';

const Home = ({navigation}) => {
  // Const
  const [lang, setLang] = useState(null);
  // Api Call
  // useEffect(() => {
  //   const getBooks = async () => {
  //     try {
  //       const data = await api.getAll();
  //       if (data) {
  //         setLang(data.data);
  //       }
  //     } catch (error) {
  //       console.log(`Error:${error}`);
  //     }
  //   };
  //   getBooks();
  // }, []);

  // States
  const [selectedItem, setSelectedItem] = useState(null);

  // Renders

  //Greeting
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
          color={COLORS.primary}></Icon2>
      </>
    );
  };
  //
  // BookCategory
  const renderCategory = () => {
    return (
      <ScrollView
        contentContainerStyle={{paddingHorizontal: SIZES.padding}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {category.map(({id, title, icon}) => {
          const selected = title == selectedItem;
          const color = selected ? COLORS.white : COLORS.primary;
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(title);
              }}
              key={id}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: SIZES.padding,
                marginBottom: SIZES.padding - 10,
                backgroundColor: selected ? COLORS.primary : COLORS.white,
                paddingHorizontal: SIZES.padding - 10,
                paddingVertical: SIZES.padding - 15,
                borderRadius: SIZES.radius - 5,
                ...UTILS.shadow2,
              }}>
              <View
                style={{
                  marginRight: SIZES.padding - 10,
                }}>
                {handleIcon(icon.brand, icon.idleIcon, SIZES.h1Half, color)}
              </View>
              <Text
                style={{
                  ...FONTS.h2thin,
                  color: selected ? COLORS.white : COLORS.lightGray1,
                }}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
          item={item}
          navigation={navigation}></Poster>
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
        <View style={{...style.boxOne, paddingHorizontal: SIZES.padding}}>
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
          {/* RenderFn */}
          {renderCategory()}
          {/* RenderFn */}
          {/* Line Divider */}
          <View style={style.line}></View>
          {/* Line Divider */}
        </View>
        {/* Book silde */}
        <View style={style.boxFive}>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: SIZES.padding - 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/* Render Book */}
            {renderBooks()}
            {/* Render Book */}
          </ScrollView>
        </View>
        {/* Box 6 */}
        <View style={style.boxSix}>
          <Text
            style={{
              ...FONTS.largeTitle,
              color: COLORS.primary,
              marginLeft: SIZES.padding,
            }}>
            New Arrival
          </Text>
          <View style={style.line}></View>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: SIZES.padding - 10}}
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
