import React from 'react';
import PerfilView from '../View/PerfilView';
import HeaderController from '../../../components/HeaderController';
class PerfilController extends HeaderController {
  render() {
    return (
      //Chamando o View e passando o props count_info
      <PerfilView />
    );
  }
}
export default PerfilController;
