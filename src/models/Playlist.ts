import { UserDocument } from './User';
import { SongDocument } from './Song';
import mongoose from "mongoose";


export interface PlaylistDocument extends mongoose.Document {
    name: string;
    songs: SongDocument[];
    user: UserDocument;
    createdAt: Date;
    updatedAt: Date;
}

const PlaylistSchema = new mongoose.Schema({
        name: { type: String, required: true},
        songs: [{ type: mongoose.Types.ObjectId, ref: 'Song' }],
        user: { type: mongoose.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);

const Playlist = mongoose.model<PlaylistDocument>('Playlist', PlaylistSchema);

export default Playlist;