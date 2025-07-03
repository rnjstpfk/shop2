import React from 'react';

const Login = () => {
    return (
        <div className='login'>
            <h2>loing</h2>
            <div className="loginP">
                <a href="#">간편 회원가입으로 18가지 회원혜택을 누려보세요!</a>
            </div>

            <div className="coupon">
                <img src={process.env.PUBLIC_URL + "img/appcoupon_banner_pc.jpg"} alt="쿠폰" />
            </div>
            <div className="kakaoBtn">
                <img src={process.env.PUBLIC_URL + "img/talk_pc.png"} alt="카카오icon" />
                <img src={process.env.PUBLIC_URL + "img/kakaolabel6.svg"} alt="카카오" />
            </div>
            <div className="chnel">
                <a href="#">아뜨랑스 카카오 채널 추가 시 3,000원 할인 쿠폰 지급♥</a>
            </div>

            <div className="loginWrap">
                <div className="member">
                    <h3>회원로그인</h3>
                    <form action="#">
                        <input type="text" placeholder='아이디' required />
                        <input type="text" placeholder='비밀번호' required />
                        <div className="inputWrap">
                            <input type="checkbox" id='check' />
                            <label htmlFor="check">아이디 저장</label>
                            <input type="checkbox" id='autocheck' />
                            <label htmlFor="autocheck">자동 로그인</label>
                        </div>
                        <button type='submit'>로그인</button>
                        <div className="inputWrap2">
                            <a href="#">아이디/비밀번호 찾기</a>
                            <a href="#">휴먼해제</a>
                            <a href="#">회원가입</a>
                        </div>
                    </form>
                    <div className="different">
                        <p>다른계정으로 <br /> 로그인하기</p>
                        <div className="iconWrap">
                            <div className="naver">
                                <img src={process.env.PUBLIC_URL + 'img/icon/icon_naver.png'} alt="네이버icon" />
                            </div>
                            <div className="google">
                                <img src={process.env.PUBLIC_URL + 'img/icon/icon_google.webp'} alt="구글icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nonMember">
                    <h3>비회원 주문조회</h3>
                    <form action="#">
                        <input type="text" placeholder='이름' required />
                        <input type="text" placeholder='주문번호' required />
                        <input type="text" placeholder='비밀번호' required />
                        <button type='button' className='pbg'>주문조회</button>
                        <button type='button' className='npbg'>주문번호/비밀번호 찾기</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;