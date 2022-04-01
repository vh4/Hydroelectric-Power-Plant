#include <SimpleTimer.h>
#include <ESP8266WiFi.h>
#include "FirebaseESP8266.h"  // Install Firebase ESP8266 library
#include <time.h>

const int ldrPin = A0;
SimpleTimer timer;
float Data = 0;
int SENSOR_NILAI = 0;
int dst =0;
int timezone = 7 * 3600;
String tanggal;

//firebase defire
#define FIREBASE_HOST "https://data-11f25-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_AUTH "UWBqExMmuZUagQU7adVTevC4vdocSGH3c1rgb9WN"
FirebaseData firebase_data;

void setup() {

Serial.begin(9600);

WiFi.begin("wifi_hacker", "");
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());

  pinMode(ldrPin, INPUT); 
  timer.setInterval(400, repeatMe);
  timer.setInterval(3600000, save);

  //setup firebase App
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  configTime(timezone, dst, "pool.ntp.org","time.nist.gov");
  while(!time(nullptr)){
      Serial.print("*");
    }
}

void repeatMe() {
  
    int ldrStatus = analogRead(ldrPin);
    Firebase.setFloat(firebase_data, "/kwh_meter/logger", ldrStatus);
    Serial.print("LDR SENSOR VALUE : ");
    Serial.print(ldrStatus);
    Serial.println(" ");
    delay(500);

    if(ldrStatus > 10){
      Data         = Data + 0.000625;
    }

    Serial.print("DATA PEMAKAIAN KWH PER-JAM: ");
    
    Serial.print(Data);
    Firebase.setFloat(firebase_data, "/kwh_meter/kwh_realtime", Data);
    Serial.print(" ");
    time_t now = time(nullptr);
    struct tm* p_tm = localtime(&now);
    //tanggal = String(p_tm->tm_year + 1900) + "-" + String(p_tm->tm_mon + 1) + "-" + String(p_tm->tm_mday) + " " + String(p_tm->tm_hour)+ ":" + String(p_tm->tm_min) + ":" + String(p_tm->tm_sec);
    //Serial.print(tanggal);
    Serial.println(" ");
}

void save(){
    time_t now = time(nullptr);
    struct tm* p_tm = localtime(&now);
    tanggal = String(p_tm->tm_year + 1900) + "-" + String(p_tm->tm_mon + 1) + "-" + String(p_tm->tm_mday) + " " + String(p_tm->tm_hour)+ ":" + String(p_tm->tm_min) + ":" + String(p_tm->tm_sec);
    Firebase.pushFloat(firebase_data, "/kwh_meter/kwh_perjam", Data);
    Firebase.pushString(firebase_data, "/kwh_meter/tanggal", tanggal);
    Data = 0;
}

void loop() {
  timer.run();
}
