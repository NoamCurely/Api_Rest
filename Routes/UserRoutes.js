const {
    signup,
    sigin,
    ReadUser,
    ReadOne,
    editUser,
    deleteUser
} = require("../Controller/UserController");
const Verify = require("../Middleware/SignupUser");

module.exports = function(app) {

    //route register for signup and check email if exist
    app.post("/api/register/", [Verify.checkUsemail], signup);
    
    //route for login create user and token
    app.post("/api/login/", sigin);
    
    //route for read All user
    app.get("/api/read", ReadUser);
    
    //route for read One user
    app.post("/api/user", ReadOne);
    
    //route edit user sins password
    app.put("/api/edit/:id", editUser);
    
    //route for delete user
    app.delete("/api/delete/:id", deleteUser);
}

