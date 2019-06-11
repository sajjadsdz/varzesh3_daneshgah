import React, { Fragment } from 'react';

import './ImageSlider.css';

class ImageSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }



  render( ){

    return (



      <div class="news-slider widget">
        <div class="news-slider--badge text-center">مهم‌ترین اخبار</div>
        <div class="news-slider--carousel widget-slider owl-carousel owl-rtl owl-loaded owl-drag">


          <div class="owl-stage-outer">
            <div class="owl-stage">


              {/*<div class="owl-item cloned">
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/9X790/%D8%AA%D8%A7%D8%AC-%DA%A9%DB%8C-%D8%B1%D9%88%D8%B4-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%AD%D8%B1%D9%81%D8%B4-%D8%B1%D8%A7-%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA-%DA%A9%D9%86%D8%AF" title="تاج: کی روش باید حرفش را اثبات کند">
                          <img src="https://static.farakav.com/files/pictures/01411817.jpg?h=192" alt="تاج: کی روش باید حرفش را اثبات کند" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 7 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">داماش صد درصد به خاطر داوری حذف شد</div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/9X790/%D8%AA%D8%A7%D8%AC-%DA%A9%DB%8C-%D8%B1%D9%88%D8%B4-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%AD%D8%B1%D9%81%D8%B4-%D8%B1%D8%A7-%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA-%DA%A9%D9%86%D8%AF" title="تاج: کی روش باید حرفش را اثبات کند">تاج: کی روش باید حرفش را اثبات کند</a>
                      </h1>
                      <p class="news-slider--subtitle">رئیس فدراسیون فوتبال امروز در یک نشست خبری درباره مسایل مهمی که در فوتبال ایران رخ داده است صحبت کرد و در آغاز صحبت هایش به ماجرای بازی پرحاشیه فینال جام حذفی پرداخت.</p>
                    </div>
                  </div>

                </div>
              </div>



              <div class="owl-item cloned" >
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/v48G8/%D8%A7%D9%88%D9%84%D8%AA%DB%8C%D9%85%D8%A7%D8%AA%D9%88%D9%85-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A8%D8%A7%D8%B1%D8%B3%D8%A7-%D8%A8%D9%87-%D8%AF%D9%85%D8%A8%D9%84%D9%87-%D9%88-%D8%AA%D9%87%D8%AF%DB%8C%D8%AF-%D8%A8%D9%87-%D8%A7%D8%AE%D8%B1%D8%A7%D8%AC" title="اولتیماتوم جدید بارسا به دمبله و تهدید به اخراج">
                          <img src="https://static.farakav.com/files/pictures/01363599.jpg?h=192" alt="اولتیماتوم جدید بارسا به دمبله و تهدید به اخراج" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 3 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">یاغی فرانسوی سر به راه نمی شود</div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/v48G8/%D8%A7%D9%88%D9%84%D8%AA%DB%8C%D9%85%D8%A7%D8%AA%D9%88%D9%85-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A8%D8%A7%D8%B1%D8%B3%D8%A7-%D8%A8%D9%87-%D8%AF%D9%85%D8%A8%D9%84%D9%87-%D9%88-%D8%AA%D9%87%D8%AF%DB%8C%D8%AF-%D8%A8%D9%87-%D8%A7%D8%AE%D8%B1%D8%A7%D8%AC" title="اولتیماتوم جدید بارسا به دمبله و تهدید به اخراج">اولتیماتوم جدید بارسا به دمبله و تهدید به اخراج</a>
                      </h1>
                      <p class="news-slider--subtitle">عثمان دمبله برای مدیران بارسلونا تبدیل به یک سردرد مزمن شده است و به نظر راهی برای رهایی از این کابوس هم پیدا نمی شود.</p>
                    </div>
                  </div>

                </div>
              </div>



              <div class="owl-item cloned" >
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/Be0wg/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D9%88%DB%8C%DA%98%D9%87-%D8%AF%D9%88%D8%B1%D9%87-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85-%D9%85%D9%84%DB%8C-%DA%86%DA%AF%D9%88%D9%86%D9%87-%D8%AE%D9%88%D8%A7%D9%87%D8%AF-%D8%A8%D9%88%D8%AF%D8%9F" title="یادداشت ویژه: دوره جدید تیم ملی چگونه خواهد بود؟">
                          <img src="https://static.farakav.com/files/pictures/01411773.jpg?h=192" alt="یادداشت ویژه: دوره جدید تیم ملی چگونه خواهد بود؟" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 8 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">بررسی یک مسیر؛ مارک ویلموتس از بلژیک تا ایران</div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/Be0wg/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA-%D9%88%DB%8C%DA%98%D9%87-%D8%AF%D9%88%D8%B1%D9%87-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85-%D9%85%D9%84%DB%8C-%DA%86%DA%AF%D9%88%D9%86%D9%87-%D8%AE%D9%88%D8%A7%D9%87%D8%AF-%D8%A8%D9%88%D8%AF%D8%9F" title="یادداشت ویژه: دوره جدید تیم ملی چگونه خواهد بود؟">یادداشت ویژه: دوره جدید تیم ملی چگونه خواهد بود؟</a>
                      </h1>
                      <p class="news-slider--subtitle">مارک ویلموتس به عنوان سرمربی تیم ملی ایران انتخاب شده اما هنوز دلایل منطقی برای انتخاب او از سوی فدراسیون فوتبال به فوتبالدوستان ارائه نشده است.</p>
                    </div>
                  </div>
                </div>
              </div>



              <div class="owl-item cloned">
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/5pXv4/%D8%B9%D8%B1%D8%A8-%D8%A8%D8%B1%D8%A7%D9%86%DA%A9%D9%88-%D9%88-%D9%85%D8%B9%D9%85%D8%A7%DB%8C%DB%8C-%DA%A9%D9%87-%D8%AD%D9%84-%D9%86%D8%B4%D8%AF(%D9%85%D8%AA%D9%86-%DA%A9%D8%A7%D9%85%D9%84)" title="عرب - برانکو و معمایی که حل نشد(متن کامل)">
                          <img src="https://static.farakav.com/files/pictures/01411887.jpg?h=192" alt="عرب - برانکو و معمایی که حل نشد(متن کامل)" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 8 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">رقم قرارداد برانکو :۲۴ میلیارد تومان</div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/5pXv4/%D8%B9%D8%B1%D8%A8-%D8%A8%D8%B1%D8%A7%D9%86%DA%A9%D9%88-%D9%88-%D9%85%D8%B9%D9%85%D8%A7%DB%8C%DB%8C-%DA%A9%D9%87-%D8%AD%D9%84-%D9%86%D8%B4%D8%AF(%D9%85%D8%AA%D9%86-%DA%A9%D8%A7%D9%85%D9%84)" title="عرب - برانکو و معمایی که حل نشد(متن کامل)">عرب - برانکو و معمایی که حل نشد(متن کامل)</a>
                      </h1>
                      <p class="news-slider--subtitle">مدیرعامل پرسپولیس با حضور در نشست خبری توضیحاتی را درباره مشکلات این باشگاه ارائه کرد.</p>
                    </div>
                  </div>

                </div>
              </div>



              <div class="owl-item" >
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/705Ye/%D8%A7%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D9%85%D8%B7%D9%87%D8%B1%DB%8C-%D8%A7%D9%88%D9%84%DB%8C%D9%86-%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84" title="ارسلان مطهری اولین خرید استقلال">
                          <img src="https://static.farakav.com/files/pictures/01393249.jpg?h=192" alt="ارسلان مطهری اولین خرید استقلال" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 2 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">بازیکنی که بالاخره به تیم محبوبش رسید</div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/705Ye/%D8%A7%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D9%85%D8%B7%D9%87%D8%B1%DB%8C-%D8%A7%D9%88%D9%84%DB%8C%D9%86-%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84" title="ارسلان مطهری اولین خرید استقلال">ارسلان مطهری اولین خرید استقلال</a>
                      </h1>
                      <p class="news-slider--subtitle">مهاجم فصل گذشته ذوب آهن را باید اولین خرید آبی پوشان در نقل و انتقالات تابستانی دانست.</p>
                    </div>
                  </div>

                </div>
              </div>



              <div class="owl-item active" >
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/JPX2g/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-3-%E2%80%93-%DA%98%D8%A7%D9%BE%D9%86-0%D8%9B-%D8%B3%D8%A7%D9%85%D9%88%D8%B1%D8%A7%DB%8C%DB%8C%E2%80%8C%D9%87%D8%A7-%D9%87%D9%85-%D8%B2%D8%A7%D9%86%D9%88-%D8%B2%D8%AF%D9%86%D8%AF" title="ایران 3 – ژاپن 0؛ سامورایی‌ها هم زانو زدند">
                          <img src="https://static.farakav.com/files/pictures/01411879.jpg?h=192" alt="ایران 3 – ژاپن 0؛ سامورایی‌ها هم زانو زدند" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 4 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">پایان خوش در توکیو با چاشنی جوانگرایی </div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/JPX2g/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-3-%E2%80%93-%DA%98%D8%A7%D9%BE%D9%86-0%D8%9B-%D8%B3%D8%A7%D9%85%D9%88%D8%B1%D8%A7%DB%8C%DB%8C%E2%80%8C%D9%87%D8%A7-%D9%87%D9%85-%D8%B2%D8%A7%D9%86%D9%88-%D8%B2%D8%AF%D9%86%D8%AF" title="ایران 3 – ژاپن 0؛ سامورایی‌ها هم زانو زدند">ایران 3 – ژاپن 0؛ سامورایی‌ها هم زانو زدند</a>
                      </h1>
                      <p class="news-slider--subtitle">تیم ملی والیبال ایران در روزی که 2 بازیکن اصلی خود را به دلیل مصدومیت در اختیار نداشت، با نتیجه 3 بر صفر از سد ژاپن گذشت.</p>
                    </div>
                  </div>

                </div>
              </div>*/}



              <div class="owl-item cloned" >
                <div class="news-slider-item item">

                  <div class="col-sm-6 col-xs-12 pull-right image-area-wrapper">
                    <div class="news-slider--image-container">
                      <div class="news-slider--image-area">
                        <a rel="bookmark" href="/news/9X790/%D8%AA%D8%A7%D8%AC-%DA%A9%DB%8C-%D8%B1%D9%88%D8%B4-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%AD%D8%B1%D9%81%D8%B4-%D8%B1%D8%A7-%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA-%DA%A9%D9%86%D8%AF" title="تاج: کی روش باید حرفش را اثبات کند">
                          <img src="https://static.farakav.com/files/pictures/01411817.jpg?h=192" alt="تاج: کی روش باید حرفش را اثبات کند" width="246" height="150"/>
                        </a>
                        <div class="news-slider--caption show">
                          <div class="news-slider--time-area"><i class="varzesh3-icon-time"></i> 7 ساعت پیش</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-xs-12">
                    <div class="news-slider--text-container">
                      <div class="news-slider--rutitle">داماش صد درصد به خاطر داوری حذف شد</div>
                      <h1 class="news-slider--title">
                        <a rel="bookmark" href="/news/9X790/%D8%AA%D8%A7%D8%AC-%DA%A9%DB%8C-%D8%B1%D9%88%D8%B4-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%AD%D8%B1%D9%81%D8%B4-%D8%B1%D8%A7-%D8%A7%D8%AB%D8%A8%D8%A7%D8%AA-%DA%A9%D9%86%D8%AF" title="تاج: کی روش باید حرفش را اثبات کند">تاج: کی روش باید حرفش را اثبات کند</a>
                      </h1>
                      <p class="news-slider--subtitle">رئیس فدراسیون فوتبال امروز در یک نشست خبری درباره مسایل مهمی که در فوتبال ایران رخ داده است صحبت کرد و در آغاز صحبت هایش به ماجرای بازی پرحاشیه فینال جام حذفی پرداخت.</p>
                    </div>
                  </div>

                </div>
              </div>



            </div>
          </div>

          <div class="owl-nav">
            <div class="owl-prev"></div>
            <div class="owl-next"></div>
          </div>

          <div class="owl-dots">
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot active"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
          </div>


        </div>
      </div>

    );

  }

}

export default ImageSlider;
