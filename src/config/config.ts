import Joi from 'joi';

const loadConfig = (schema: Joi.ObjectSchema, envs: NodeJS.ProcessEnv) => {
  const { error, value: envVars } = schema.validate(envs, {
    abortEarly: true,
  });

  if (error) {
    throw new Error(`Environment variables validation error: ${error.message}`);
  }

  return {
    port: envVars.PORT,
    database: {
      type: 'postgres',
      host: envVars.DB_HOST,
      port: envVars.DB_PORT,
      username: envVars.DB_USER,
      password: envVars.DB_PASSWORD,
      database: envVars.DB_NAME,
    },
  };
};

export default loadConfig;
