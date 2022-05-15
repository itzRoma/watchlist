# Watchlist

Watchlist – is a very simple ***RESTful*** web-application. It runs with ***[Spring Boot](https://spring.io/projects/spring-boot)*** on the back-end and ***[React](https://reactjs.org/)*** on the front-end.

If you want to try it out, read the installation guide below.

## How to run

1. Clone this repository
2. Create mysql database 'watchlist' <sup>1</sup>
3. Check the corectness of username and password to your database in application.properties <sup>2</sup>
4. Open the folder where you cloned this repository in terminal
5. Run ` mvn spring-boot:run ` command <sup>3</sup>
6. Go into /frontend folder and run ` npm install && npm start ` command <sup>4</sup>
7. Now you can go to http://localhost:3000 and see the result

[1] If you want to give it a different name, you must also make change in scr/main/resources/application.properties in spring.datasource.url  
[2] File application.properties is located in scr/main/resources/  
[3] This will work only if you have Apache Maven installed. If you don't, go *[here](https://maven.apache.org/install.html)*  
[4] This will work only if you have node.js installed. If you don't, go *[here](https://nodejs.org/en/download/)*
