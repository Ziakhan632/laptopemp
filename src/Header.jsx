import React from 'react';
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <>
        <header class="header-section">
            <div class="header-top">
                <div class="container">
                    <div class="ht-left">
                        <div class="mail-service">
                            <i class=" fa fa-envelope"></i>
                            LaptopEmporium@gmail.com
                        </div>
                        <div class="phone-service">
                            <i class=" fa fa-phone"></i>
                            +00 00.000.000
                        </div>
                    </div>
                    <div class="ht-right">
                        <Link to="" class="login-panel"><i class="fa fa-user"></i>Login</Link>
                        <div class="lan-selector">
                            <select class="language_drop" name="countries" id="countries" style={{width:"300px"}}>
                                <option value='yt' data-image="assets/img/flag-1.jpg" data-imagecss="flag yt"
                                    data-title="English">English</option>
                                <option value='yu' data-image="assets/img/flag-2.jpg" data-imagecss="flag yu"
                                    data-title="Bangladesh">German </option>
                            </select>
                        </div>
                        <div class="top-social">
                            <Link to=""><i class="ti-facebook"></i></Link>
                            <Link to=""><i class="ti-twitter-alt"></i></Link>
                            <Link to=""><i class="ti-linkedin"></i></Link>
                            <Link to=""><i class="ti-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <div class="logo">
                                <Link to="">
                                    Lap Emp
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7">
                            <div class="advanced-search">
                                <button type="button" class="category-btn">All Categories</button>
                                <div class="input-group">
                                    <input type="text" placeholder="What do you need?" />
                                    <button type="button"><i class="ti-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-right col-md-3">
                            <ul class="nav-right">
                                <li class="heart-icon">
                                    <Link to="">
                                        <i class="icon_heart_alt"></i>
                                        <span>1</span>
                                    </Link>
                                </li>
                                <li class="cart-icon">
                                    <Link to="">
                                        <i class="icon_bag_alt"></i>
                                        <span>3</span>
                                    </Link>
                                    <div class="cart-hover">
                                        <div class="select-items">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="si-pic"><img src="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="" /></td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>$300 x 1</p>
                                                                <h6>Laptop</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="si-pic"><img src="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="" width='200px' /></td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>$300 x 1</p>
                                                                <h6>Laptop</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="select-total">
                                            <span>total:</span>
                                            <h5>$660.00</h5>
                                        </div>
                                        <div class="select-button">
                                            <Link to="" class="primary-btn view-card">VIEW CARD</Link>
                                            <Link to="" class="primary-btn checkout-btn">CHECK OUT</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="cart-price">$150.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-item">
                <div class="container">
                    <div class="nav-depart">
                        <div class="depart-btn">
                            <i class="ti-menu"></i>
                            <span>All Brands</span>
                            <ul class="depart-hover">
                                <li class="active"><Link to="">Hp</Link></li>
                                <li><Link to=''>Dell</Link></li>
                                <li><Link to=''>Lenovo</Link></li>
                                <li><Link to=''>ThinkPad</Link></li>
                                <li><Link to=''>Ipad</Link></li>
                                <li><Link to=''>Haier</Link></li>
                                <li><Link to=''></Link></li>
                                <li><Link to="">Brand Outdoor Apparel</Link></li>
                            </ul>
                        </div>
                    </div>
                    <nav class="nav-menu mobile-menu">
                        <ul>
                            <li class="active"><Link to="/">Home</Link></li>
                            <li><Link to='/product'> Product</Link></li>
                            <li><Link to="">Collection</Link>
                                <ul class="dropdown">
                                    <li><Link to="">Dells</Link></li>
                                    <li><Link to="">Hp</Link></li>
                                    <li><Link to="">ThinkPad</Link></li>
                                    <li><Link to="">Haier</Link></li>
                                    <li><Link to="">MackBook</Link></li>
                                    

                                </ul>
                            </li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="">Contact</Link></li>
                            <li><Link to="">Pages</Link>
                                <ul class="dropdown">
                                    <li><Link to="">Blog Details</Link></li>
                                    <li><Link to="">Shopping Cart</Link></li>
                                    <li><Link to='/checkout'>Checkout</Link></li>
                                    <li><Link to="">Faq</Link></li>
                                    <li><Link to="">Register</Link></li>
                                    <li><Link to='/login'>Login</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </header>
       
        </>
    )
}

export default Header