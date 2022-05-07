import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

// Components
import BackIcon from '../../components/Back-Icon/BackIcon';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import StarRating from 'react-native-star-rating';
import {LoadingDanceDot} from '../../components/Poster/Poster';

// Const
import {SIZES, FONTS, UTILS, COLORS} from '../../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
import {postReview} from '../../api/apiFixPost';

// Actions
import {resetPostReivewUpdate} from '../../features/SingleBook/SingleBookSlice';

const WriteReview = ({navigation, route}) => {
  // States
  const [review, setReview] = useState({
    ratedScore: 1,
  });

  // Redux
  const token = useSelector(state => state.user.accessToken);
  const singleBookPostReviewStatus = useSelector(
    state => state.singleBook.postReviewStatus,
  );

  // Const
  const {detail, id} = route.params;
  const disPatch = useDispatch();

  // Effect
  useEffect(() => {
    if (singleBookPostReviewStatus === 'success') {
      disPatch(resetPostReivewUpdate());
      navigation.goBack();
    }
  }, [singleBookPostReviewStatus]);

  // Handle
  // Form
  const handleFormReview = e => {
    setReview({...review, review: e});
  };

  // Navigate
  const navigateBack = () => {
    navigation.goBack();
  };

  // Post review
  const handlePostReview = () => {
    postReview(review, id, token, disPatch);
  };

  // Render
  // Header
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginVertical: SIZES.padding - 10,
          marginBottom: SIZES.padding + 10,
        }}>
        {/* Back icon */}
        <BackIcon onPress={navigateBack}></BackIcon>
        {/* Title */}
        <Text
          onPress={() => {
            console.log(review);
          }}
          style={{
            ...FONTS.largeTitleBold,
            color: COLORS.primary,
          }}>
          Write Review
        </Text>
      </View>
    );
  };
  //   Write Review
  const renderWriteReview = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          ...UTILS.shadow,
          width: SIZES.width - 40,
          borderRadius: SIZES.radius,
          padding: 20,
        }}>
        {/* Image & Name */}
        <View
          style={{flexDirection: 'row', marginBottom: 50, overflow: 'hidden'}}>
          <View
            style={{
              marginHorizontal: 20,
              width: 100,
              borderRadius: SIZES.radius,
              overflow: 'hidden',
              ...UTILS.center,
              ...UTILS.shadow,
            }}>
            <Image
              resizeMode="cover"
              style={{width: 100, height: 150}}
              source={{uri: detail.icon}}></Image>
          </View>
          {/* Title */}
          <View style={{flexWrap: 'wrap'}}>
            <Text numberOfLines={1} style={{...FONTS.h1}}>
              {detail.title}
            </Text>
          </View>
        </View>
        {/* Image & Name */}
        {/* Forms */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h1}}>Đánh giá</Text>
            <View>
              <StarRating
                emptyStar={'star-o'}
                emptyStarColor={COLORS.secondary}
                fullStar={'star'}
                fullStarColor={COLORS.secondary}
                halfStar={'star-half-full'}
                halfStarColor={COLORS.secondary}
                iconSet={'FontAwesome'}
                animation="pulse"
                starColor={COLORS.secondary}
                maxStars={5}
                rating={review.ratedScore}
                selectedStar={rating => {
                  console.log(review);
                  setReview({...review, ratedScore: rating});
                }}
              />
            </View>
          </View>
          <View style={{marginBottom: 50}}>
            <Form
              multiline={true}
              height={100}
              width="100%"
              title="Review"
              value={review.review}
              setValue={handleFormReview}></Form>
          </View>
          {/* Button */}
          <View>
            <Button
              onPress={() => {
                handlePostReview();
              }}
              title="Post"
              size={{h: 70, w: SIZES.width - 80}}></Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: SIZES.padding,
      }}>
      {singleBookPostReviewStatus === 'loading' && LoadingDanceDot()}
      {renderHeader()}
      {renderWriteReview()}
    </View>
  );
};

export default WriteReview;
