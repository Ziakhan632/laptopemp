import React from 'react'

import '../Products/product.css'

const Product = () => {
    return (
        <>
            <div className="container">
                <br /><br />
                <div className="header">
                    <h3>products</h3>
                    <br />
                    <br />
                </div>
                <div className="row">
                    <div className="col-lg-4"><div className="product">
                        <div className="image">
                            <img src="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="" />
                        </div>
                        <div className="namePrice">
                            <h3>Laptop</h3>
                            <span>$ 1500.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="bay">
                            <button>Buy now </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4"><div className="product">
                        <div className="image">
                            <img src="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="" />
                        </div>
                        <div className="namePrice">
                            <h3>Laptop</h3>
                            <span>$ 1500.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="bay">
                            <button> Buy now </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4"><div className="product">
                        <div className="image">
                            <img src="assets/img/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="" width="100%" />
                        </div>
                        <div className="namePrice">
                            <h3>Laptop</h3>
                            <span>$ 1500.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="bay">
                            <button> Buy now </button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default Product