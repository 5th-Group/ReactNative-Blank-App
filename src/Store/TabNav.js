screenOptions={({route}) => ({
    initialRouteName: 'Login',
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      height: 60,
      position: 'absolute',
      bottom: 16,
      right: 16,
      left: 16,
      borderRadius: 10,
    },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      let rn = route.name;

      if (rn === homeName) {
        iconName = focused ? 'home' : 'home-outline';
      } else if (rn === cartName) {
        iconName = focused ? 'cart' : 'cart-outline';
      } else if (rn === settingsName) {
        iconName = focused ? 'settings' : 'settings-outline';
      } else if (rn === profileName) {
        iconName = focused ? 'person' : 'person-outline';
      }

      return (
        <Ionicons
          name={iconName}
          size={size}
          color={focused ? constants.primaryColor : color}
        />
      );
    },
  })}