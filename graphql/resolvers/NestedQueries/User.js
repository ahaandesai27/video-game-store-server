//Nested queries after querying a user

import mongoose from 'mongoose';
import Games from '../../../models/games.js';
import Users from '../../../models/users.js';

const User = {
    async ownedGames(parent, { offset = 0, limit = 10 }) {
        return await Games.find({
            _id: {$in: parent.ownedGames}
        }).skip(offset).limit(limit)
    },

    async cart(parent, { offset = 0, limit = 10 }) {
        return await Games.find({
            _id: {$in: parent.cart}
        }).skip(offset).limit(limit)
    }
}

export default User