import mongoose from "mongoose";
const { Schema, model} = mongoose;

const schema = new Schema({
    first_name: { type: String, required: true, default: null },
    last_name: { type: String, required: true, default: null },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    email_verification_code : { type: String, default: null },
    email_verified : { type: Boolean, default: false },
    reset_password_verification_code: { type: Number, default: null },
    reset_password_verification_code_at: { type: Number, default: null },
}, { timestamps: true } );

schema.methods.toJSON = function() {
    const model = this.toObject();

    delete model.password;

    return model;
};

export default model('User', schema);
