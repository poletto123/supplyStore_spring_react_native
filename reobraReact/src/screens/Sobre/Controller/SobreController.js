import React from 'react';
import SobreView from '../View/SobreView';
import HeaderController from '../../../components/HeaderController';
class SobreController extends HeaderController {
  render() {
    return (
      //Chamando o View e passando o props count_info
      <SobreView />
    );
  }
}
export default SobreController;
