//Nested queries after querying a user

import mongoose from 'mongoose';
import Games from '../../../models/games.js';
import Users from '../../../models/users.js';

const User = {
    async ownedGames(parent) {
        return await Games.find({
            _id: {$in: parent.ownedGames}
        })
    }
}

export default User