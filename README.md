# **Dota2 Analysis Software Process 2020**

## **Description**


## **Prerequisite**
    1.Node.js (ver.12 or newer)



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
docker build -t <your name>/node-backend
```

## **Running On Local**
### **Frontend**
```
Go to directory frontend/dota2_guide_react
```
```
npm install
```
```
npm start
```
The website will run on http://localhost:3000/

### **Backend**
```
Go to directory api/dota2
```
```
npm install
```
```
npm start
```
The api will run on http://localhost:1337/