//Importamos as bibliotecas do react-navigation e react-navigation-stack
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ProdutoController from '../screens/Home/Controller/ProdutoController';
import DetailController from '../screens/Detail/Controller/DetailController';
import SideMenu from '../screens/SideMenu/Controller/SideMenuController';
//Aqui criamos o DrawerNavigator. Ele é um objeto que criará o header
const AppLogged = createDrawerNavigator(
  {
    //Aqui criamos um StackNavigator que fara o fluxo de navegacao entre essas telas
    Places: createStackNavigator({
      Produtos: {
        screen: ProdutoController,
        navigationOptions: {
          headerTitleAlign: 'center',
        },
      },
      Detalhe: {
        screen: DetailController,
        navigationOptions: {
          headerTitleAlign: 'center',
        },
      },
    }),
  },
  {
    initialRouteName: 'Places', //Places como rota Inicial
    contentComponent: SideMenu, //O componente SideMenu sera o menu lateral
  },
);
//Criando o AppContainer para gerenciar todo o aplicativo
const AppContainer = createAppContainer(AppLogged);
//Criamos um classe de para gerenciar a Navegação Principal
export default class MainNavigation extends React.Component {
  render() {
    //Colocando o AppContainer para renderizar
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
