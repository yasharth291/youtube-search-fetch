

### Project Goal

To make an API to fetch latest videos sorted in reverse chronological order of the publishing date-time from YouTube for a given search query in paginated response

### Basic Functionalities

- Cron Job to constantly fetch data in the background every minute
- GET API, `/api/search` for fetching videos supporting options like sorting, partial searching and pagination
- Search API which also supports searching for situations like `How to make a tea?` matched with `tea how`

### Development

1. Clone the project

`git clone https://github.com/yasharth291/Fampay-hiring-backend.git`

2. Copy [.env.example](https://github.com/yasharth291/Fampay-hiring-backend/blob/main/.sample.env) to .env

You will need a API_KEY key in order to run this app. Follow the instructions on [this page](https://developers.google.com/youtube/v3/getting-started) to get one.

> **Note:** 
> - You will need to provide values to all those variables that do not have a default
> - Fields that don't have a default value are _required_  
> - In case of multiple API keys, provide them as "," delimited list of keys like so:

```
API_KEY =<API_KEY1>,<API_KEY2>...
```

3. Install dependencies

`npm install`

4. Run

`npm start`

### Running with Docker 

When using Docker, 

1. Create a `.env` file using the instructions mentioned above
2. Install Docker and build an image using


```
$ docker build . -t <your username>/node-web-app
```
3. see the images:

```
$ docker images
```
4. run the image 
```
docker run -p 49160:8080 -d <your username>/node-web-app
```
5. Docker mapped the 8080 port inside of the container to the port 49160 on your machine in above example

6. you can hit port 49160

### Special Addition 
1. The search done in this project is NOT done with use of plugin.
2. Logging is added to keep a log of errors
3. MongoDb is used as the backend 
4. Multiple Key support is added

### Some Screenshots of Queries 

![image](https://github.com/yasharth291/Fampay-hiring-backend/blob/main/Screenshots/Screenshot%202022-07-13%20180745.jpg)

here we are searching Throw Cricket with one page of data which is 10 entries

![image2](https://github.com/yasharth291/Fampay-hiring-backend/blob/main/Screenshots/Screenshot%202022-07-13%20181115.jpg)
this is how the data is stored here
