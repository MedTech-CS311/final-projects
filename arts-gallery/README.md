# Art Gallery

Full-stack application to save paintings into a gallery by uploading them and saving them into a database.

## Tech Stack

**Client:** React

**Server:** Node, Express, MongoDB, Cloudinary, Multer

## API Reference

#### Get all paintings

```http
  GET /api/v1/paintings
```

#### Get ONE painting

```http
  GET /api/v1/paintings/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `ObjectID` | **Required**. Id of painting to fetch |



#### Create painting

```http
  POST /api/v1/paintings
```

#### Update painting

```http
  GET /api/v1/paintings/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `ObjectID` | **Required**. Id of painting to update |

#### Delete painting

```http
  GET /api/paintings/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `ObjectID` | **Required**. Id of painting to delete |

## Installation

Clone the project into your local machine

```bash
  git clone https://github.com/WaelChettaoui/art-gallery.git
  cd art-gallery
```
⚠ BEFORE RUNNING THE PROJECT, YOU MUST CONFIGURE YOUR .env FILE ⚠

Switch into the server folder and install the dependencies

```bash
  cd server
  npm i
```

Switch into the client folder and install the dependencies

```bash
  cd ../client
  npm i
```

Run the project
```bash
  cd ..
  npm run dev
```

## Authors

- [@mohamedazizkallel](https://github.com/mohamedazizkallel)
- [@sfareya](https://github.com/sfareya)
- [@WaelChettaoui](https://github.com/WaelChettaoui)
