"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environnement_1 = require("./../config/environnement");
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: Date, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
}, { timestamps: true });
const User = mongoose_1.default.model('User', UserSchema);
/**
 * Used before save user, hashed password
 */
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        // Random additional data
        const salt = yield bcrypt_1.default.genSalt(environnement_1.environnement.SALTED);
        const hash = yield bcrypt_1.default.hashSync(user.password, salt);
        user.password = hash;
        return next();
    });
});
/**
 * Used for logging in, compare password
 * @param candidatePassword
 * @returns True or False, depends it's password is valid
 */
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        return bcrypt_1.default.compare(candidatePassword, user.password).catch((e) => false);
    });
};
exports.default = User;
//# sourceMappingURL=User.js.map