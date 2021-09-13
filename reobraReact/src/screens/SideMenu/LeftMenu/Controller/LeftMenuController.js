import React from 'react';
import LeftMenuView from '../View/LeftMenuView';
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

  goToPerfil = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Perfil');
  };

  goToContato = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Contato');
  };

  goToSobre = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Sobre');
  };

  render() {
    return (
      <LeftMenuView
        goToListaProduto={this.goToListaProduto}
        goToPedidos={this.goToPedidos}
        goToPerfil={this.goToPerfil}
        goToContato={this.goToContato}
        goToSobre={this.goToSobre}
      />
    );
  }
}
export default LeftMenuController;
