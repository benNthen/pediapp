# Recipe App

A mobile app that allows the user to browser through a category of recipes from a sample cookbook. Each category will display some recipes along with the approximate  leves of difficulty, duration to prepare and the price. When a recipe is pressed, the user is taken to a page that displays the ingredients and steps to prepare.

## Using this repository

You can run the app on your local computer and/or by connecting your mobile phone. 
For more information on how to run a React Native app, [go here](https://reactnative.dev/docs/environment-setup).

The following pre-requisites are listed below.
## Pre-requisites:

To use this repository you need the following:
 - Windows 10 / macOS 10  or higher
 - Visual Studio Code
 One of the following
 - [Android Studio](https://developer.android.com/studio)
 - Android or iOS phone
 
 In addition, these packages need to be installed before the app can be run locally:
 - [npm - a JavaScript package manager](https://www.npmjs.com/package/npm)
 - [Node Js](https://nodejs.org/en/)
 - [React JS](https://reactjs.org/)
 - [React Native](https://reactnative.dev/)
 - [Expo CLI](https://docs.expo.dev/bare/installing-expo-modules/)
 
 ## How to download this repository:

Clone this repository by copying its HTTPS code and using the git command: https://github.com/benNthen/recipeapp.git

## How to Run this App in your own phone:

Download the Expo CLI on Play Store(Android only) or App Store(iOS only).

Open VSCode or the command line. Then cd into the working directory of where this repository was downloaded into.

Run this command: `npm start`. Wait until it has finished loading and QR Code has been displayed on the command line.

Open the Camera app on your mobile phone and scan the QR Code displayed on your computer screen's command line.

Expo Go will load and open the app on your phone.
 
 ## How to Run this app on your own computer:
 
 Follow the documentation [here](https://developer.android.com/studio/intro/update#sdk-manager) in order to create a mobile emulator / virtual environment through Android Studio's AVD Manager.
 
 Open the command line and type ` C:\Users\<your-user-name-here>\AppData\Local\Android\Sdk\emulator)`
 
 Then type `emulator -list-avds`. Copy-paste the emulator name of your choice (that you set-up in Android Studio's AVD Manager).
 
 Now enter `emulator -avd <paste-emulator-name-here>`. Then wait for the emulator to start-up.
 
 Open the app's project folder in Visual Studio Code and type in the command terminal `npx react-native run-android`.
 
 ## How to Use This App:
 
 Scroll across the 'All Categories' page and select your desired cuisine. 
 
 You will be taken to a second page containing a list of recipes. 
 
 Select the recipe of your choice to be taken to a third page that displays the recipe of your choice along with a list of ingredients and the steps to prepare the meal.