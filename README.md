# SuperConnect
Node js server for sharing files from android or ios to any (windows,linux,mac) device in wireless.

### How it works

Node js server will be hosted on to the network of the wifi or router which is connected to pc and mobile device, the sharing of the file will be using a post method from the phone.

### App spec

Android and ios app is made in React-native framework, app for android can be downloaded from releses and for ios user has to build and run the app in the local machince due to some errors
the app code can be viewd from releases.

### Setup for Pc

  1. Download or clone the code to your local machine using terminal or cmd 
    ``` git clone https://github.com/Milanjiji/SuperConnect.git ```
  2. Download and Install Node in the system
     `https://nodejs.org/en/download/prebuilt-installer`
  5. head into cloned repo
     ``` cd SuperConnect ```
  6. Install nessassary package using
     ```npm install```
  8. now run
     ```node app.js```
    to start the server.

### Setup for Mobile 

  1. Find the ip address of the pc
     For mac users run `ipconfig getifaddr en0` which will return a ip and use it in the input box of the app download from the releases.
     For Windows users  run `ipconfig` and look for the IPv4 Address under the network adapter you are using.
     For Linux users run `ip addr show`

     > Note: if the ip cannot be found try searching google for finding ip address of the type of machine you are using

  2. type the Ip address found before in the mobile device and click cheak connection. if it returns connection status good try to upload a file

### Location of the uploaded file

  Uploaded file from the phone will be under the uploads folder in the server dir which is SuperConnect

  > Note : The uploads folder may only create after the first upload is complete

### Features 
  1. Can send larger files.
  2. The ip of the pc will not change until there is a change or router or device which connect two device, so users can send and revice files without setting up the ip again and again
  3. Do not need to be connected all time , every time sharing a file it creates a connection and ends after the the uploading. the device will be connecting which sharing the files.
  4. Can be used for anytype of files for any type of pc
  5. Ther server is verylight and command line interface which takes very less amount of up and ram 

### Limitation

  1. Connot send any files from pc to mobile
  2. The Speed of the uploading will be between 5 - 13 Mb/s

--- Feel free to contribute ---

     

     
