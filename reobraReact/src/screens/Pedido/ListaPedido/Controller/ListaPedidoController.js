import React from 'react';
import HeaderController from '../../../components/HeaderController';
import ListaPedidoView from '../View/ListaPedidoView';

class ListaPedidoController extends HeaderController {
  constructor(props) {
    super(props);
  }

  render() {
    return <ListaPedidoView />;
  }
}

export default ListaPedidoController;
