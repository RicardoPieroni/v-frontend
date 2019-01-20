import axios from 'axios';

class Service {


    constructor(){
        this.backendUrl = process.env.REACT_APP_V_BACKEND_URL;
    }

    retrieveAllUsers() {
        return axios.get(`${this.backendUrl}/user/retrieveAll`)
        .then(res => {  
            const { data } = res;
            return data.map((userItem) => {
                if (userItem.daysWeek) {
                    userItem.daysWeek = userItem.daysWeek.join();
                }
                return userItem;
            })
        });
    }

    /**
     * 
     * @param {*} userTO 
     */
    deleteUser(userTO) {
        return axios.post(`${this.backendUrl}/user/delete/${userTO._id}`)
            .then(res => {
                return;
            });
    }

    /**
     * 
     * @param {*} userTO 
     */
    createUser(userTO) {
        const data = new FormData();
        data.append('name', userTO.name);
        data.append('username', userTO.username);
        data.append('city', userTO.city);
        data.append('email', userTO.email);
        data.append('rideInGroup', userTO.rideInGroup);
        userTO.daysWeek.forEach(element => {
            data.append('daysWeek[]', element)
        });
        return axios.post(`${this.backendUrl}/user/create`, data)
            .then(() => {
               return;
            })
    }

    /**
     * 
     * @param {*} fieldName 
     * @param {*} value 
     */
    retrieveUsersByFieldName(fieldName, value) {
        return axios.get(`${this.backendUrl}/user/retrieveUserByFieldName/${fieldName}/${value}`)
            .then(res => {  
                const { data } = res;
                return data.map((userItem) => {
                    if (userItem.daysWeek) {
                        userItem.daysWeek = userItem.daysWeek.join();
                    }
                    return userItem;
                })
            });
    }
    /**
     * 
     * @param {*} userTO 
     */
    updateUser(userTO) {
        const data = new FormData();
        data.append('name', userTO.name);
        data.append('username', userTO.username);
        data.append('city', userTO.city);
        data.append('email', userTO.email);
        data.append('rideInGroup', userTO.rideInGroup);
        userTO.daysWeek.forEach(element => {
            data.append('daysWeek[]', element)
        });
        return axios.post(`${this.backendUrl}/user/update/${userTO._id}`, data)
            .then(() => {
               return;
            })
    }

    retrieveUserById(id) {
        return axios.get(`${this.backendUrl}/user/retrieveById/${id}`)
            .then(res => {  
                const { data } = res;
                return data;
            });
    }
}

export default new Service();