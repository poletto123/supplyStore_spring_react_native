//Importamos as bibliotecas do react-navigation e react-navigation-stack
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DrawerActions} from 'react-navigation-drawer';
import ListaProdutoController from '../screens/ListaProduto/Controller/ListaProdutoController';
import ProdutoController from '../screens/Produto/Controller/ProdutoController';
import LeftMenu from '../screens/SideMenu/LeftMenu/Controller/LeftMenuController';
import RightMenu from '../screens/SideMenu/RightMenu/Controller/RightMenuController';

const LeftDrawerStack = createDrawerNavigator(
  {
    //Aqui criamos um StackNavigator que fara o fluxo de navegacao entre essas telas
    Places: createStackNavigator({
      Produtos: {
        screen: ListaProdutoController,
        navigationOptions: {
          headerTitleAlign: 'center',
        },
      },
      Produto: {
        screen: ProdutoController,
        navigationOptions: {
          headerTitleAlign: 'center',
        },
      },
    }),
  },
  {
    initialRouteName: 'Places', //Places como rota Inicial
    contentComponent: LeftMenu, //O componente SideMenu sera o menu lateral
    getCustomActionCreators: (_route, key) => ({
      openLeftDrawer: () => DrawerActions.openDrawer({key}),
      closeLeftDrawer: () => DrawerActions.closeDrawer({key}),
      toggleLeftDrawer: () => DrawerActions.toggleDrawer({key}),
    }),
  },
);

export const AppStack = createDrawerNavigator(
  {
    LeftDrawerStack,
  },
  {
    drawerPosition: 'right',
    contentComponent: RightMenu,
    getCustomActionCreators: (_route, key) => ({
      openRightDrawer: () => DrawerActions.openDrawer({key}),
      closeRightDrawer: () => DrawerActions.closeDrawer({key}),
      toggleRightDrawer: () => DrawerActions.toggleDrawer({key}),
    }),
  },
);

//Criando o AppContainer para gerenciar todo o aplicativo
const AppContainer = createAppContainer(AppStack);
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
