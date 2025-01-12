# News Aggregator API

This is a News Aggregator API that allows users to sign up, log in, manage their preferences, and fetch news articles based on their preferences.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd news-aggregator-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```
        JWT_SECRET=your_jwt_secret
        MONGO_URL=your_mongo_connection_string
        NEWS_API_KEY=your_news_api_key
        ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Authentication

- **Sign Up**
    - `POST /users/signup`
    - Request Body:
        ```json
        {
            "name": "Clark Kent",
            "email": "clark@superman.com",
            "password": "Krypt()n8",
            "preferences": ["movies", "comics"]
        }
        ```

- **Log In**
    - `POST /users/login`
    - Request Body:
        ```json
        {
            "email": "clark@superman.com",
            "password": "Krypt()n8"
        }
        ```

### User Preferences

- **Get Preferences**
    - `GET /users/preferences`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <token>"
        }
        ```

- **Update Preferences**
    - `PUT /users/preferences`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <token>"
        }
        ```
    - Request Body:
        ```json
        {
            "preferences": ["movies", "comics", "games"]
        }
        ```

### News

- **Get News**
    - `GET /news`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <token>"
        }
        ```
    - Query Parameters:
        - [query](http://_vscodecontentref_/1) (optional)
        - [dateStart](http://_vscodecontentref_/2) (optional)
        - [dateEnd](http://_vscodecontentref_/3) (optional)

## Running Tests

To run the tests, use the following command:
```sh
npm test