import { v4 as uuid } from "uuid";
let users = [];

export const getUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send("User Added Successfully");
};