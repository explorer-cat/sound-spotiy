import React, {useState} from 'react';
import styled from 'styled-components';
import './SignUp.scss'


const WelcomeTitle = styled.div`
  text-align: center;
  height: 100px;
`

const LogoImg = styled.img`
  height: 42px;
  margin: 40px 0px;
`

const InputContainer = styled.div`
  display: block;
  margin-top:18px;
  p {
    margin-bottom: 4px;
    font-size:14px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  border:1px solid #E7E7E7;
  border-radius: 6px;

  span {
    font-size: 20px;
    font-weight: 700;
  }
  
  button {
    margin-top: 12px;
    height: 40px;
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px solid #a7a7a7;
    cursor: pointer;
    width: calc(100% - 10px);
    &:hover {
      border:1px solid #1F1F1F;
    }
  }
`
const SignUpFormTitle = styled.div`
  margin-bottom:24px;
`


function SignUpForm({userService}) {
    const [name , setName] = useState('');

    /**
     * 이름 입력 관리 이벤트.
     * @param e 이벤트
     */
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    /**
     * @title 회원가입 요청 버튼
     * @param e 이벤트
     */
    const handleClickSignUpBtn = async (e) => {
        e.preventDefault();
        const result = await userService.postSignUp(name);
        console.log('result',result)
    }

    return (
        <Container className="user-container">
            <SignUpFormTitle className ="signup-form-title">
                <span>본인정보를 입력해주세요.</span>
            </SignUpFormTitle>
            <div className="signup-form-wrap">
                <InputContainer>
                    <p>이름</p>
                    <input type="name" value = {name} onChange={handleChangeName} placeholder="이름"/>
                </InputContainer>
                <InputContainer>
                    <button onClick={handleClickSignUpBtn}>가입</button>
                </InputContainer>
            </div>
        </Container>
    );
}

export default SignUpForm;
