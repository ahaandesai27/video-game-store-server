import Users from '../../models/users.js';

const Query = {
    async users () {
        return await Users.find();
    },
    
    async user(_, {_id}) {
        return await Users.findById(_id);
    }
}

export default Query;