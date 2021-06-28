import mongoose from "mongoose";


export interface SongDocument extends mongoose.Document {
    title: string;
    artist: string;
    album: string;
    duration: number;
    path: string;
    createdAt: Date;
    updatedAt: Date;
}

const SongSchema = new mongoose.Schema({
        title: { type: String, required: true, unique: true},
        artist: { type: String, required: true, unique: true},
        album: { type: String, required: true, unique: true},
        duration: { type: String, required: true, unique: true},
        path: { type: String, required: true, unique: true}
    },
    { timestamps: true }
);

const Song = mongoose.model<SongDocument>('Song', SongSchema);

export default Song;