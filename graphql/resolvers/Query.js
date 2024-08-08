import Users from '../../models/users.js';
import Games from '../../models/games.js';
import Reviews from '../../models/reviews.js';
import Categories from '../../models/categories.js';

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

    async gameByUrl (_, {url}) {
        return await Games.findOne({url: url});
    },

    async gamesByPlatform(_, {platform, limit, offset}) {
        return await Games.find({platform: platform}).skip(offset).limit(limit);
    },

    async gamesByPrice(_, {price, limit, offset}) {
        return await Games.find({price: {$lte: price}}).skip(offset).limit(limit);
    },

    async gamesByCategory(_, {categories, limit, offset}) {
        return await Games.find({categories: { $in : categories}}).skip(offset).limit(limit);
    },

    async reviewsByGame(_, {game}) {
        //ID
        return await Reviews.find({game: game});
    },

    async reviewsByUser(_, {user}) {
        //ID
        return await Reviews.find({user: user});
    },

    async categories () {
        return await Categories.find();
    },


}

export default Query;