import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';

// CONST
import {style} from './styles';
import {COLORS, SIZES, FONTS, UTILS} from '../../constants/constants';
import {category} from '../../constants/data';
import {useDispatch, useSelector} from 'react-redux';
import {
  getbookStart,
  getbookFail,
  getbookSuccess,
} from '../../features/Books/bookSlice';
import bookApiGet from '../../api/apiV2';

// Components
import Poster, {
  LoadingPoster,
  ErrorAstronaut,
} from '../../components/Poster/Poster';
import handleIcon from '../../components/Icon/Icon';

const Home = ({navigation}) => {
  // States
  const [selectedItem, setSelectedItem] = useState(null);
  const [isRefresh, setIsRefresh] = useState(false);

  // Redux
  const user = useSelector(state => state.user.userInfo);
  const status = useSelector(state => state.book.status);
  const data = useSelector(state => state.book.book);

  // Const
  const disPatch = useDispatch();

  // Effect
  // Api Call
  useEffect(() => {
    const getBook = async () => {
      disPatch(getbookStart());
      try {
        const response = await bookApiGet.getAllBook();
        if (response.data) {
          disPatch(getbookSuccess(response.data));
        }
      } catch (error) {
        console.log(error);
        disPatch(getbookFail());
      }
    };
    getBook();
  }, [disPatch]);

  // Handle

  // Refresh
  const handleRefresh = () => {
    setIsRefresh(true);
    const getBook = async () => {
      try {
        const response = await bookApiGet.getAllBook();
        if (response.data) {
          disPatch(getbookSuccess(response.data));
        }
      } catch (error) {
        console.log(error);
        disPatch(getbookFail());
      }
    };
    getBook();
    setTimeout(() => {
      setIsRefresh(false);
    }, 2000);
  };
  // Test

  const test = () => {
    // console.log(data[1].detail);
    console.log(user);
  };

  // Renders

  //Greeting
  const renderGreetingAndAvt = () => {
    return (
      <>
        <Text style={{...FONTS.h2}}>{`Welcom back, ${
          user ? user.lastName : 'mate'
        }!`}</Text>
      </>
    );
  };
  //
  // SearchBar
  const renderSearchBar = () => {
    return (
      <>
        <TextInput style={style.input} placeholder="Search"></TextInput>
        <View style={style.icon}>
          {handleIcon('AntDesign', 'search1', SIZES.body1, COLORS.primary)}
        </View>
      </>
    );
  };
  //
  // BookCategory
  const renderCategory = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {category.map(({id, title, icon}) => {
          const selected = title == selectedItem;
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(title);
                console.log(user);
              }}
              key={id}
              style={{
                flexDirection: 'row',
                ...UTILS.center,
                marginRight: SIZES.padding,
                marginBottom: SIZES.padding - 10,
                backgroundColor: selected ? COLORS.primary : COLORS.white,
                paddingHorizontal: SIZES.padding - 10,
                paddingVertical: SIZES.padding - 10,
                borderRadius: SIZES.radius - 5,
                ...UTILS.shadow2,
              }}>
              <View
                style={{
                  marginRight: SIZES.padding - 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={selected ? icon.focusIcon : icon.idleIcon}
                  style={{
                    width: SIZES.padding2,
                    height: SIZES.padding2,
                  }}></Image>
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

  return (
    // Wrapper
    <View style={style.wrap}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={() => {
              handleRefresh();
            }}
          />
        }
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
          <Text
            onPress={() => {
              test();
            }}
            style={{...FONTS.largeTitle, color: COLORS.primary}}>
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
            {status === 'loading'
              ? LoadingPoster()
              : status === 'error'
              ? ErrorAstronaut()
              : data && renderBooks()}
            {/* Render Book */}
          </ScrollView>
        </View>
        {/* Box 6 */}
        <View style={style.boxSix}>
          <Text
            style={{
              ...FONTS.largeTitleBold,
              color: COLORS.primary,
              // fontSize: SIZES.h1p,
              marginLeft: SIZES.padding,
            }}>
            Latest
          </Text>
          <Text style={{...FONTS.body2, marginLeft: SIZES.padding}}>
            Titles recently added on Blank
          </Text>
          <View style={style.line}></View>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: SIZES.padding - 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/* {!loading ? renderBooks(20) : LoadingPoster()} */}
          </ScrollView>
        </View>
        {/* Box 7 */}
        <View style={style.boxSeven}>
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
          <View style={style.line}></View>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: SIZES.padding - 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/* {!loading ? renderBooks(20) : LoadingPoster()} */}
          </ScrollView>
        </View>
        <View style={style.boxSeven}>
          <Text
            style={{
              ...FONTS.largeTitleBold,
              color: COLORS.primary,
              marginLeft: SIZES.padding,
            }}>
            Upcoming
          </Text>
          <Text style={{...FONTS.body2, marginLeft: SIZES.padding}}>
            More interesting are coming!
          </Text>
          <View style={style.line}></View>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: SIZES.padding - 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/* { !loading ? renderBooks(20) : LoadingPoster()} */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
