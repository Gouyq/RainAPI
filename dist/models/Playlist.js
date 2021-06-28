"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PlaylistSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    songs: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Song' }],
    user: { type: mongoose_1.default.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
const Playlist = mongoose_1.default.model('Playlist', PlaylistSchema);
exports.default = Playlist;
//# sourceMappingURL=Playlist.js.map