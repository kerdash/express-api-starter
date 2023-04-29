const { DEFAULT_LOCALE } = process.env;

export default {
    locales: ['en', 'ar'],
    defaultLocale: DEFAULT_LOCALE || 'en',
    directory : '/locales'
};


