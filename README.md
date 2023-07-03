
# IOT Enabled Remote Monitoring Web Application for Telecom SMPS

This project aims to create a remote monitoring web application for Telecom SMPS (Switched Mode Power Supply) using the ESP32 microcontroller for WiFi communication and uploading data to Firebase. The data collected from the SMPS will be displayed on a web dashboard developed using React.


## Project Overview
The rapid growth of the telecommunications industry has led to an increased demand for efficient and reliable power supply systems. Telecom networks heavily rely on Switched Mode Power Supplies (SMPS) to ensure a stable and uninterrupted power source for their operations. However, the traditional approach of monitoring and managing these power supplies often involves manual inspections, which are time consuming, prone to human errors, and can lead to significant downtime in the event of failures or malfunctions. To overcome these challenges, there is a growing interest in implementing Internet of Things (IoT) technologies to enable remote monitoring and management of telecom SMPS. IoT offers a promising solution by leveraging the power of interconnected devices and sensors to collect and analyze real-time data, enabling proactive monitoring, fault detection, and predictive maintenance. This project allows for remote monitoring of multiple SMPS units through a web application. The ESP32 microcontroller is used to establish a WiFi connection with the SMPS units and collect data such as voltage, current, and temperature. This data is then uploaded to Firebase for storage and retrieval. The web dashboard, built using React, fetches the data from Firebase and presents it in a user-friendly format, providing real-time monitoring and analytics of the SMPS units.

## Features

- Real-time monitoring of multiple Telecom SMPS units
- Remote data collection from SMPS units using ESP32
- Data upload and storage on Firebase
- Web dashboard for visualization and analytics
- Intuitive user interface with charts and graphs
- Historical data retrieval and analysis
- Alert notifications for critical SMPS conditions


## Hardware Requirements

- ESP32 microcontroller board
- Telecom SMPS units (compatible with ESP32)
- WiFi network for communication
- Sensors (e.g., voltage, current, temperature sensors) for data collection
## Software Requirements

- Arduino IDE or compatible IDE for programming ESP32
- Node.js and npm for React development
- Firebase account for data storage
- React libraries for web dashboard development (e.g., React Router, React Redux, Chart.js)
## Setup Instructions

1. Clone this repository to your local machine.
2. Connect the ESP32 board to your computer and open the Arduino IDE.
3. Install the required ESP32 libraries in the Arduino IDE.
4. Open the ESP32 code from the repository (esp32_code.ino) in the Arduino IDE.
5. Modify the code to configure your WiFi credentials and Firebase database information.
6. Upload the code to the ESP32 board.
7. Set up a Firebase account and create a new project.
8. Configure the Firebase Realtime Database and Authentication rules according to your requirements.
9. Install Node.js and npm on your computer if not already installed.
10. Open the web_dashboard folder in a code editor.
11. Run npm install to install the necessary dependencies.
12. Configure the Firebase credentials in the React application.
13. Run npm start to start the React development server.
14. Access the web dashboard in your browser at the specified URL.
## Usage

1. Ensure that the ESP32 board is connected to the SMPS units and powered on.
2. The ESP32 will establish a WiFi connection and start collecting data from the SMPS units.
3. The data will be uploaded to the Firebase Realtime Database for storage.
4. Open the web dashboard in your browser to view the collected data.
5. The dashboard will display real-time data, historical trends, and analytics of the SMPS units.
6. You can interact with the dashboard to visualize specific data and configure alert notifications.
## Images

![dashboard1](https://github.com/superuser-parth/Remote_Sensing_HMI/blob/main/Images/dashboard1.jpg)

![dashboard2](https://github.com/superuser-parth/Remote_Sensing_HMI/blob/main/Images/dashboard2.jpg)

![dashboard3](https://github.com/superuser-parth/Remote_Sensing_HMI/blob/main/Images/dashboard3.jpg)

![dashboard4](https://github.com/superuser-parth/Remote_Sensing_HMI/blob/main/Images/dashboard4.jpg)

## Acknowledgements

Special thanks to the contributors and open-source projects that have inspired and provided valuable resources for this project. Also we would like to thank Prathamesh Shelar (prathamesh.shelar@spit.ac.in), Prabhat Kumar (prabhat.kumar@spit.ac.in) and Varun Kamath (varun.kamath@spit.ac.in) for guiding us throughout the project.

## Feedback

If you have any feedback, please reach out to us at:

saurabhhagawane718@gmail.com
bhavesh.jadhav@spit.ac.in
yogaonkar@gmail.com


## Contributors

[Saurabh Hagawane](https://github.com/Saurabhh-37)

[Parth Yogaonkar](https://github.com/superuser-parth)

[Bhavesh Jadhav](https://github.com/lunaticfringe18)
