import data from "../data";
import User from "../models/usersModel";
const seedUsers = async (req, res, next) => {
  try {
    // deleting all users
    await User.deleteMany({});
    // inserting user
    const user = await User.insertMany(data.users);
    // response back success
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUsers };
