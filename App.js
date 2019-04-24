import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlacesScreen from './src/screens/SharePlaces/SharePlaces'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer'

import configureStore from './src/store/configureStore'

const store = configureStore()

// Register Screens (different types of screens with a unique id, a store, a provider)
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlacesScreen", () => SharePlacesScreen, store, Provider)
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider)
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider)
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => SideDrawerScreen)

// Start a App (with login screen)
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})
