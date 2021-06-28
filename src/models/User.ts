import { environnement } from './../config/environnement';
import bcrypt from "bcrypt";
import mongoose from "mongoose";


export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema({
        email: { type: Date, required: true, unique: true},
        name: { type: String, required: true, unique: true},
        password: { type: String, required: true, unique: true},
    },
    { timestamps: true }
);

const User = mongoose.model<UserDocument>('User', UserSchema);


/**
 * Used before save user, hashed password
 */
UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
    let user = this as UserDocument;

    // Random additional data
    const salt = await bcrypt.genSalt(environnement.SALTED);

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
})

/**
 * Used for logging in, compare password
 * @param candidatePassword 
 * @returns True or False, depends it's password is valid
 */
UserSchema.methods.comparePassword = async function (
    candidatePassword: string
  ) {
    const user = this as UserDocument;
  
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

export default User;