<p align="center"><a href="https://laravel.com" target="_blank"><img src="public/assets/logo.png" width="100" alt="NewsApp Logo"></a></p>

## About NewsApp

A news portal app called NewsApp is developed using Laravel framework, using PHP as the backend and React as the frontend programming languages. Tailwind CSS is used to design the web pages, also InertiaJS is used as an adapter for the frontend and backend integration. Here is a list of some features offered by NewsApp:

- User authentication and registration.
- Article search and filtering.
- Personalized news feed.
- Responsive design.
- Customizable news soruce.( Default: NewsAPI )

## Project Setup
NewsApp is built on the Laravel Framework, as we all know. One of its significant features is containerization. NewsApp is thus dockerized to make project setup and development easier. You can setup it on your own machine by following the steps listed below.

 - Clone the project from [master branch]("https://github.com/hariupreti/news-app/tree/master") 
 - Copy .env.example to .env

```php
   //Make sure to update following env key on .env file
   NEWSAPIKEY="NewsAPI_API_key" //https://newsapi.org
   THEGUARDIAN_API_KEY="The_Guardian_news_API_key" //https://open-platform.theguardian.com/
   THENEWYORKTIME_API_KEY="The_New_York_API_key" //https://developer.nytimes.com
```

Run docker command below:
```php
   //Install required dependencies, select one database service pgsql,mysql..
   docker run --rm -u "$(id -u):$(id -g)" -v $(pwd):/opt -w /opt
   laravelsail
   php81-composer:latest
   composer install
   php artisan sail:install

   docker-compose build //build newsapp image on local machine

   docker-compose up //run project on docker
      or
   docker-compose up -d //run on detach mode
      or
   docker-compose down //stop running project
 ```

 Once the docker process completed there are still few steps remaining to do:

 ```php
    //Login into app service
    docker exec -it news-app-laravel.test-1 /bin/bash

    //Generate an application key
    php artisan key:generate

    //Create storage simlink
    php artisan storage:link

    //Create storage simlink
    php artisan migrate:fresh --seed

    //install npm packages
    npm install

    //build js modules
    npm run build //production build
         or
    npm run dev //development mode
 ```
### Browse NewsApp
If you able to run project successfully, you will get NewsApp running on port 80 on [localhost](http://localhost).
## Security Vulnerabilities

If you discover a security vulnerability within NewsApp, please send an e-mail to Hari Upreti via [hariupreti679@gmail.com](mailto:hariupreti679@gmail.com). All security vulnerabilities will be promptly addressed.

## License

The NewsApp is a open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
