import {registerRootComponent} from 'expo';
import App from './App';
import {View} from 'react-native';

function index() {
  return <App />;
}

registerRootComponent(App);
export default index;

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
