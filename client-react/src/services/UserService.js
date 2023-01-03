export default class UserService {

    constructor(props) {
        this.clientId = props.clientId;
        this.redirectURL = props.redirectURL;
    }
    getKaKaoToken() {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectURL}&response_type=code`
    }

    getLoginAccessToken() {


    }
}