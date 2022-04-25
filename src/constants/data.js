import {nanoid} from '@reduxjs/toolkit';

export const category = [
  {
    id: nanoid(),
    title: 'Science',
    icon: {
      brand: 'Ionicons',
      idleIcon: 'flask',
      focusIcon: 'flask-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Productivity',
    icon: {
      brand: 'FontAwesome',
      idleIcon: 'hourglass-3',
      focusIcon: 'hourglass-o',
    },
  },
  {
    id: nanoid(),
    title: 'Nature',
    icon: {
      brand: 'Ionicons',
      idleIcon: 'leaf',
      focusIcon: 'leaf-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Technology',
    icon: {
      brand: 'Ionicons',
      idleIcon: 'ios-hardware-chip-sharp',
      focusIcon: 'ios-hardware-chip-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Motivation',
    icon: {
      brand: 'MaterialCommunityIcons',
      idleIcon: 'lightbulb-on',
      focusIcon: 'lightbulb-on-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Entrepreneurship',
    icon: {
      brand: 'MaterialCommunityIcons',
      idleIcon: 'rocket-launch',
      focusIcon: 'rocket-launch-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Economics',
    icon: {
      brand: 'Ionicons',
      idleIcon: 'globe',
      focusIcon: 'globe-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Communication Skills',
    icon: {
      brand: 'MaterialCommunityIcons',
      idleIcon: 'thought-bubble',
      focusIcon: 'thought-bubble-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Relationships',
    icon: {
      brand: 'MaterialCommunityIcons',
      idleIcon: 'heart-multiple',
      focusIcon: 'heart-multiple-outline',
    },
  },
  {
    id: nanoid(),
    title: 'Investments',
    icon: {
      brand: 'Ionicons',
      idleIcon: 'wallet',
      focusIcon: 'wallet-outline',
    },
  },
];
