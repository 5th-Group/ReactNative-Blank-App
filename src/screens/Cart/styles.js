import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    height: 860,
    width: '100%',
  },
  // Bottom
  bottom: {
    height: 100,
    justifyContent: 'flex-start',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});

export default style;
