import { environnement } from './../config/environnement';
import mongoose from "mongoose";

function connect() {
    return mongoose
        .connect(`mongodb://${environnement.DB_HOST}:${environnement.DB_PORT}/${environnement.DB_DATABASE}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.log("db error", error);
            process.exit(1);
        });
}

export default connect;