import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerTop"></div>
            <div className="footerNav">
                <div className="footernav">
                    <ul>
                        <li><a href="#">이용안내</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">파트너쉽</a></li>
                        <li><a href="#">멤버십</a></li>
                        <li><a href="#">리크루트</a></li>
                        <li><a href="#">모바일버전</a></li>
                    </ul>
                </div>
                <div className="footerImgs">
                    <ul>
                        <li><a href="#">SN Fashion Group.Co.Ltd Info</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;