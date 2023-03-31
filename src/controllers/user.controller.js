import User from "../models/users";
import bcrypt from "bcrypt"

export const createUserController = async (req, res) => {
    try {
        const checkEmail = await User.findOne({ email: req.email })
        if (checkEmail) {
            return res.status(400).send({"error": "E-mail already in use"})
        }
        const body = req.body
        body.password = await bcrypt.hash(body.password, 10)
        const user = await User.create(body)
        user.password = undefined
        return res.status(201).send(user)
    } catch (err) {
        console.log("ERRO", err)
        return res.status(400).send({"error": err.errors})
    }
}

export const getUserController = async (req, res) => {
    try {
        const users = await User.find()
        return res.send(users)
    } catch (err) {
        return res.status(400).send({"error": err.errors})
    }
}

export const getSpecificUserController = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).send({"error": "User not found"})
        }
        return res.send(user)
    } catch (err) {
        return res.status(400).send({"error": err.errors})
    }
}

export const updateUserController = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(400).send({ "error": "User not found!" })
        }
        await User.updateOne({ _id: id }, req.body)
        const updatedUser = await User.findById(id)
        return res.send(updatedUser)
    } catch (err) {
        return res.status(400).send({"error": err.errors})
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(400).send({"error": "User not found!"})
        }
        await User.updateOne({ _id: id }, { isActive: false })
        return res.status(200)
    } catch (err) {
        return res.status(400).send({"error": err.errors})
    }
}