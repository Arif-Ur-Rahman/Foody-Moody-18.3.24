import User from "../models/usersModel.js"; // Ensure correct relative path and .js extension

const seedUsers = async (req, res, next) => {
  try {
    // Deleting all users
    await User.deleteMany({});
    // Inserting users
    const users = await User.insertMany(data.users);
    // Respond with the inserted users
    return res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

export { seedUsers }; // Use ES module export syntax
