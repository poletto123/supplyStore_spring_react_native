import React from 'react';
import HeaderController from '../../../../components/HeaderController';
import DetalhePedidoView from '../View/DetalhePedidoView';

class DetalhePedidoController extends HeaderController {
  constructor(props) {
    super(props);
  }

  render() {
    return <DetalhePedidoView />;
  }
}

export default DetalhePedidoController;
