declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development";
            PORT?: number;
            MYSQL_USERNAME: string;
            MYSQL_PASSWORD: string;
            MYSQL_DATABASE: string;
            MYSQL_HOSTNAME: string;
            SECRET_KEY: string;
        }
    }
}

export {};
