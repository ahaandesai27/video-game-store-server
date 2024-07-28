import Users from '../../models/users.js';
import Games from '../../models/games.js';

const Query = {
    async users () {
        return await Users.find();
    },
    
    async user(_, {_id}) {
        return await Users.findById(_id);
    },

    async games (_, {limit, offset, platform, price}) {
        const query = {}
        if (platform) {
            query.platform = platform;
        }
        if (price !== undefined) {
            query.price = {$lte: price};
        }
        else {
            query.price = {$gte: 0};
        }
        return await Games.find(query).skip(offset).limit(limit);
    },

    async game(_, {_id}) {
        return await Games.findById(_id);
    },

    async gamesByPlatform(_, {platform, limit, offset}) {
        return await Games.find({platform: platform}).skip(offset).limit(limit);
    },

    async gamesByPrice(_, {price, limit, offset}) {
        return await Games.find({price: {$lte: price}}).skip(offset).limit(limit);
    }
}

export default Query;