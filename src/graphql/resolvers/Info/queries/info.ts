import { Resolver, Query } from 'type-graphql';
import AppInfo from '../types/objects/Info';

@Resolver()
class InfoResolver {
  @Query(() => AppInfo, { description: 'API info' })
  info(): AppInfo {
    return {
      port: Number(process.env.PORT),
      healthy: true,
    };
  }
}

export default InfoResolver;
