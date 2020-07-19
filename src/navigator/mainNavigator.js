import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList81347Navigator from '../features/NotificationList81347/navigator';
import Settings81346Navigator from '../features/Settings81346/navigator';
import Settings81338Navigator from '../features/Settings81338/navigator';
import UserProfile81336Navigator from '../features/UserProfile81336/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList81347: { screen: NotificationList81347Navigator },
Settings81346: { screen: Settings81346Navigator },
Settings81338: { screen: Settings81338Navigator },
UserProfile81336: { screen: UserProfile81336Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
