import { apiURL, beeWebApiUrl, port, refreshSecret, tokenSecret } from "../helpers/config";

const params = {
    development: {
        apiUrl: apiURL,
        apiPort: port,
        tokenSecret: tokenSecret,
        refreshSecret: refreshSecret,
        beeWebApiUrl: beeWebApiUrl
    },
    production: {
        apiUrl: apiURL,
        apiPort: port,
        tokenSecret: tokenSecret,
        refreshSecret: refreshSecret,
        beeWebApiUrl: beeWebApiUrl
    },
    test: {
        apiUrl: apiURL,
        apiPort: port,
        appUrl: 'http://localhost:3000',
        tokenSecret: tokenSecret,
        refreshSecret: refreshSecret,
        beeWebApiUrl: beeWebApiUrl
    }
};

export default params[process.env.NODE_ENV || 'development'];
