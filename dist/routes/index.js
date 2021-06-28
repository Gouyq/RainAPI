"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginRoutes_1 = __importDefault(require("./LoginRoutes"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
function default_1(app) {
    app.use('', LoginRoutes_1.default);
    app.use('/users', UserRoutes_1.default);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map