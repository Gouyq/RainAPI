"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environnement_1 = require("./config/environnement");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const connect_1 = __importDefault(require("./db/connect"));
const app = express_1.default();
const port = environnement_1.environnement.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    connect_1.default();
    index_1.default(app);
});
//# sourceMappingURL=app.js.map