import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Blog from './Components/Blog';
const Home = () => {
    return (
        <>
            <div className="App">
            <Hero />

                
                <div className="banner-section spad">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-banner">
                                    <img src="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="" height='225px' />
                                    <div className="inner-text">
                                        <h4>Mackbook</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-banner">
                                    <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                    <div className="inner-text">
                                        <h4>Dell</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-banner">
                                    <img src="assets/img/dell-Gi3iUJ1FwxI-unsplash.jpg" alt="" />
                                    <div className="inner-text">
                                        <h4>Hp</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="women-banner spad">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="product-large set-bg" data-setbg="assets/img/women-large.jpg">
                                    <h2>Laptops</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-1">
                                <div className="filter-control">
                                    <ul>
                                        <li className="active">Default</li>
                                        <li>Hp</li>
                                        <li>Dell</li>
                                        <li>Thinkpad</li>
                                    </ul>
                                </div>
                                <div className="product-slider owl-carousel">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="sale">Sale</div>
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Dell</h5>
                                            </a>
                                            <div className="product-price">
                                                $300.00
                                                <span>$350.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Dell</h5>
                                            </a>
                                            <div className="product-price">
                                                $1300.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Dell</h5>
                                            </a>
                                            <div className="product-price">
                                                $340.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Dell</h5>
                                            </a>
                                            <div className="product-price">
                                                $340.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="deal-of-week set-bg spad" data-setbg="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg">
                    <div className="container">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Deal Of The Week</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                                    consectetur adipisicing elit </p>
                                <div className="product-price">
                                    $35.00
                                    <span></span>
                                </div>
                            </div>
                            <div className="countdown-timer" id="countdown">
                                <div className="cd-item">
                                    <span>56</span>
                                    <p>Days</p>
                                </div>
                                <div className="cd-item">
                                    <span>12</span>
                                    <p>Hrs</p>
                                </div>
                                <div className="cd-item">
                                    <span>40</span>
                                    <p>Mins</p>
                                </div>
                                <div className="cd-item">
                                    <span>52</span>
                                    <p>Secs</p>
                                </div>
                            </div>
                            <a href="#" className="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="man-banner spad">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="filter-control">
                                    <ul>
                                        <li className="active">Default</li>
                                        <li>Hp</li>
                                        <li>Dell</li>
                                        <li>ThinkPad</li>
                                    </ul>
                                </div>
                                <div className="product-slider owl-carousel">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="sale">Sale</div>
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Hp</h5>
                                            </a>
                                            <div className="product-price">
                                                $240.00
                                                <span>$350.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Hp</h5>
                                            </a>
                                            <div className="product-price">
                                                $130.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Dell</div>
                                            <a href="#">
                                                <h5>Hp</h5>
                                            </a>
                                            <div className="product-price">
                                                $340.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="assets/img/dell-yNvVnPcurD8-unsplash.jpg" alt="" />
                                            <div className="icon">
                                                <i className="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pi-text">
                                            <div className="catagory-name">Laptop</div>
                                            <a href="#">
                                                <h5>Dell</h5>
                                            </a>
                                            <div className="product-price">
                                                $340.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="product-large set-bg m-large" data-setbg="assets/img/man-large.jpg">
                                    <h2>Men’s</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="instagram-photo">
                    <div className="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
                        <div className="inside-text">
                            <i className="ti-instagram"></i>
                            <h5><a href="#">Laptop_Collection</a></h5>
                        </div>
                    </div>
                    <div className="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
                        <div className="inside-text">
                            <i className="ti-instagram"></i>
                            <h5><a href="#">Laptop_Collection</a></h5>
                        </div>
                    </div>
                    <div className="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
                        <div className="inside-text">
                            <i className="ti-instagram"></i>
                            <h5><a href="#">Laptop_Collection</a></h5>
                        </div>
                    </div>
                    <div className="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
                        <div className="inside-text">
                            <i className="ti-instagram"></i>
                            <h5><a href="#">Laptop_Collection</a></h5>
                        </div>
                    </div>
                    <div className="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
                        <div className="inside-text">
                            <i className="ti-instagram"></i>
                            <h5><a href="#">Laptop_Collection</a></h5>
                        </div>
                    </div>
                    <div className="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
                        <div className="inside-text">
                            <i className="ti-instagram"></i>
                            <h5><a href="#">Laptop_Collection</a></h5>
                        </div>
                    </div>
                </div>

                <Blog />
               <div className="partner-logo">
                    <div className="container">
                        <div className="logo-carousel owl-carousel">
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="assets/img/logo-1.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="assets/img/logo-2.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="assets/img/logo-3.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="assets/img/logo-4.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="assets/img/logo-5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
             



            </div>
        </>
    );
}
export default Home;
