import userFactory from './factories/user-factory';

class ServicesMock {

    constructor() {
        this.data = [];
    }

    /**
     * 
     * @param {*} random 
     */
    _generateUserMockData(random = true) {
        let numberOfInterations = 1;
        if (random) {
            numberOfInterations = Math.floor(Math.random() * 10);
        }
        for (let index = 0; index < numberOfInterations; index++) {
            const user = userFactory.build();
            this.data.push(user);
        }
        return this.data;
    }

    retrieveAllUsers() {
        if (!this.data.lenght) {
            return this._generateUserMockData(true);
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
}

export default new ServicesMock();