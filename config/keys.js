const mongo = process.env.MONGO_URL;
const port = process.env.MONOG_PORT;
module.exports = {
  mongoURI: `mongodb://${mongo}:${port}/chat-app`,
  secretOrKey: "secret",
};
