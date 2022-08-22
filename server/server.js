const express = require('express');
const app = express();

const http = require("http")
const { Server } = require("socket.io");
const server = http.createServer(app);

const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const PORT = process.env.PORT || 3000;

// custom middleware logger
if (process.env.NODE_ENV === 'production') {
  app.use(logger);
}
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// public routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/userData'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use('/api/v1/feedback', require('./routes/api/feedback'));
app.use('/api/v1/run', require('./routes/api/run'));
app.use('/api/v1/contest-watcher', require('./routes/api/contestWatcher'));
app.use('/api/v1/snippet', require('./routes/api/snippetHandler'));
app.use('/api/v1/get-random-name', require('./routes/api/randomName'))
app.use('/api/v1/room', require('./routes/api/roomApiHandler'))

// protected routes
app.use(verifyJWT);
app.use('/api/v1/problemset', require('./routes/api/problemHandler'));

app.get('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ "error": "404 Not Found" });
  } else {
    res.type('txt').send("404 Not Found");
  }
});
if (process.env.NODE_ENV === 'production') {
  app.use(errorHandler);
}

const mongoose = require('./config/MongoConnect');
server.listen(PORT, (res, err) => {
  if (err) {
    console.log(`[NODE-APP] : Server failed - ${err}`);
    return;
  }
  console.log(`[NODE-APP] : Server running - Port ${PORT}`)
});

const io = new Server(server,
  {
    cors: {
      origin: "*",
      methods: ["GET,POST,PUT,DELETE"],
    },
  }
)



const {
  join_User,
  user_Disconnect,
  get_Users_in_Room
} = require("./utils/socketUtil");

io.on("connection", (socket) => {

  socket.on("createRoom", ({ username, roomId }) => {
    // console.log("createRoom", username, roomId);

    const user = join_User(socket.id, username, roomId);
    socket.join(roomId);
    socket.to(roomId).emit("userCount", get_Users_in_Room(roomId));

  });

  socket.on('joinRoom', ({ username, roomId }) => {
    // console.log("joinRoom", username, roomId);
    const user = join_User(socket.id, username, roomId);
    socket.join(roomId);

    socket.to(roomId).emit("CurrentRoomUsers", get_Users_in_Room(roomId));
  });


  socket.on("editorConfigChange", ({ roomId, config }) => {
    // console.log("editorConfigChange", roomId, config);
    socket.to(roomId).emit("editorConfigChange", config);

  });

  socket.on('removeUser', () => {
    // console.log("removeUser");
    const user = user_Disconnect(socket.id);
    if (user) {
      socket.leave(user.roomId);
      socket.to(user.roomId).emit("userCount", get_Users_in_Room(user.roomId));
    }
  })

  socket.on("disconnect", () => {
    // console.log("User disconnected");

    const user = user_Disconnect(socket.id);
    if (user) {
      socket.leave(user.roomId);
      socket.to(user.roomId).emit("CurrentRoomUsers", get_Users_in_Room(user.roomId));

    }

  });

});