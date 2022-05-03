import {nanoid} from '@reduxjs/toolkit';

export const category = [
  {
    id: nanoid(),
    title: 'Action',
    icon: {
      idleIcon: require('../assets/icons/action/sword.png'),
      focusIcon: require('../assets/icons/action/sword-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Adventure',
    icon: {
      idleIcon: require('../assets/icons/adventure/map.png'),
      focusIcon: require('../assets/icons/adventure/map-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Detective',
    icon: {
      idleIcon: require('../assets/icons/detective/spy.png'),
      focusIcon: require('../assets/icons/detective/spy-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Fiction',
    icon: {
      idleIcon: require('../assets/icons/fiction/rocket.png'),
      focusIcon: require('../assets/icons/fiction/rocket-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Horror',
    icon: {
      idleIcon: require('../assets/icons/horror/coffin.png'),
      focusIcon: require('../assets/icons/horror/coffin-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'History',
    icon: {
      idleIcon: require('../assets/icons/history/architecture.png'),
      focusIcon: require('../assets/icons/history/architecture-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Mystery',
    icon: {
      idleIcon: require('../assets/icons/mystery/witch-hat.png'),
      focusIcon: require('../assets/icons/mystery/witch-hat-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Psychology',
    icon: {
      idleIcon: require('../assets/icons/psychology/psychology.png'),
      focusIcon: require('../assets/icons/psychology/psychology-outline.png'),
    },
  },
  {
    id: nanoid(),
    title: 'Myth',
    icon: {
      idleIcon: require('../assets/icons/myth/monster.png'),
      focusIcon: require('../assets/icons/myth/monster-outline.png'),
    },
  },
];
