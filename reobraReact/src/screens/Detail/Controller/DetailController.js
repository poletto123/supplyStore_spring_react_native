import React from 'react';
import DetailView from '../View/DetailView';
import DefaultController from '../../../components/DefaultController';
class DetailController extends DefaultController {
  render() {
    return (
      //Chamando o View e passando o props count_info
      <DetailView item_id={this.props.navigation.getParam('itemId', '-1')} />
    );
  }
}
export default DetailController;
