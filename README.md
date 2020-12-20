# **Dota2 Analysis Software Process 2020**

## **Description**
<p> This application provides a data of all heroes in Dota2. Have a feature to compare hero Winrate, Pickrate, Basic Status and also provide line graph for easy to understand. The Main feature of this application is match analysis that using matches data to analyse the hero timing (early-game,mid-game,late-game) we also provide pie graph for match analysis to make it easy understanding. </p>

---
## **Prerequisites**
- [Node.js](https://nodejs.org/en/)  (ver. 12 or newer) 
- [MongoDB](https://www.mongodb.com/1)
- [Docker](https://www.docker.com/)
    


## **Setup Docker Images**
### Docker Frontend
```
1. Go to directory frontend/dota2_guide_react/
```
```
2. docker build -t <your name>/react-frontend
```

### Docker Backend
```
1. Go to directory api/dota2/
```
```
2. docker build -t <your name>/node-backend
```

## **Running On Local**
### **Frontend**
```
1. Go to directory frontend/dota2_guide_react
```
```
2. npm install
```
```
3. npm start
```
### The website will run on http://localhost:3000/

### **Backend**
```
1. Go to directory api/dota2
```
```
2. npm install
```
```
3. npm start
```
### The api will run on http://localhost:1337/

## Group Member
* 6110545449	Jitta Koopratoomsiri
* 6110545538	Thanida Jongarnon
* 6110545651	Supakorn Tangpremsri
* 6110545694	Anant Arayanant
* 6110546631	Wikrom Chanthakhun
