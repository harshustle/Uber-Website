const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
  socketId = null,
 ...rest
}) => {
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullName: { firstName, lastName },
    email,
    password,
    socketId
  });
  return user;
};
