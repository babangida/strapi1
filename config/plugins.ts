export default () => ({});
module.exports = {
    'users-permissions': {
      config: {
        apiToken: {
          salt: process.env.API_TOKEN_SALT,  // Переменная окружения для соли токенов
        },
      },
    },
  };