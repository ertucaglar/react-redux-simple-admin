export const globalAppSettings = {
    app: {
        name: "Simple Dashboard"
    },
    auth:{
        localStorageKey: "USER_KEY"
    },
    endpoints: {
        baseApiUrl: 'http://localhost:8010',
        user:{
            login: function(){
                return this.baseApiUrl + '/auth'
            }
        }
    }
};