#### Install Node in your system if not installed yet
Follow the [link](https://nodejs.org/en/download/).

### Follow these steps
- Clone the project
- Create a file named `.env` inside server directory
- Set variable named `MONGODB_URL` and ask for the link
- Set `NODE_ENV`, `PORT` and `JWT_SECRET_KEY`

Your `.env` file will look like this
```
MONGODB_URL=MONGODB_LINK_FROM_STUDENT
NODE_ENV=development
PORT=3001
JWT_SECRET_KEY=JWT_SECRET_KEY
```

#### Run this command in the terminal to start the Server
```
npm install && npm start
```