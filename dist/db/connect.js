"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environnement_1 = require("./../config/environnement");
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return mongoose_1.default
        .connect(`mongodb://${environnement_1.environnement.DB_HOST}:${environnement_1.environnement.DB_PORT}/${environnement_1.environnement.DB_DATABASE}`, {
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
exports.default = connect;
//# sourceMappingURL=connect.js.map