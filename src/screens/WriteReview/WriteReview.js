import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

// Components
import BackIcon from '../../components/Back-Icon/BackIcon';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import StarRating from 'react-native-star-rating';

// Const
import {SIZES, FONTS, UTILS, COLORS} from '../../constants/constants';
import {useSelector} from 'react-redux';
import bookApiPost from '../../api/apiV1';
import {postReview} from '../../api/apiFixPost';

const WriteReview = ({navigation, route}) => {
  // States
  const [review, setReview] = useState({
    ratedScore: 1,
  });
  const [status, setStatus] = useState('idle');

  // Redux
  const token = useSelector(state => state.user.accessToken);
  // Const
  const {detail, id} = route.params;

  // Effect
  useEffect(() => {
    if (status === 'success') {
      navigateBack();
    }
  }, [status]);

  // Handle

  //   Form
  const handleFormReview = e => {
    setReview({...review, review: e});
  };
  // Navigate
  const navigateBack = () => {
    navigation.goBack();
  };

  // Post review
  const handlePostReview = () => {
    postReview(review, id, token);
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
        <View style={{flexDirection: 'row', marginBottom: 50}}>
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
          <View style={{}}>
            <Text style={{...FONTS.h2}}>{detail.title}</Text>
            <Text style={{...FONTS.h2}}>{detail.title}</Text>
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
      {renderHeader()}
      {renderWriteReview()}
    </View>
  );
};

export default WriteReview;
