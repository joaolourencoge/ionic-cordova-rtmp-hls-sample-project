# Ionic Cordova RTMP HLS Sample Project

This is a basic Ionic Cordova project that demonstrates how to integrate the `ionic-cordova-rtmp-hls` plugin into your app.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/ionic-cordova-rtmp-hls-sample-project.git
   ```

2. Change your current directory to the project folder:

   ```bash
   cd ionic-cordova-rtmp-hls-sample-project
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

4. Add the Android platform to your project (only if you plan to build for Android, you can replace Android by iOS):

   ```bash
   ionic cordova platform add android
   ```

5. Install the `ionic-cordova-rtmp-hls` plugin:

   ```bash
   ionic cordova plugin add ionic-cordova-rtmp-hls
   ```

## Building for Android (Replace Android by iOS)

If you want to build the sample project for Android, follow these steps:

1. Make sure you have Android Studio and the necessary SDK components installed.

2. Open a terminal in your project directory and run the following command to build the Android application:

   ```bash
   ionic cordova build android
   ```

## Running the App for Android 

You can run the app on an Android device or emulator using the following command:

```bash
ionic cordova run android
```

Please refer to the Ionic and Cordova documentation for more information on deploying your application on other platforms and devices.

## Running the App for iOS

```bash
ionic cordova build ios
```

Open .xcworkspace file and run the app on an iOS device or simulator using XCode

## License

This sample project is provided under the MIT License. Feel free to use it as a starting point for your own projects. Make sure to check the license of the `ionic-cordova-rtmp-hls` plugin for any usage restrictions.