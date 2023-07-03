#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <Wire.h>
#include "time.h"

// Provide the token generation process info.
#include <addons/TokenHelper.h>

// Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>

// Insert your network credentials
#define WIFI_SSID "Your WiFi Credentials"
#define WIFI_PASSWORD "Your WiFi password"

// Insert Firebase project API Key
#define API_KEY "Your Firebase Project API key"

// Insert Authorized Email and Corresponding Password
#define USER_EMAIL "Your EmaiL ID"
#define USER_PASSWORD "Your password"

// Insert RTDB URLefine the RTDB URL
#define DATABASE_URL "Your Realtime Database URL"

// Define Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Variable to save USER UID
String uid;
String message;

// Database main path (to be updated in setup with the user UID)
String databasePath;
String databasePath2;

// Database child nodes
String voltage1Path = "/voltage1";
String voltage2Path = "/voltage2";
String current1Path = "/current1";
String current2Path = "/current2";
String current3Path = "/current3";
String error1Path = "/error1";
String error2Path = "/error2";
String error3Path = "/error3";
String error4Path = "/error4";
String error5Path = "/error5";
String error6Path = "/error6";
String timePath = "/timestamp";
//String timerPath = "/timer";
String warning1Path = "/warning1";
String warning2Path = "/warning2";
String warning3Path = "/warning3";
String warning4Path = "/warning4";

// Parent Node (to be updated in every loop)
String parentPath;
String parentPath2;

int timestamp;
FirebaseJson json;

const char* ntpServer = "pool.ntp.org";

float distance;
float Voltage1;
float Voltage2;
float Current1;
float Current2;
float Current3;
float Error1;
float Error2;
float Error3;
float Error4;
float Error5;
float Error6;
//float Timer;
float Warning1;
float Warning2;
float Warning3;
float Warning4;

// Timer variables (send new readings every three minutes)
unsigned long sendDataPrevMillis = 0;
unsigned long timerDelay = 180000;

#define RXp2 3
#define TXp2 1

#define RXD0 
#define TXD0

#include <LiquidCrystal.h>

int acVolts = 0;
int dcVolts =0;
int current1_amp = 0;
int current2_amp = 0;
int current3_amp = 0;
bool error1 = false;
bool error2 = false;
bool error3 = false;
bool error4 = false;
bool error5 = false;
bool error6 = false;
//bool timer = false;
bool warning1 = false;
bool warning2 = false;
bool warning3 = false;
bool warning4 = false;
int receivedChecksum = 0;
int values[12];

LiquidCrystal lcd(18,5,17,16,4,0);
//LiquidCrystal lcd(22,23,5,18,19,21);

// Initialize WiFi
void initWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  lcd.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    lcd.print('.');
    delay(1000);
  }
  lcd.clear();
  lcd.println(WiFi.localIP());
  lcd.println();
}

// Function that gets current epoch time
unsigned long getTime() {
  time_t now;
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    //Serial.println("Failed to obtain time");
    return(0);
  }
  time(&now);
  return now;
}

void setup(){
  Serial.begin(115200);

  Serial2.begin(9600, SERIAL_8N1, RXp2, TXp2);

  // LCD Initialization:
      lcd.begin(16,2);
      lcd.clear();
      lcd.print("TELECOM");

      // go to row 1 column 0, note that this is indexed at 0
      lcd.setCursor(0,1); 
      lcd.print ("POWER SUPPLY");
      delay(3000);
  
  /*Serial.print("TELECOM");
  Serial.println("POWER SUPPLY");*/
  delay(3000);

  lcd.clear();
  initWiFi();
  configTime(0, 0, ntpServer);

  // Assign the api key (required)
  config.api_key = API_KEY;

  // Assign the user sign in credentials
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  // Assign the RTDB URL (required)
  config.database_url = DATABASE_URL;

  Firebase.reconnectWiFi(true);
  fbdo.setResponseSize(4096);

  // Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  // Assign the maximum retry of token generation
  config.max_token_generation_retry = 5;

  // Initialize the library with the Firebase authen and config
  Firebase.begin(&config, &auth);
  lcd.clear();

  // Getting the user UID might take a few seconds
  lcd.println("Getting User UID");
  while ((auth.token.uid) == "") {
    lcd.print('.');
    delay(1000);
  }
  // Print user UID
  uid = auth.token.uid.c_str();
  lcd.print("User UID: ");
  lcd.println(uid);

  // Update database path
  databasePath = "/UsersData/readings";
  databasePath2 = "/UsersData2/readings";
}

void loop(){
  lcd.clear();

  String inputString = ""; // initialize an empty string to store the incoming data
  while (Serial2.available()) 
  {
    char c = Serial2.read(); // read the incoming byte
    if(c == '$') 
    { // if the incoming byte is the start of the string
      inputString = ""; // clear the input string
    } 
    else if(c == '#') 
    { // if the incoming byte is the end of the string
                                                                   // split the string by commas
      int index = 0;
      while (index < 12) 
      {
        int commaIndex = inputString.indexOf(",");
        if (commaIndex == -1) 
        { // if there are no more commas, break the loop
          break;
        }
        String valueString = inputString.substring(0, commaIndex); // extract the value string
        values[index++] = valueString.toInt(); // convert the value string to integer and store it in the array
        inputString = inputString.substring(commaIndex + 1); // remove the value string and the comma from the input string
      }
      acVolts = values[0];
      dcVolts = values[1];
      current1_amp = values[2];
      current2_amp = values[3];
      current3_amp = values[4];
      error1 = values[5];
      error2 = values[6];
      error3 = values[7];
      error4 = values[8];
      error5 = values[9];
      error6 = values[10];
      warning1 = values[11];
      warning2 = values[12];
      warning3 = values[13];
      warning4 = values[14];
      //timer = values[15];
    } 
    else 
    { // if the incoming byte is part of the string
      inputString += c; // append the byte to the input string
    }
  }
  lcd.print("AC:");
  lcd.print(acVolts);
  lcd.print("V");
  lcd.print(" DC:");
  lcd.print(dcVolts);
  lcd.print("V");
  lcd.setCursor(0, 1);
  lcd.print("C1:");
  lcd.print(current1_amp);
  lcd.print("A");
  lcd.print(" C2:");
  lcd.print(current2_amp);
  lcd.print("A");
  lcd.print(" C3:");
  lcd.print(current3_amp);
  lcd.print("A");
  //delay(1000);

  /*Serial.println("AC:");
  Serial.print(acVolts);
  Serial.print("V");
  Serial.println(" DC:");
  Serial.print(dcVolts);
  Serial.print("V");
  Serial.println("C1:");
  Serial.print(current1_amp);
  Serial.print("A");
  Serial.println(" C2:");
  Serial.print(current2_amp);
  Serial.print("A");
  Serial.println(" C3:");
  Serial.print(current3_amp);
  Serial.print("A");*/
  
  /* Send new readings to database
  if (Firebase.ready() && (millis() - sendDataPrevMillis > timerDelay || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();*/

    //Get current timestamp
    timestamp = getTime();
    /*Serial.print ("time: ");
    Serial.println (timestamp);*/

    parentPath= databasePath + "/" + String(timestamp);
    parentPath2= databasePath2;

    json.set(voltage1Path.c_str(), String(acVolts));
    json.set(voltage2Path.c_str(), String(dcVolts));
    json.set(current1Path.c_str(), String(current1_amp));
    json.set(current2Path.c_str(), String(current2_amp));
    json.set(current3Path.c_str(), String(current3_amp));
    json.set(error1Path.c_str(), String(error1));
    json.set(error2Path.c_str(), String(error2));
    json.set(error3Path.c_str(), String(error3));
    json.set(error4Path.c_str(), String(error4));
    json.set(error5Path.c_str(), String(error5));
    json.set(error6Path.c_str(), String(error6));
    //json.set(timerPath.c_str(), String(timer));
    json.set(timePath, String(timestamp));
    json.set(warning1Path, String(warning1));
    json.set(warning2Path, String(warning2));
    json.set(warning3Path, String(warning3));
    json.set(warning4Path, String(warning4));
    Serial.printf("Set json... %s\n", Firebase.RTDB.setJSON(&fbdo, parentPath.c_str(), &json) ? "ok" : fbdo.errorReason().c_str());
    Serial.printf("Set json... %s\n", Firebase.RTDB.setJSON(&fbdo, parentPath2.c_str(), &json) ? "ok" : fbdo.errorReason().c_str());
  //}
  //Serial.println("Looping...");
}
