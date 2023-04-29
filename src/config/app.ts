const { APP_NAME, DEVELOPMENT, PORT, ROUTE_PREFIX, JWT_TOKEN_KEY } = process.env;

export default {
    name: APP_NAME,
    port: PORT || 3000,
    development: DEVELOPMENT,
    routePrefix: ROUTE_PREFIX || '',
    jwtTokenKey: JWT_TOKEN_KEY || 'nDvHW2xY@LqGF&3wIZC4hjcAUtBurPg*eaE!+kms6Vb5RN()d7X^T9Jf8%Kzp#$Q'
};
