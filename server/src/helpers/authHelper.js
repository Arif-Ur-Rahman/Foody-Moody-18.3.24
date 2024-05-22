import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw new Error("Error hashing password");
  }
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export { hashPassword, comparePassword };
