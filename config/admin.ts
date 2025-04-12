export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),  // Используем переменную окружения для JWT секрета
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),  // Используем переменную окружения для соли API токенов
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),  // Используем переменную окружения для соли токенов передачи данных
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),  // Флаг для NPS
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),  // Флаг для продвижения EE версии
  },
});