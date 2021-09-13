import React from 'react';
import ContatoView from '../View/ContatoView';
import HeaderController from '../../../components/HeaderController';
class ContatoController extends HeaderController {
  render() {
    return (
      //Chamando o View e passando o props count_info
      <ContatoView />
    );
  }
}
export default ContatoController;
