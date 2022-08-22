const express = require('express');
const router = express.Router();
const {
    join_User,
    get_Current_User,
    user_Disconnect,
    get_Users_in_Room
  } = require("../../utils/socketUtil");

router.post('/', (req, res) => {
    const {roomId} = req.body
    res.send(get_Users_in_Room(roomId) || []);  
}
);

module.exports = router;