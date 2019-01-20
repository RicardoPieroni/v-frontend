import serviceMock from '../services/services-mock/services-mock';
import service from '../services/service';

class ServiceHandle {
    constructor() {
        this.enableMockups = process.env.REACT_APP_ENABLE_MOCKUPS;
    }

    retrieveService() {
        if (this.enableMockups === 'true') {
            return serviceMock;
        }

        return service;
    }

}

export default new ServiceHandle();