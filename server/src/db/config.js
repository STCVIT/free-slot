module.exports = {
    development: {
        postgres : {
                host: 'localhost',
                port: process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                dialect: 'postgres',
                logging: false
        }
    },
    production: {
        postgres: {
            connectionString: process.env.DATABASE_URL,
            dialect: 'postgres'
        }
    }
}