# supplyStore_spring_react_native

## About

This is a university POC made in late 2021 with the idea of creating a network of small construction supply shops within an order manager app. It works similarly to a food app, with the difference of having a chat between the parties, and deliveries being arranged independently. This ensures that small business get more exposure to clients outside their area, also benefitting customers that don't want/need to go to big chains.

## Technologies used

- Java 8
- Spring Boot
- Spring Data JPA
- Hibernate
- Oracle database
- React Native
- CSS

## How to run

### Spring API

- To run the Spring API, import the project into your favourite IDE, build and run your project. For endpoints, please refer to the Controller file:
https://github.com/poletto123/supplyStore_spring_react_native/blob/main/reobra/src/main/java/br/com/reobra/controller/Controller.java



###  Android app:

-  Install the required dependencies:
```
cd reobraReact

npm add react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-drawer react-navigation-stack react-native-elements react-native-vector-icons
```

- Open the project inside Android Studio and run ```gradle clean build``` within the *android* folder

- Generate the APK, to be used in the Android Studio emulator or in portable phone:
```
react-native run-android
```

###  Mac/iOS app:

```
  cd ios 
  pod install
  cd .. 
  react-native run-ios
```