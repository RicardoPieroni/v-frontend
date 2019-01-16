import serviceMock from '../services/services-mock/services-mock';

class ServiceHandle {
    constructor() {
        this.enableMockups = process.env.REACT_APP_ENABLE_MOCKUPS;
    }

    retrieveService() {
        if (this.enableMockups === 'true') {
            return serviceMock;
        }
    }

}

export default new ServiceHandle();