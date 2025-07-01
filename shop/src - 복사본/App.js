/* import React, { useRef, useState } from "react"; */
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./components/SectionTitle";
/* import './App.css'; */
import "swiper/css";
import 'swiper/css/navigation';
import './App.scss';
import { Autoplay, Navigation } from 'swiper/modules';

function App() {
  return (
    <div className="App">
		<div className="popup">
			<Swiper 
			modules={[Autoplay]}
			autoplay={true}
			className="mySwiper">
				<SwiperSlide>아뜨랑스에서 사이즈 고민 하지 마세요! 사이즈 무료교환</SwiperSlide>
				<SwiperSlide>오늘밤 10시30분까지 주문하면 오/늘/출/발</SwiperSlide>
				<SwiperSlide>급할 땐 오늘출발, 새벽배송</SwiperSlide>
				<SwiperSlide> 앱 다운 받고, 첫 로그인하면 3천원 쿠폰을 드려요!</SwiperSlide>
				<SwiperSlide> 아뜨랑스 카카오 채널 추가 시 3,000원 할인 쿠폰 지급♥</SwiperSlide>
     		</Swiper>
		</div>
		<header>
			<div className="headerLeft">
				<h1><a href="index.html">ATTRANGS</a></h1>
				<nav>
					<ul>
						<li><a href="#">BEST</a></li>
						<li><a href="#" className="g">NEW </a></li>
						<li><a href="#">지금여름🌿<span>N</span>  </a></li>
						<li><a href="#">장마룩☔<span>N</span>  </a></li>
						<li><a href="#">휴양지룩👗<span>N</span>  </a></li>
						<li><a href="#">MADE</a></li>
						<li><a href="#">오늘의할인</a></li>
						<li><a href="#">하객룩</a></li>
						<li><a href="#">아우터</a></li>
						<li><a href="#">원피스</a></li>
						<li><a href="#">니트</a></li>
						<li><a href="#">티셔츠</a></li>
						<li><a href="#">블라우스/셔츠</a></li>
					</ul>
				</nav>
			</div>
			<div className="headerRight">
				<div className="gnb">
					<ul>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#">로그인</a></li>
					</ul>
				</div>
			</div>
		</header>
		<main>
			<section className="mainSlide">
				<h2 className="ir_so">메인 슬라이드</h2>
				<Swiper navigation={true} modules={[Navigation]} className="mainSwiper">
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img01.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img02.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img03.jpg" } alt="" /></SwiperSlide>
					<SwiperSlide><img src={process.env.PUBLIC_URL + "/img/img04.jpg" } alt="" /></SwiperSlide>
				</Swiper>
			</section>
			<SectionTitle></SectionTitle>
		</main>
    </div>
  );
}

export default App;
