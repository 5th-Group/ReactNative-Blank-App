import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';

// Components
import handleIcon from '../../components/Icon/Icon';
import BackIcon from '../../components/Back-Icon/BackIcon';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';

// CONST
import {FONTS, SIZES, COLORS, UTILS} from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';

const SearchScreen = ({navigation}) => {
  // Redux
  const userStatus = useSelector(state => state.user.status);
  const token = useSelector(state => state.user.accessToken);

  // Const
  const disPatch = useDispatch();

  // Handle
  const navigateBack = () => {
    navigation.goBack();
  };

  // Render

  //Book
  const renderBooks = number => {
    return data.slice(number - 10, number).map(item => {
      return (
        <Poster
          key={item._id}
          title={item.detail.title}
          author="Author"
          image={item.detail.icon}
          score={item.averageScore}
          id={item._id}
          navigation={navigation}></Poster>
      );
    });
  };

  //   Searchbar
  const renderSearchBar = () => {
    return (
      <>
        <TextInput
          autoFocus={true}
          style={{
            height: SIZES.padding * 3,
            fontSize: SIZES.h2,
            paddingLeft: SIZES.padding * 3,
            width: '100%',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...UTILS.shadow2,
          }}
          placeholder="Search"></TextInput>
        <View style={{top: 15, left: 10, position: 'absolute', zIndex: 100}}>
          {handleIcon('AntDesign', 'search1', SIZES.body1, COLORS.primary)}
        </View>
      </>
    );
  };
  // Header
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginVertical: SIZES.padding - 10,
          marginBottom: SIZES.padding + 10,
          alignItems: 'center',
        }}>
        {/* Back icon */}
        <BackIcon onPress={navigateBack}></BackIcon>
        {/* Title */}
        <View style={{width: SIZES.width - 120}}>{renderSearchBar()}</View>
      </View>
    );
  };

  //   EditForm
  const renderBookSlides = () => {
    return (
      <View>
        <Text
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
            marginLeft: SIZES.padding,
          }}>
          Trending
        </Text>
        <Text style={{...FONTS.body2, marginLeft: SIZES.padding}}>
          What's popular right now!
        </Text>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: SIZES.padding - 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {/* Render Book */}
          {status === 'loading'
            ? LoadingPoster()
            : status === 'error'
            ? ErrorAstronaut()
            : data && renderBooks(30)}
          {/* Render Book */}
        </ScrollView>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: SIZES.padding,
        }}
        showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {/* {renderEditForm()} */}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
