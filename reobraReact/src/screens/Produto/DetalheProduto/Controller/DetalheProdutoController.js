import React from 'react';
import DetalheProdutoView from '../View/DetalheProdutoView';
import HeaderController from '../../../../components/HeaderController';
class DetalheProdutoController extends HeaderController {
  render() {
    return (
      //Chamando o View e passando o props count_info
      <DetalheProdutoView />
    );
  }
}
export default DetalheProdutoController;
