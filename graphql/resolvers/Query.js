import Users from '../../models/users.js';
import Games from '../../models/games.js';

const Query = {
    async users () {
        return await Users.find();
    },
    
    async user(_, {_id}) {
        return await Users.findById(_id);
    },

    async games () {
        return await Games.find();
    },

    async game(_, {_id}) {
        return await Games.findById(_id);
    }
}

export default Query;