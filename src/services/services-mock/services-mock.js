import userFactory from './factories/user-factory';

class ServicesMock {

    /**
     * 
     * @param {*} random 
     */
    _generateUserMockData(random = true) {
        const data = [];
        let numberOfInterations = 1;
        if (random) {
            numberOfInterations = Math.floor(Math.random() * 10);
        }
        for (let index = 0; index < numberOfInterations; index++) {
            const user = userFactory.build();
            data.push(user);
        }
        return data;
    }

    retrieveAllUsers() {
        return this._generateUserMockData(true);
    }
}

export default new ServicesMock();