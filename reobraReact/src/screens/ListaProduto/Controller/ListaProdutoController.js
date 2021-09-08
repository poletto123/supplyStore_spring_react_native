import React from 'react';
import ListaProdutoView from '../View/ListaProdutoView';
import DefaultController from '../../../components/DefaultController';

class ListaProdutoController extends DefaultController {
  constructor(props) {
    super(props);
  }

  goToProduto = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Produto', {
      showBackButton: true,
    });
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
