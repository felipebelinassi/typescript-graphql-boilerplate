import joi from 'joi';

export default joi
  .object({
    PORT: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.string().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_NAME: joi.string().required(),
  })
  .unknown();
