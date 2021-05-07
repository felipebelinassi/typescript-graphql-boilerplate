import getConfig from './config';
import configSchema from './schema';

const config = getConfig(configSchema, process.env);

export default config;
