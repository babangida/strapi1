export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Убедитесь, что переменная окружения APP_KEYS настроена правильно
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
});