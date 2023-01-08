import axios from "axios";

export default class UserService {

    constructor(props) {
        this.clientId = props.clientId;
        this.redirectURL = props.redirectURL;
    }

    /**
     * @title 카카오 인가코드 발급
     */
    getKakaoToken() {
        console.log('this', this.clientId);
        console.log('this', this.redirectURL)
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectURL}&response_type=code`
    }


    /**
     * @title 회원가입 요청
     * @param name 사용자 이름
     */
    async postSignUp(name) {
        try {
            //응답 성공
            // let response = await axios.post('/signUp',{
            //     //보내고자 하는 데이터
            //     name: name,
            // });
            let response = {
                success : true
            }
            return response;
        } catch (error) {
            //응답 실패
            console.error(error);
        }

    }

}