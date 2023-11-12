# Project Title

EForm - React Native App (TypeScript)

## Description

The EForm is a mobile application built with React Native and TypeScript that allows users to record and manage information about emergency services. It aims to simplify and expedite the process of collecting necessary information during emergencies. With this app, users can quickly generate and save a [record of the assessment of the person's state of health](https://www.sevt.sk/zaznam-o-zhodnoteni-zdravotneho-stavu-osoby.html) with the required information on their mobile devices, and download the filled form in JSON format.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)
-   [Authors](#authors)
-   [Acknowledgments](#acknowledgments)

## Installation

To install and run the Emergency Form Filler app, follow these steps:

1. Clone the repository: `git clone https://github.com/Skvesh/EForm.git`
2. Navigate to the project directory: `cd EForm`
3. Install dependencies: `npm install`
4. Connect your mobile device or start an emulator.
5. Start the Metro server: `npx react-native start`
6. Build and run the app on your device/emulator: `npx react-native run-android` (for Android) or `npx react-native run-ios` (for iOS)
    > **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Usage

Once the app is installed and running on your device, you can use it to generate and fill out emergency contact forms. Here's how it works:

1. Launch the app on your device.
2. Add new form to the list by clicking the button create.
3. Fill out the required information in each screen, such as name, address, contact number, etc.
4. Use gestures to navigate between screens. For example, swipe left or right to switch between different sections.
5. View, edit, or delete existing forms from the list.
6. The app utilizes MobX for state management, ensuring efficient and reliable data handling.
7. React Navigation with gesture-based navigation provides a seamless and intuitive user experience.

## Contributing

Contributions are welcome! If you'd like to contribute to the Emergency Form Filler app, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors

-   Adian Gokhateev ([@Skvesh](https://github.com/Skvesh))

## Acknowledgments

-   The creators of React Native for providing a powerful framework for building native mobile apps.
-   The React Navigation library for simplifying navigation in React Native apps.
-   MobX for providing an intuitive and efficient state management solution.
-   The TypeScript team for developing a strongly typed superset of JavaScript.
-   The open-source community for their valuable contributions and inspiration.
