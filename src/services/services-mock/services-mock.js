import userFactory from './factories/user-factory';
import userList from './data/user-list.json'

class ServicesMock {

    constructor() {
        this.data = [];
        this.enableRandomGenerateData = process.env.REACT_APP_ENABLE_RANDOM_GENERATE_DATA === 'true';
    }

    /**
     * 
     * @param {*} random 
     */
    _generateUserMockData(random = true) {
        if (random) {
           const numberOfInterations = Math.floor(Math.random() * 10);
           for (let index = 0; index < numberOfInterations; index++) {
                const user = userFactory.build();
                this.data.push(user);
            }
        } else {
            this.data = userList;
        }
        
        return this.data;
    }

    retrieveAllUsers() {
        if (!this.data.length) {
            return this._generateUserMockData(this.enableRandomGenerateData);
        }
       return this.data;
    }

    /**
     * 
     * @param {*} userTO 
     */
    deleteUser(userTO) {
        const { _id } = userTO;
        const data = this.data.filter((userItem) => (userItem._id !== _id));
        this.data = data;
        return this.data;
    }

    /**
     * 
     * @param {*} userTO 
     */
    createUser(userTO) {
        this.data.push(userTO);
    }
}

export default new ServicesMock();