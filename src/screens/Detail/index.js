import React from 'react';
import {ScrollView, Text, View, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import style from './styles';

export const Detail = () => {
  return (
    <SafeAreaView style={style.wrap}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Box 1 */}
        <View style={style.boxOne}>
          <Icon name="arrow-back" size={25} color="black"></Icon>
          <Icon name="bookmark" size={25} color="red"></Icon>
        </View>
        {/* Box 2 */}
        <View style={style.boxTwo}>
          <Image
            resizeMode="contain"
            style={style.cover}
            source={require('../../assets/Images/Poster/1.png')}
          />
          <View style={style.info}>
            <Text style={style.title}>Catcher in the Rye</Text>
            <Text>J.D Salinger</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon2
                style={style.star}
                name="star"
                size={20}
                color="#ffce31"></Icon2>
              <Icon2
                style={style.star}
                name="star"
                size={20}
                color="#ffce31"></Icon2>
              <Icon2
                style={style.star}
                name="star"
                size={20}
                color="#ffce31"></Icon2>
              <Icon2
                style={style.star}
                name="star"
                size={20}
                color="#ffce31"></Icon2>
              <Icon2
                style={style.star}
                name="star-half-full"
                size={20}
                color="#ffce31"></Icon2>
              <Text>4.5</Text>
            </View>
          </View>
        </View>
        {/* Box 3 */}
        <View style={style.boxThree}>
          <Text style={style.title}>About the author</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            autem, ipsum voluptates dignissimos soluta vero itaque eveniet
            repudiandae ducimus nihil ut magni iusto odio cumque sed temporibus,
            in ad officia?
          </Text>
        </View>
        {/* Box 4 */}
        <View style={style.boxFour}>
          <Text style={style.title}>Overview</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            autem, ipsum voluptates dignissimos soluta vero itaque eveniet
            repudiandae ducimus nihil ut magni iusto odio cumque sed temporibus,
            in ad officia?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
