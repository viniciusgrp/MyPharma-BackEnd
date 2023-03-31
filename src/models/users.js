import mongoose from "../database/index.js";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

// UserSchema.pre("save", async (next) => {
//     const hash = await bcrypt.hash(this.password, 10)
//     this.password = hash
//     next()
// })

const User = mongoose.model("User", UserSchema)

export default User