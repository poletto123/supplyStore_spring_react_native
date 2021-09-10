import React from 'react';
import SideMenuView from '../View/LeftMenuView';
class LeftMenuController extends React.Component {
  constructor(props) {
    super(props);
  }

  goToPedidos = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Pedidos');
  };

  goToListaProduto = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Produtos');
  };

  render() {
    return (
      <SideMenuView
        goToListaProduto={this.goToListaProduto}
        goToPedidos={this.goToPedidos}
      />
    );
  }
}
export default LeftMenuController;
