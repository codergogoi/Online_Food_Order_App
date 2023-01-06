# Steps to run the Backend API

As you all know Heroku has stoped free service for running the nodejs app for free. So as a solution for backend API, I have created a docker image to support the tutorial series. Kindly follow the below steps to run the server on your local machine and change the base URL to the below in your mobile app configuration to call APIs.

## Install Docker desktop into you machine & run

Install Docker Desktop [https://www.docker.com/products/docker-desktop/]

Download the backend directory to your machine and go to your terminal and get inside the directory to run the docker image.

`$ cd backend`

Now run the docker compose file to spin APIs in your local machine

`$backend  docker-compose up -d`

The above command will start the backend api by default running on http://localhost:8888 This is your base URL that is need to replace instead of Heroku URL.

# Import API endpoints

I have attached the postman collection for the app tutorial series. All the demonstrate endpoints will work as describe on video.

Just a side note: If you did not find the precise api look for v1 inside the collection.

Hope the above will support to continue this tutorial series.
