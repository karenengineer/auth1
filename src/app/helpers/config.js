if (process.env.NODE_ENV === 'test') {
    require('dotenv').load({ path: '.env.test' });
} else if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load(); 
}

import env from 'env-var';

export const databaseUrl = env.get('DATABASE_URL').asString();
export const dbUsername = env.get('BEE_WEB_DB_USERNAME').asString();
export const dbPassword = env.get('BEE_WEB_PASSWORD').asString();
export const dbDatabase = env.get('BEE_WEB_DATABASE').asString();
export const dbHost = env.get('BEE_WEB_HOST').asString();
export const beeWebApiUrl = env.get('BEE_WEB_BEE_API_URL').asString();

export const apiURL = env.get('BEE_WEB_API_URL').asString();
export const port = env.get('PORT').asInt();
// export const tokenSecret = env.get('BEE_WEB_TOKEN_SECRET').required()
    // .asString();
// export const refreshSecret = env.get('BEE_WEB_REFRESH_SECRET').required()
//     .asString();