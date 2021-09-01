import React from 'react';
import HomeView from '../View/HomeView';
import DefaultController from '../../../components/DefaultController';

class HomeController extends DefaultController {
  constructor(props) {
    super(props);
  }

  goToDetail = () => {
    //Aqui estamos chamando a classe DetailController usando o nome Details
    this.props.navigation.navigate('Details', {
      showBackButton: true,
    });
  };

  render() {
    return (
      //Chamando o View e passando o props count_info
      <HomeView
        goToDetail={this.goToDetail} //props onButtonPressed e passando o método
      />
    );
  }
}

export default HomeController;
