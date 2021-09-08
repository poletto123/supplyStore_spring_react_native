import React from 'react';
import ProdutoView from '../View/ProdutoView';
import DefaultController from '../../../components/DefaultController';
class ProdutoController extends DefaultController {
  render() {
    return (
      //Chamando o View e passando o props count_info
      <ProdutoView />
    );
  }
}
export default ProdutoController;
