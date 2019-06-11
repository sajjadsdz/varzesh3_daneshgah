import React from 'react';

import Clock from 'react-digital-clock';

import './Header.css';

import Ads from '../Ads/Ads';


const AdArg = {
  link: "http://ads.farakav.com/clk?av=HOYN&amp;gl=3d0a08f41bafeed9e81aabcc91fe900c&amp;lc=0",
  image_src: "https://static.farakav.com/v3/static/bpx/00910876.gif",
  width: "468",
  height: "60"
}

function Header() {
  return (
    <header class="page-header hidden-xs is-event">
      <div class="page-header--tiny-bar">
        <div class="center-container">

          <ul class="menu bordered">
            <li class="">
              <a class="clr" target="_blank" href="http://fantasy.varzesh3.com">تیم فانتزی</a>
            </li>
            <li class="">
              <a class="clr" target="_blank" href="http://video.varzesh3.com">ویدئو</a>
            </li>
            <li class="">
              <a class="clr" target="_blank" href="/news/live">اخبار زنده</a>
            </li>
            <li class="">
              <a class="clr" target="_blank" href="/contact">ارتباط با ما</a>
            </li>
            <li class="">
              <a class="clr" target="_blank" href="http://charge.varzesh3.com/">کارت شارژ</a>
            </li>
            <li class="highlight">
              <a class="clr" href="/ads">تبلیغات</a>
            </li>
          </ul>

          <div class="profile pull-left text-left is-guest">
            <a href="/login?redirect=/news/1594068/%D8%A7%D9%86%D8%B5%D8%B1%D8%A7%D9%81-%D8%B9%D9%84%DB%8C-%DA%A9%D8%B1%DB%8C%D9%85%DB%8C-%D8%A7%D8%B2-%D9%85%D8%B1%D8%A8%DB%8C%DA%AF%D8%B1%DB%8C-%D9%88-%D9%85%D8%A7%D9%84%DA%A9%DB%8C%D8%AA-%D8%B3%D9%BE%DB%8C%D8%AF%D8%B1%D9%88%D8%AF">ورود <i class="varzesh3-icon-login"></i></a>
          </div>

          <div class="page-header--datetime pull-left">
            <div class="pull-left page-header--datetime--time">
              <i class="varzesh3-icon-time"></i>

              <i>
                <span>

                <Clock class="dib" format= {'hh-mm'} hour12= {false} />
                  </span>
              </i>

            </div>
            <div class="pull-left page-header--datetime--date">
              <i class="varzesh3-icon-calendar"></i>
              <span> دوشنبه 20 خرداد </span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-header--middle-row">
        <div class="center-container">

          <div class="page-logo pull-right">
            <a href="http://www.varzesh3.com">
              <img src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/identity/varzesh3-logo.png" alt="لوگو ورزش سه" width="141" height="66" border="0"/>
            </a>
          </div>

          <div class="pull-left ads-block">

            <div class="ad-container row-fluid" data-adposition="1">
              <Ads Args= {AdArg}/>
            </div>

          </div>
        </div>
      </div>

      <div class="color-bar">
        <div class="color-bar--item red"></div>
        <div class="color-bar--item yellow"></div>
        <div class="color-bar--item blue"></div>
        <div class="color-bar--item green"></div>
        <div class="color-bar--item gray"></div>
      </div>
      <div class="clear"></div>

      <div class="page-header--main-menu">
        <div class="overflow-visible center-container">

          <nav role="navigation">

            <ul class="menu reverse pull-right">
              <li>
                <a title="صفحه اصلی" href="/">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a title="جداول لیگ‌ها " href="/table">
                  جداول لیگ‌ها
                </a>
              </li>
              <li>
                <a title="روزنامه" href="/newspaper">
                  روزنامه
                </a>
              </li>
              <li>
                <a title="ویدئو" href="https://video.varzesh3.com" target="_blank">
                  ویدئو
                </a>
              </li>
              <li class="highlight">
                <a title="جام حذفی" href="/playoff" target="_blank">
                  جام حذفی
                </a>
              </li>
              <li>
                <a title="نقل و انتقالات" href="/transfers" target="_blank">
                  نقل و انتقالات
                </a>
              </li>
              <li>
                <a title="کمپین ستاره‌ها" href="https://www.varzesh3.com/tag/938682" target="_blank">
                  کمپین ستاره‌ها
                </a>
              </li>
              <li>
                <a title="پخش زنده" href="https://www.anten.ir" target="_blank">
                  پخش زنده
                </a>
              </li>
              <li>
                <a title="نتایج زنده" href="/livescore">
                  نتایج زنده
                  <span class="live blink"></span>
                </a>
              </li>
            </ul>

          </nav>
          <div class="page-search pull-left">
            <input type="text" placeholder="جستجوی اخبار، تیم ها، بازیکنان و ویدیوهای ورزشی..." id="searchKey" name="searchKey"/>
            <button><i class="varzesh3-icon-magnifying-glass"></i></button>
            <div class="page-search--result-box hidden"></div>
          </div>
        </div>
      </div>


    </header>
  );
}

export default Header;
