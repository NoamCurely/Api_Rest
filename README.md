
# Développeur Web Full Stack API REST


## Installation

Install my-project with npm

```bash

CREATE DATABASE cloud;

1  touch .env

Username, password and Database mysql

USER =  name
PASSWORD =  password
DB =  database_name

SECRET_KEY = yJpZCI6MSwiaWF0IjoxNjYxMDE4NzMzLCJleHAiOjE2NjExMDUxMzN9
REFRESH_TOKEN_SECRET = 825y8i3hnfjmsbv7gwajbl7fobqrjfvbs7gbfj2q3bgh8f42

2 npm install
3 nodemon server.js
```
    
## API Reference

#### POST Register

```http
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Création d'un compte** |
|  `lastname` | `string` |
| `email`     | `string` |
| `password`  | `string` |
| `role`      | `string` | 


#### POST Login

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Connexion** |
| `password`   | `string`

#### GET All User

```http
  GET /api/read
```

| Parameter result | Type     | Description         |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Data result** |
|  `lastname` | `string` |
| `email`     | `string` |
| `password`  | `string` |
| `role`      | `string` |

### Example result:

```
 "user": [
        {
            "id": 2,
            "firstname": "John",
            "lastname": "Doe",
            "email": "test@gmail.com",
            "role": "admin",
            "createdAt": "2023-10-19T16:13:38.000Z",
            "updatedAt": "2023-10-19T16:13:38.000Z"
        }
    ]
```
#### POST One User

```http
  POST /api/user
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------------- |
| `email`     | `string` | **require for search user**|

### Example result:

```
 "user": [
        {
            "id": 2,
            "firstname": "John",
            "lastname": "Doe",
            "email": "test@gmail.com",
            "role": "admin",
            "createdAt": "2023-10-19T16:13:38.000Z",
            "updatedAt": "2023-10-19T16:13:38.000Z"
        }
    ]
```
#### PUT One User

```http
  PUT /api/edit/:id
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Data require** |
|  `lastname` | `string` | **Data require** |
| `email`     | `string` | **Data require** |
| `role`      | `string` | **Data require** |

#### DELETE One User

```http
  DELETE /api/delete/:id
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Data require** |
