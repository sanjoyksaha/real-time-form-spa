import User from "./User";

class Exception{
    handle(error) {
        this.isExpired(error.response.data.error)
    }

    isExpired(error) {
        if(error == 'Token is Expired') {
            User.logOut()
        }
    }
}

export default Exception = new Exception()