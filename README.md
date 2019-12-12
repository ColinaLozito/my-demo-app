# my-demo-app
This is a demo app builded under react-native and tested only in iOS

## Requiremens
Have installed:
- `Xcode`
- `Yarn` or `npm`
- `Node`
- `cocoapods`

## Features
This demo app have:
- Conexion with `apollo` and `graphQl`
- Mocked `token` logic (builded thinking in a backend or midleware authentication)
- Tabbar (`Main` and `List`) using `react-navigation` lib
- Data persist with `redux` and `redux-persist`
- `RxJs` lib to handle the logic behind `navigations` and `actions`

## Instructions
To build and compile the app:

1. Clone the repo
2. With yout favorite terminal go to the app main folder
3. Execute `Yarn` or `npm i`
4. go to `ios/` folder and execute `pod install`
5. back to main folder and execute `yarn run` or `npm run`
6. Type `ios`
7. It should build

if you have some problems or erros running previous steps:

1. Open `Xcode`
2. Find the app folder then `ios/` folder
3. select `myappxcworkspace`
4. select the device where you want to test the app
5. Build de app (you can do it presing `command`+`R`)
6. The app should build

# Screen


![mydemoapp](https://user-images.githubusercontent.com/18740032/70680656-e1472700-1c66-11ea-9416-80e20703370a.gif)
