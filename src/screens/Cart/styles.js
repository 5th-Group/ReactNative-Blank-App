import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
    // backgroundColor: 'white',
  },
  // Header
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Body
  body: {
    height: '70%',
    width: '100%',
  },
  // Bottom
  bottom: {
    flex: 1,
  },
  total: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default style;
