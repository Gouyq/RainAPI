"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SongSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, unique: true },
    artist: { type: String, required: true, unique: true },
    album: { type: String, required: true, unique: true },
    duration: { type: String, required: true, unique: true }
}, { timestamps: true });
const Song = mongoose_1.default.model('Song', SongSchema);
exports.default = Song;
//# sourceMappingURL=Song.js.map