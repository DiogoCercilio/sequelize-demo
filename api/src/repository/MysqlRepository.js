const env = process.env;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql',
  port: env.DB_PORT
});

(async()=> await sequelize
    .authenticate()
    .then(()=> console.log('Connection has been established successfully.'))
    .catch((err)=> console.log('Unable to connect to the database:', err))
)();

module.exports = sequelize;