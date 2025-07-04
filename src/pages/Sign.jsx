import React, { useState, useEffect, useRef } from 'react';

const Sign = () => {
    const nameInputRef=useRef(null);

    const [messages, setMessages] = useState({
        name: {text:'', color:''},
        id: { text: '', color: '' },
        pw: { text: '', color: '' }

    })
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const nameRule = /^[A-Za-z가-힣]{1,20}$/;
    const idRule = /^[a-z0-9]{4,16}$/;
    const pwRule = /^[A-Za-z0-9!@#$%^&*()]{1,9}$/;


   /*  useEffect(() => {
        const handleMessageChange = (key, text, color) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [key]:{text, color}
        }))
    }
    }) */
   const handleMessageChange = (key, text, color) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [key]:{text, color}
        }))
    }
    

    const handleName = (event) => {
        const newNameValue=event.target.value;
        setName(newNameValue);
        //console.log(newNameValue)

        if(nameRule.test(newNameValue)){
            handleMessageChange('name', '사용가능한 이름입니다.' , 'success-color')
        }else if(newNameValue===""){
            handleMessageChange('name', '이름을 입력해주세요' , 'error-color');
            setName('');
        }else{
             handleMessageChange('name', '이름을 다시 한번 확인해주세요' , 'error-color');
             setName('');
        }
    }

    const handleId = (event) => {
        const newIdValue=event.target.value;
        setId(newIdValue);
        //console.log(newIdValue)

        if(idRule.test(newIdValue)){
            handleMessageChange('id', '사용가능한 아이디입니다.' , 'success-color')
        }else if(newIdValue===""){
            handleMessageChange('id', '아이디을 입력해주세요' , 'error-color');
            setId('');
        }else{
             handleMessageChange('id', '아이디을 다시 한번 확인해주세요' , 'error-color');
             setId('');
        }
    }

    const handlePw = (event) => {
        const newPwValue=event.target.value;
        setPw(newPwValue);
        //console.log(newIdValue)

        if(pwRule.test(newPwValue)){
            handleMessageChange('pw', '사용가능한 비밀번호입니다.' , 'success-color')
        }else if(newPwValue===""){
            handleMessageChange('pw', '비밀번호을 입력해주세요' , 'error-color');
            setPw('');
        }else{
             handleMessageChange('pw', '비밀번호을 다시 한번 확인해주세요' , 'error-color');
             setPw('');
        }
    }



    //예, 아니요 버튼
    const [smsAgree, setSmsAgree] = useState('yes');
    const [emailAgree, setEmailAgree] = useState('yes');

    return (
        <div className='sign'>
            <h2>회원가입</h2>

            <div className="joinImg">
                <span>회원정보입력</span>
            </div>

            <form action="#">
                <fieldset>
                    <legend>회원가입</legend>

                    <div>
                        <label htmlFor="userName">이름 <span className='required'>*</span></label>
                        <input required type="text" id="userName" value={name} onBlur={handleName} onChange={(event) => setName(event.target.value)} ref={nameInputRef} />
                        <div className={`text ${messages.name.color}`}>{messages.name.text}</div>
                    </div>

                    <div>
                        <label htmlFor="userId">아이디 <span className='required'>*</span></label>
                        <input required type="text" id="userId" value={id} onBlur={handleId} onChange={(event) => {setId(event.target.value)}} />
                        <i>중복확인</i>
                        <div className={`text ${messages.id.color}`}>{messages.id.text}</div>
                    </div>

                    <div>
                        <label htmlFor="userPw">비밀번호 <span className='required'>*</span></label>
                        <input required type="text" id="userPw" value={pw} onBlur={handlePw} onChange={(event) => {setPw(event.target.value)}} />
                        <div className={`text ${messages.pw.color}`}>{messages.pw.text}</div>
                    </div>

                    <div>
                        <label htmlFor="userPw1">비밀번호 확인 <span className='required'>*</span></label>
                        <input required type="text" id="userPw1" />
                    </div>

                    <div>
                        <label htmlFor="userPhone">휴대폰 번호 <span className='required'>*</span></label>
                        <input required type="text" id="userPhone" />
                        <i>휴대폰 인증</i>
                    </div>

                    <div>
                        <label htmlFor="userBirth">생년월일 <span className='required'>*</span></label>
                        <input required type="text" id="userBirth" />
                    </div>

                    <div>
                        <label>SMS, Kakao 수신여부 <span className='required'>*</span></label>
                        <label className='label'>
                            <input
                                type="radio"
                                name="smsAgree"
                                value="yes"
                                checked={smsAgree === 'yes'}
                                onChange={(e) => setSmsAgree(e.target.value)}
                            /> 예
                        </label>
                        <label className='label'>
                            <input
                                type="radio"
                                name="smsAgree"
                                value="no"
                                checked={smsAgree === 'no'}
                                onChange={(e) => setSmsAgree(e.target.value)}
                            /> 아니요
                        </label>
                    </div>

                    <div>
                        <label htmlFor="userEmail">이메일 <span className='required'>*</span></label>
                        <input required type="text" id="userEmail" />
                    </div>

                    <div>
                        <label>메일 수신여부 <span className='required'>*</span></label>
                        <label className='label'>
                            <input
                                type="radio"
                                name="emailAgree"
                                value="yes"
                                checked={emailAgree === 'yes'}
                                onChange={(e) => setEmailAgree(e.target.value)}
                            /> 예
                        </label>
                        <label className='label'>
                            <input
                                type="radio"
                                name="emailAgree"
                                value="no"
                                checked={emailAgree === 'no'}
                                onChange={(e) => setEmailAgree(e.target.value)}
                            /> 아니요
                        </label>
                    </div>

                    <div>
                        <label htmlFor="recommender">추천인 아이디</label>
                        <input type="text" id="recommender" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Sign;
