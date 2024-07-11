import Users from '../../models/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secretKey = "553cec753a6f3e1e73d088ac9eaf0e6ca2bab6a4aff1f2618b3ae7a5d64055cf9bcfd56c9e37345371f159184145def9";

const existingCheck = async (email, username) => {
    const existingEmail = await Users.findOne({email: email})
    const existingUsername = await Users.findOne({username: username})
    if (existingEmail) {
        throw new Error("Email already exists");
    }
    if (existingUsername) {
        throw new Error("Username already exists");
    }
}

const Mutations = {
    async registerUser(_, {user}) { 
        try {
            existingCheck(user.email, user.username)
            user.password = await bcrypt.hash(user.password, 10);
            const newUser = await Users.create(user);
            const token = jwt.sign({userId: newUser._id, name: `${newUser.firstName} ${newUser.lastName}`}, secretKey, {expiresIn: '7d'});
            return {token, newUser}
        } catch (error) {
            throw new Error(error);
            
        }
    },

    async loginUser(_, {email, password}) {
        const user = await Users.findOne({email});
        if (!Users) {
            throw new Error('User not found');
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({userId: user._id, name: `${user.firstName} ${user.lastName}`}, secretKey, {expiresIn: '7d'});
        return {token, user};
    },
    
    async editUser(_, {_id, user}) {
        existingCheck(user.email, user.username);
        return await Users.findByIdAndUpdate({_id}, user, {new: true});
    },

    async deleteUser(_, {_id}) {
        return await Users.findByIdAndDelete(_id);
    },
}

export default Mutations;

//will need middleware for edit and login to check for duplicates