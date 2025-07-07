import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

const Sign = () => {
    /* const nameInputRef=useRef(null); */
    const navigate = useNavigate();
    const pwInputRef = useRef(null);
    const pw2InputRef = useRef(null);
    const phoneRef = useRef(null);

    const [messages, setMessages] = useState({
        name: { text: '', color: '' },
        id: { text: '', color: '' },
        pw: { text: '', color: '' },
        pw2: { text: '', color: '' },
        phone: { text: '', color: '' },
        birth: { text: '', color: '' },
        email: { text: '', color: '' },

    })
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    /* const [mailAgree, setMailAgree] = useState(""); */ // 상태 추가

    const nameRule = /^[A-Za-z가-힣]{1,20}$/;
    const idRule = /^[a-z0-9]{4,16}$/;
    const pwRule = /^[A-Za-z0-9!@#$%^&*()]{1,9}$/;
    const phoneRegex = /^01[016789][0-9]{7,8}$/;
    const birthRegex = /^(19[0-9]{2}|20[0-4][0-9]|2050)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;




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
            [key]: { text, color }
        }))
    }


    const handleName = (event) => {
        const newNameValue = event.target.value;
        setName(newNameValue);
        //console.log(newNameValue)

        if (nameRule.test(newNameValue)) {
            handleMessageChange('name', '사용가능한 이름입니다.', 'success-color')
        } else if (newNameValue === "") {
            handleMessageChange('name', '이름을 입력해주세요', 'error-color');
            setName('');
        } else {
            handleMessageChange('name', '이름을 다시 한번 확인해주세요', 'error-color');
            setName('');
        }
    }

    const handleId = (event) => {
        const newIdValue = event.target.value;
        setId(newIdValue);
        //console.log(newIdValue)

        if (idRule.test(newIdValue)) {
            handleMessageChange('id', '사용가능한 아이디입니다.', 'success-color')
        } else if (newIdValue === "") {
            handleMessageChange('id', '아이디을 입력해주세요', 'error-color');
            setId('');
        } else {
            handleMessageChange('id', '아이디을 다시 한번 확인해주세요', 'error-color');
            setId('');
        }
    }

    const handlePw = (event) => {
        const newPwValue = event.target.value;
        setPw(newPwValue);
        //console.log(newIdValue)

        if (pwRule.test(newPwValue)) {
            handleMessageChange('pw', '사용가능한 비밀번호입니다.', 'success-color')
        } else if (newPwValue === "") {
            handleMessageChange('pw', '비밀번호을 입력해주세요', 'error-color');
            setPw('');
        } else {
            handleMessageChange('pw', '비밀번호을 다시 한번 확인해주세요', 'error-color');
            setPw('');
        }
    }


    const handlePw2 = (event) => {
        const newPw2Value = event.target.value;
        setPw2(newPw2Value);

        if (pw === "") {//비밀번호의 값이 비어있는 경우
            handleMessageChange('pw', '비밀번호를 입력해주세요.', 'error-color');
            pwInputRef.current.focus();
            setPw2("");
        } else if (newPw2Value === pw) {//비밀번호가 일치하면
            handleMessageChange('pw2', '비밀번호가 일치합니다.', 'success-color');
        } else if (newPw2Value === "") {//비밀번호가 입력X
            handleMessageChange('pw2', '비밀번호를 입력해주세요.', 'error-color');
            pw2InputRef.current.focus();
            setPw2("");
        } else {
            handleMessageChange('pw2', '비밀번호가 일치하지 않습니다.', 'error-color');
            setPw2("");
        }
    }

    const handlephone = (event) => {
        const newPhoneValue = event.target.value;
        setPhone(newPhoneValue);
        if (phoneRegex.test(newPhoneValue)) {
            handleMessageChange('phone', '사용가능한 전화번호입니다.', 'success-color')
        } else if (newPhoneValue === "") {//입력한 값이 없을 경우
            handleMessageChange('phone', '전화번호를 입력해주세요.', 'error-color');
            phoneRef.current.focus();
            setPhone('');
        } else {//잘못 압력
            handleMessageChange('phone', '전화번호를 다시 한번 확인해주세요.', 'error-color');
            phoneRef.current.focus();
            setPhone('');
        }
    };


    const handleBirth = (event) => {
        const newBirthValue = event.target.value;
        setBirth(newBirthValue);

        const birthRegex = /^(19[0-9]{2}|20[0-4][0-9]|2050)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;

        if (!birthRegex.test(newBirthValue)) {
            handleMessageChange('birth', '생년월일 형식을 확인해주세요 (YYYYMMDD)', 'error-color');
            setBirth('');
            return;
        }

        const year = parseInt(newBirthValue.slice(0, 4), 10);
        const month = parseInt(newBirthValue.slice(4, 6), 10);
        const day = parseInt(newBirthValue.slice(6, 8), 10);

        const date = new Date(year, month - 1, day); // month는 0부터 시작

        if (
            date.getFullYear() !== year ||
            date.getMonth() + 1 !== month ||
            date.getDate() !== day
        ) {
            handleMessageChange('birth', '존재하지 않는 날짜입니다.', 'error-color');
            setBirth('');
            return;
        }

        const today = new Date();
        const birthDate = new Date(year, month - 1, day);

        if (birthDate > today) {
            handleMessageChange('birth', '미래 날짜는 입력할 수 없습니다.', 'error-color');
            setBirth('');
            return;
        }

        handleMessageChange('birth', '사용가능한 생년월일입니다.', 'success-color');
    };

    const handleEmail = (event) => {
        const newEmailValue = event.target.value;
        setEmail(newEmailValue);
        if (emailRegex.test(newEmailValue)) {
            handleMessageChange('email', '사용가능한 이메일입니다.', 'success-color')
        } else if (newEmailValue === "") {//입력한 값이 없을 경우
            handleMessageChange('email', '이메일를 입력해주세요.', 'error-color');
            /* emailRegex.current.focus(); */
            setPhone('');
        } else {//잘못 압력
            handleMessageChange('email', '정확한 이메일을 입력해주세요.', 'error-color');
            /* emailRegex.current.focus(); */
            setPhone('');
        }
    };

    /*     const handleMailAgreeChange = (event) => {
        setMailAgree(event.target.value);
    };
 */





    //예, 아니요 버튼
    const [smsAgree, setSmsAgree] = useState('yes');
    const [emailAgree, setEmailAgree] = useState('yes');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 필수 유효성 검사 리스트
        if (!nameRule.test(name)) {
            handleMessageChange('name', '이름을 정확히 입력해주세요.', 'error-color');
            return;
        }
        if (!idRule.test(id)) {
            handleMessageChange('id', '아이디를 정확히 입력해주세요.', 'error-color');
            return;
        }
        if (!pwRule.test(pw)) {
            handleMessageChange('pw', '비밀번호를 정확히 입력해주세요.', 'error-color');
            return;
        }
        if (pw !== pw2 || pw2 === "") {
            handleMessageChange('pw2', '비밀번호 확인이 일치하지 않습니다.', 'error-color');
            return;
        }
        if (!phoneRegex.test(phone)) {
            handleMessageChange('phone', '전화번호 형식을 확인해주세요.', 'error-color');
            return;
        }
        if (!birthRegex.test(birth)) {
            handleMessageChange('birth', '생년월일 형식을 확인해주세요.', 'error-color');
            return;
        }

        const year = parseInt(birth.slice(0, 4), 10);
        const month = parseInt(birth.slice(4, 6), 10);
        const day = parseInt(birth.slice(6, 8), 10);
        const date = new Date(year, month - 1, day);
        const today = new Date();

        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day || date > today) {
            handleMessageChange('birth', '유효한 생년월일이 아닙니다.', 'error-color');
            return;
        }

        if (!emailRegex.test(email)) {
            handleMessageChange('email', '정확한 이메일을 입력해주세요.', 'error-color');
            return;
        }

        if (smsAgree === "") {
            alert("SMS, Kakao 수신 여부를 선택해주세요.");
            return;
        }
        if (emailAgree === "") {
            alert("메일 수신 여부를 선택해주세요.");
            return;
        }


        // 모든 조건이 통과되었을 때
        alert("회원가입이 완료되었습니다.");
        navigate("/login"); // 로그인 페이지로 이동
    };

    const handleReset = (e) => {
        e.preventDefault(); // 기본 초기화 막고 수동으로 초기화

        // 모든 입력값 초기화
        setName('');
        setId('');
        setPw('');
        setPw2('');
        setPhone('');
        setBirth('');
        setEmail('');
        setSmsAgree('');
        setEmailAgree('');


        // 메시지도 초기화
        setMessages({
            name: { text: '', color: '' },
            id: { text: '', color: '' },
            pw: { text: '', color: '' },
            pw2: { text: '', color: '' },
            phone: { text: '', color: '' },
            birth: { text: '', color: '' },
            email: { text: '', color: '' },
        });
    };

    return (
        <div className='sign'>
            <h2>회원가입</h2>

            <div className="joinImg">
                <span>회원정보입력</span>
            </div>

            <form action="#">
                <fieldset>
                    <legend>회원가입</legend>
                    {/* 이름 */}
                    <div>
                        <label htmlFor="userName">이름 <span className='required'>*</span></label>
                        <input required type="text" id="userName" value={name} onBlur={handleName} onChange={(event) => setName(event.target.value)} /* ref={nameInputRef} */ />
                        <div className={`text ${messages.name.color}`}>{messages.name.text}</div>
                    </div>
                    {/* 아이디 */}
                    <div>
                        <label htmlFor="userId">아이디 <span className='required'>*</span></label>
                        <input required type="text" id="userId" value={id} onBlur={handleId} onChange={(event) => { setId(event.target.value) }} />
                        <i>중복확인</i>
                        <div className={`text ${messages.id.color}`}>{messages.id.text}</div>
                    </div>
                    {/* 비번 */}
                    <div>
                        <label htmlFor="userPw">비밀번호 <span className='required'>*</span></label>
                        <input required type="text" id="userPw" value={pw} onBlur={handlePw} ref={pwInputRef} onChange={(event) => { setPw(event.target.value) }} />
                        <div className={`text ${messages.pw.color}`}>{messages.pw.text}</div>
                    </div>
                    {/* 비번 확인 */}
                    <div>
                        <label htmlFor="userPw1">비밀번호 확인 <span className='required'>*</span></label>
                        <input required type="text" id="userPw1" value={pw2} onBlur={handlePw2} ref={pw2InputRef} onChange={(event) => { setPw2(event.target.value) }} />
                        <div className={`text ${messages.pw2.color}`}>{messages.pw2.text}</div>
                    </div>
                    {/* 휴대폰번호 */}
                    <div>
                        <label htmlFor="userPhone">휴대폰 번호 <span className='required'>*</span></label>
                        <input required type="text" ref={phoneRef} value={phone} onBlur={handlephone} onChange={(event) => { setPhone(event.target.value) }} id="userPhone" />
                        <i>휴대폰 인증</i>
                        <div className={`text ${messages.phone.color}`}>{messages.phone.text}</div>
                    </div>

                    {/* 생년월일 */}
                    <div>
                        <label htmlFor="userBirth">생년월일 <span className='required'>*</span></label>
                        <input required type="text" id="userBirth" ref={birthRegex} value={birth} onBlur={handleBirth} onChange={(event) => { setBirth(event.target.value) }} />
                        <div className={`text ${messages.birth.color}`}>{messages.birth.text}</div>
                    </div>

                    {/*sms 수신여부 */}
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

                    {/* 이메일 */}
                    <div>
                        <label htmlFor="userEmail">이메일 <span className='required'>*</span></label>
                        <input required type="text" id="userEmail" value={email} onBlur={handleEmail} onChange={(event) => { setEmail(event.target.value) }} />
                        <div className={`text ${messages.email.color}`}>{messages.email.text}</div>
                    </div>
                    {/* 메일 수신여부 */}
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
                <div className="btnWrap">
                    <button type='submit' onClick={handleSubmit}>저장</button>
                    <button type='reset' onClick={handleReset}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default Sign;
