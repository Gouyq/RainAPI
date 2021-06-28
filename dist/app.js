"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environnement_1 = require("./config/environnement");
const app = express_1.default();
const port = environnement_1.environnement.PORT;
app.get('/', (req, res) => {
    res.send('');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map