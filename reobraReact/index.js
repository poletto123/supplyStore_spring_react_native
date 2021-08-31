import {AppRegistry} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation'; //Importando o Home Controller
import {name as appName} from './app.json';
//Alterando o App para HomeController. Aqui irá chamar sua classe
AppRegistry.registerComponent(appName, () => MainNavigation);
