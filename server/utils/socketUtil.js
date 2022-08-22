const c_users = [];

// joins the user to the specific chatroom
function join_User(id, username, roomId) {
    const p_user = { id, username, roomId };

    c_users.push(p_user);
    //   console.log(c_users, "users");

    return p_user;
}


// Gets a particular user id to return the current user
function get_Current_User(id) {
    return c_users.find((p_user) => p_user.id === id);
}

// Gets all users in a particular room
function get_Users_in_Room(roomId) {
    return c_users.filter((p_user) => p_user.roomId === roomId);
}


// called when the user leaves the chat and its user object deleted from array
function user_Disconnect(id) {
    const index = c_users.findIndex((p_user) => p_user.id === id);

    if (index !== -1) {
        return c_users.splice(index, 1)[0];
    }
}

module.exports = {
    join_User,
    get_Current_User,
    user_Disconnect,
    get_Users_in_Room
};