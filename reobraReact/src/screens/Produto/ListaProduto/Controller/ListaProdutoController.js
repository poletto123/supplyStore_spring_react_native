import React from 'react';
import ListaProdutoView from '../View/ListaProdutoView';
import HeaderController from '../../../components/HeaderController';

class ListaProdutoController extends HeaderController {
  constructor(props) {
    super(props);
  }

  goToProduto = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Produto');
  };

  render() {
    return (
      //Chamando o View e passando o props count_info
      <ListaProdutoView
        goToProduto={this.goToProduto} //props onButtonPressed e passando o método
      />
    );
  }
}

export default ListaProdutoController;
