var EnvironmentStore = {
    getApiHost: function (name) {
        switch (name) {

            // place your baseURL according it's environment
            case 'test':
                return 'http://localhost:8080';
            case 'live':
                return 'https://jsonplaceholder.typicode.com';
            default:
                throw ("Unknown Environment.getApiHost: " + name)
        }
    }
}

export default EnvironmentStore;