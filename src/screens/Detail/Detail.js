import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// Components
import Button from '../../components/Button/Button';
import BackIcon from '../../components/Back-Icon/BackIcon';
import {Divider} from '../../constants/constants';
import handleIcon from '../../components/Icon/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';
import {Loader} from '../../components/Poster/Poster';
import StarRating from 'react-native-star-rating';

// CONST
import style from './styles';
import {COLORS, FONTS, SIZES, UTILS} from '../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../../features/Cart/cartSlice';
import bookApiGet from '../../api/apiV2';

export const Detail = ({navigation, route}) => {
  // State
  const [book, setBook] = useState(null);
  const [status, setStatus] = useState('idle');
  const [quantity, setQuantity] = useState(1);
  // Const
  const {id} = route.params;
  const user = useSelector(state => state.user.userInfo);
  const disPatch = useDispatch();

  // Effect
  useEffect(() => {
    const getBook = async () => {
      setStatus('loading');
      try {
        const response = await bookApiGet.getBook(id);
        console.log(response.data.detail.title);
        setBook(response.data);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };
    getBook();
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     let isActive = true;
  //     const getBookk = async () => {
  //       setStatus('loading');
  //       try {
  //         const response = await bookApiGet.getBook(id);
  //         if (isActive) {
  //           setBook(response.data);
  //           setStatus('success');
  //         }
  //       } catch (e) {
  //         setStatus('error');
  //       }
  //     };
  //     getBookk();
  //     return () => {
  //       isActive = false;
  //     };
  //   }, [id]),
  // );

  // Handle

  // Quantity
  const handleQuantity = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Add Item
  const handleAddItem = () => {
    console.log(typeof book.detail.icon);
    disPatch(
      addProduct({
        price: book.price,
        title: book.detail.title,
        image: book.detail.icon,
        id: book._id,
        quantity,
      }),
    );
  };

  // Navigate
  const navigateBack = () => {
    navigation.goBack();
  };

  // Renders
  // Book detail
  const renderBookDetailUpper = () => {
    return (
      <>
        {/* Book cover */}
        <View
          style={{
            ...UTILS.shadow,
            borderRadius: SIZES.radius,
            overflow: 'hidden',
          }}>
          <Image
            resizeMode="cover"
            style={style.image}
            source={{uri: book.detail.icon}}
          />
        </View>
        {/* Book name and Author */}
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.h1,
            color: COLORS.white,
            marginTop: SIZES.padding,
            fontSize: SIZES.h1p,
            textAlign: 'center',
            textShadowColor: COLORS.lightGray4,
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 2,
          }}>
          {book.detail.title}
        </Text>
        <Text
          style={{
            ...FONTS.body2,
            marginBottom: SIZES.padding - 10,
            fontFamily: FONTS.bold,
            color: COLORS.primary,
          }}>
          {book.detail.author.length > 1 ? book.detail.author[0].firstName : ''}
        </Text>
      </>
    );
  };

  // Book Rating
  const renderBookRating = () => {
    const shortLangApi = book.detail.language.code.toUpperCase();
    return (
      <>
        <View style={style.ratingItem}>
          {/* Rating */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* Score */}
            <Text
              style={{...FONTS.body2, color: COLORS.lightGray, marginRight: 5}}>
              {book.averageScore.toFixed(1)}
            </Text>
            {/* Score */}
            {handleIcon('FontAwesome', 'star', SIZES.h1, COLORS.secondary)}
          </View>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>Rating</Text>
        </View>
        <Divider></Divider>

        {/* Page count */}
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
            {book.detail.pageCount}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>Page Count</Text>
        </View>
        <Divider></Divider>

        {/* Lang */}
        <View style={style.ratingItem}>
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
            {shortLangApi}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.primary}}>Language</Text>
        </View>
      </>
    );
  };
  //
  // Bottom
  const renderButtons = () => {
    return (
      <>
        <View style={style.count}>
          {/* Quantity */}
          <View style={style.quantity}>
            <TouchableOpacity
              disabled={quantity == 1 ? true : false}
              onPress={() => {
                handleQuantity('dec');
              }}>
              {handleIcon(
                'FontAwesome',
                'minus-circle',
                SIZES.h1Half,
                quantity != 1 ? COLORS.primary : COLORS.lightGray4,
              )}
            </TouchableOpacity>
            <View>
              <Text style={{...FONTS.h2}}>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleQuantity('inc');
              }}>
              {handleIcon(
                'FontAwesome',
                'plus-circle',
                SIZES.h1Half,
                COLORS.primary,
              )}
            </TouchableOpacity>
          </View>
          {/* Quantity */}
          {/* Total */}
          <View style={style.total}>
            <Text style={{...FONTS.body2}}>Total: </Text>
            <Text
              style={{
                ...FONTS.h2,
                marginLeft: 5,
                color: COLORS.primary,
              }}>{`${book.price * quantity}₫`}</Text>
          </View>
          {/* Total */}
        </View>
        {/* Add to cart Button */}
        <View style={style.button}>
          <Button
            onPress={handleAddItem}
            title="Add to Cart"
            color={true}
            size={{w: 'full', h: 70}}
          />
        </View>
        {/* Add to cart Button */}
      </>
    );
  };
  // Comment Section
  const renderCommentSection = () => {
    return (
      <View style={{...UTILS.center}}>
        {/* Rate Box */}
        <View
          style={{
            ...UTILS.shadow2,
            width: SIZES.width - 40,
            backgroundColor: COLORS.white,
            height: 300,
            padding: 30,
            borderRadius: SIZES.radius,
            justifyContent: 'space-between',
            marginVertical: SIZES.padding,
          }}>
          <Text style={{...FONTS.h1}}>Rate & Reviews</Text>
          {/* Rate Score */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.h1Hyper + 30,
                marginRight: SIZES.padding,
                color: COLORS.secondary,
              }}>
              {book.averageScore.toFixed(2)}
            </Text>

            <View>
              <Text
                onPress={() => {
                  console.log(id);
                }}
                style={{
                  ...FONTS.body2,
                }}>{`Average Score (${book.review.length})`}</Text>
              <StarRating
                emptyStar={'star-o'}
                emptyStarColor={COLORS.secondary}
                starColor={COLORS.secondary}
                fullStar={'star'}
                fullStarColor={COLORS.secondary}
                halfStar={'star-half-full'}
                halfStarColor={COLORS.secondary}
                iconSet={'FontAwesome'}
                animation="pulse"
                maxStars={5}
                disabled={true}
                halfStarEnabled={true}
                rating={book.averageScore}
              />
            </View>
          </View>
          <Button
            onPress={() => {
              navigation.navigate('WriteReview', {
                detail: book.detail,
                id: book._id,
              });
            }}
            title="Write Review"
            size={{h: 70, w: '100%'}}></Button>
        </View>
        {/* Rate Box */}
        {/* Reviews Site */}
        <View
          style={{
            width: SIZES.width - 40,
          }}>
          <Text style={{...FONTS.h1, marginBottom: 10, color: COLORS.primary}}>
            All reviews
          </Text>
          {book.review.map(review => {
            return (
              <Review
                key={review._id}
                user={user}
                review={review.review}
                reviewer={review.reviewer.lastName}
                rateScore={review.ratedScore}></Review>
            );
          })}
        </View>
        {/* Reviews Site */}
      </View>
    );
  };

  return (
    <>
      {status === 'success' ? (
        <SafeAreaView style={style.wrap}>
          {/* Book's info */}
          <ScrollView>
            {/* Book Upper */}
            <View style={style.cover}>
              {/* Linear */}
              <LinearGradient
                style={{
                  position: 'absolute',
                  ...UTILS.absolute,
                  zIndex: 2,
                }}
                colors={['transparent', COLORS.backgroun]}></LinearGradient>
              {/* Background */}
              <ImageBackground
                blurRadius={2}
                source={{uri: book.detail.icon}}
                resizeMode="cover"
                style={{
                  position: 'absolute',
                  ...UTILS.absolute,
                  zIndex: 1,
                }}
              />
              {/* Color overlay */}
              <View
                style={{
                  position: 'absolute',
                  ...UTILS.absolute,
                  backgroundColor: COLORS.overlay(0.5),
                  zIndex: 1,
                }}></View>
              {/* Color overlay */}
              {/* Back button */}
              <View
                style={{
                  alignSelf: 'flex-start',
                  margin: SIZES.padding,
                  zIndex: 20,
                }}>
                <BackIcon onPress={navigateBack}></BackIcon>
              </View>
              {/* Back button */}
              <View style={style.Detail}>
                {/* DetailUpper */}
                {renderBookDetailUpper()}
                {/* DetailUpper */}
              </View>
              {/* Book rating */}
              <View style={{zIndex: 10}}>
                <Shadow>
                  <View style={style.Rating}>
                    {/* BookRating */}
                    {renderBookRating()}
                    {/* BookRating */}
                  </View>
                </Shadow>
              </View>
            </View>
            {/* Book Upper */}
            <View style={style.Description}>
              {/* Box 3 */}
              <View style={style.author}>
                <Text style={{...FONTS.h1, color: COLORS.primary}}>
                  About the author
                </Text>
                <Text style={{...FONTS.body2}}>
                  An homage to what it means to be Korean American with
                  delectable recipes that explore how new culinary traditions
                  can be forged to honor both your past and your present. "This
                  is such an important book. I savored every word and want to
                  cook every recipe!"--Nigella Lawson, author of Cook, Eat,
                  Repeat
                </Text>
              </View>
              {/* Box 4 */}
              <View style={style.overview}>
                <Text style={{...FONTS.h1, color: COLORS.primary}}>
                  Overview
                </Text>
                <Text style={{...FONTS.body2}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime autem, ipsum voluptates dignissimos soluta vero itaque
                  eveniet repudiandae ducimus nihil ut magni iusto odio cumque
                  sed temporibus, in ad officia?
                </Text>
                <Text style={{...FONTS.body2}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime autem, ipsum voluptates dignissimos soluta vero itaque
                  eveniet repudiandae ducimus nihil ut magni iusto odio cumque
                  sed temporibus, in ad officia?
                </Text>
                <Text style={{...FONTS.body2}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime autem, ipsum voluptates dignissimos soluta vero itaque
                  eveniet repudiandae ducimus nihil ut magni iusto odio cumque
                  sed temporibus, in ad officia?
                </Text>
              </View>
            </View>
            {/* Somthing else */}
            {renderCommentSection()}
          </ScrollView>

          {/* Bottom */}
          <Shadow
            distance={SIZES.padding}
            offset={[0, 0]}
            viewStyle={{alignSelf: 'stretch'}}
            safeRender={true}>
            {/* Buttons */}
            <View style={style.bottomButton}>
              {/* RenderButton */}
              {renderButtons()}
              {/* RenderButton */}
            </View>
          </Shadow>
        </SafeAreaView>
      ) : (
        <View
          style={{
            position: 'absolute',
            ...UTILS.absolute,
            backgroundColor: COLORS.overlay(0.8),
            zIndex: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {Loader()}
        </View>
      )}
    </>
  );
};

export default Detail;

const Review = ({review, rateScore, reviewer, user}) => {
  return (
    <View
      style={{
        width: SIZES.width - 40,
        justifyContent: 'flex-start',
        paddingBottom: 30,
        borderBottomWidth: 2,
        borderColor: COLORS.lightGray3,
        marginBottom: 20,
      }}>
      <View
        style={{flexDirection: 'row', marginBottom: 30, alignItems: 'center'}}>
        <Text style={{...FONTS.body2, marginRight: 50}}>Đánh giá</Text>
        <StarRating
          starSize={20}
          emptyStar={'star-o'}
          starColor={COLORS.secondary}
          emptyStarColor={COLORS.secondary}
          fullStar={'star'}
          fullStarColor={COLORS.secondary}
          halfStar={'star-half-full'}
          halfStarColor={COLORS.secondary}
          iconSet={'FontAwesome'}
          animation="pulse"
          maxStars={5}
          starStyle={{
            marginRight: 5,
          }}
          disabled={true}
          halfStarEnabled={true}
          rating={rateScore}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{...FONTS.body2, color: COLORS.gray}}>{review}</Text>
      </View>
      <View>
        <Text style={{...FONTS.body2, color: COLORS.primary}}>
          {reviewer === user.lastName ? `${reviewer} (You)` : reviewer}
        </Text>
      </View>
    </View>
  );
};
