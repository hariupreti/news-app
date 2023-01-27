<p align="center"><a href="https://laravel.com" target="_blank"><img src="public/assets/logo.png" width="100" alt="NewsApp Logo"></a></p>

## About NewsApp

A news portal app called NewsApp is developed using Laravel framework, using PHP as the backend and React as the frontend programming languages. Tailwind CSS is used to design the web pages, also InertiaJS is used as an adapter for the frontend and backend integration. Here is a list of some features offered by NewsApp:

- User authentication and registration.
- Article search and filtering.
- Personalized news feed.
- Responsive design.

## Project Setup
NewsApp is built on the Laravel Framework, as we all know. One of its significant features is containerization. NewsApp is thus dockerized to make project setup and development easier. You can setup it on your own machine by following the steps listed below.

 - Clone the project from main branch
 - Copy .env.example to .env

 ```php
    docker-compose up --build //to build NewsApp's docker image on local machine
    docker-compose up -d //run project on detached mode
        or
    docker-compose down //stop running project
 ```

 Once the docker process completed there are still few steps remaining to do:

 ```php
    //Enter on running dokcer newsapp server using below command
    docker exec -it news-app-laravel.test-1 /bin/bash
    //Generate an application key
    php artisan key:generate

    //Create storage simlink
    php artisan storage:link
 ```

 Note: If you face any kind of directory permission issue inside storage folder, Please provide respective permission.

## Security Vulnerabilities

If you discover a security vulnerability within NewsApp, please send an e-mail to Hari Upreti via [hariupreti679@gmail.com](mailto:hariupreti679@gmail.com). All security vulnerabilities will be promptly addressed.

## License

The NewsApp is a open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
