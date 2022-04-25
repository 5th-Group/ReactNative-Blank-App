import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// CONST

const handleIcon = (icon, name, size, color) => {
  const components = {
    Octicons,
    MaterialCommunityIcons,
    Ionicons,
    Entypo,
    Feather,
    AntDesign,
    MaterialIcons,
    FontAwesome,
    FontAwesome5,
  };
  const SpecificStory = components[icon];
  return <SpecificStory name={name} size={size} color={color} />;
};

export default handleIcon;
