import apiStatus from "../utilities/apiStatus";

const initialState = {
    user:{
        users: [],
        fetchUsersApiStatus: apiStatus.IDLE,
    },
    createUserPage:{
        createUserApiStatus: apiStatus.IDLE,
    },
}

export default initialState;