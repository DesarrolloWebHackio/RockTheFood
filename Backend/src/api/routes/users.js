const { register, verifyAccount, login } = require("../controllers/users");

const usersRouter = require("express").Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/verify/:id", verifyAccount, login);

module.exports = usersRouter;
