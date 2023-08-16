# Ignite Shoes - React-Native (Push notifications)

The **_IgniteShoes_** project is part of a bootcamp conducted by RocketSeat to exemplify and test the usage of messaging functionality in React Native mobile applications. The app replicates a shoe store and features a user-friendly and intuitive interface.

<h2 align="center">Ignite Shoes App</h2>
<h3 align="center">
  <a href="#information_source-about">About</a>&nbsp;|&nbsp;
  <a href="#minimum-requirements">Requirements</a>&nbsp;|&nbsp;
  <a href="#technologies-used">Technologies</a>&nbsp;|&nbsp;
  <a href="#package-how-to-download-and-run-the-project">Download and Run</a>&nbsp;
</h3>

---

<div align="center" >
<img src="/assets/images/homescreen.gif" width="300">
#####GIF-HERE#####
</div>

---

## :information_source: About

This shoe store was created using Expo + React Native and includes various features to enhance the user experience. The main objective of this application is to put into practice the concepts of messaging on mobile devices through OneSignal. Messages are received both in the foreground and in the background.

On the initial screen, there is a list of products that are filtered by brand and are displayed in the form of cards. Upon entering any of these products, the user gains access to the product image, available stock quantity, as well as the description and available sizes.

The app utilizes React's ContextAPI to handle additional items in the cart more effectively. For messaging, the OneSignal library was used to capture the customer's attention both within and outside the app.

- **Splash and Home**:

<div align="center" >
  <img src="https://imgur.com/o0cSqNW.png" width="250">&nbsp;&nbsp;<img src="https://imgur.com/ekOcwZT.png" width="250">
</div>

---

- **Product detail and Cart**:

<div align="center" >
  <img src="https://imgur.com/IpvW79O.png" width="250">&nbsp;&nbsp;<img src="https://imgur.com/dS2wjLv.png" width="250">
</div>

- **Notifications**:

<div align="center" style="display: flex; justify-content: center">
  <div>
    <p>Foreground</p>
    <img src="https://imgur.com/n1gNdjx.png" width="250">
  </div>
  &nbsp;&nbsp;
  <div>
    <p>Background</p>
    <img src="https://imgur.com/JJBi41W.png" width="250">
  </div>
</div>

---

## Minimum Requirements

- Android Studio or Xcode
- Mobile device (optional)
- Expo(desktop)
- Expo Go(Mobile) opcional.
- Node.js
- React-Native
- Yarn(ou NPM)

---

## Technologies Used

This project was developed using the following technologies

- [Android Studio](https://developer.android.com/studio)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
- [Expo](https://expo.dev/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Dotenv](https://github.com/motdotla/dotenv#readme)
- [Native Base](https://nativebase.io/)
- [OneSignal](https://onesignal.com/)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
- [NodeJS](https://nodejs.org/en/)
- [React](https://react.dev/)
- [React-Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NPM](https://www.npmjs.com/)

---

## :package: How to Download and Run the Project

- Clone the project:

  ```bash
   git clone https://github.com/MateusAnderle/ignite-shoes
  ```

- Install the dependencies:
  - Execute the command below inside the project folder
  ```bash
    npm i
  ```
- Installation of the emulator [Android Studio](https://developer.android.com/studio) or [XCode](https://developer.apple.com/xcode/resources/) and the required technologies mentioned in <a href="#minimum-requirements">Requirements</a>

- Also, the installation/configuration of other technologies is necessary. Follow the steps indicated on this page according to your operating system: [Running a React-Native Application emulating Windows/Linux/MacOS or directly on Android/IOS mobile device](https://reactnative.dev/docs/environment-setup)
- Expo installation is necessary [Expo](https://expo.dev/)
- Execution - Open the project folder with an IDE (Vscode) or simply open the terminal in the project folder and run the command below

Before start the project on device, run (to create a build using expo plugins):

```bash
npx expo prebuild
```

For android:

```bash
npm run android
```

- Remember that if you are running it on an emulator, it is ideal to keep it open before applying the above commands.

---

## :balance_scale: License

This project is under the MIT license. See the [LICENSE](https://github.com/MateusAnderle/ignite-shoes/blob/main/LICENSE) for more information.

---

:rocket: Developed by Mateus Anderle da Silva [Get in touch!](https://www.linkedin.com/in/mateus-anderle-da-silva/)
