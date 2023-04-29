const { JWT_TOKEN_KEY, JWT_EXPIRES_IN } = process.env;

export default {
    tokenKey: JWT_TOKEN_KEY || 'nDvHW2xY@LqGF&3wIZC4hjcAUtBurPg*eaE!+kms6Vb5RN()d7X^T9Jf8%Kzp#$Q',
    expiresIn: JWT_EXPIRES_IN || '1h',
};