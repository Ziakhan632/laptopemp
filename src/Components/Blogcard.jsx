import React from 'react'
import Blogapi from './Blogapi'

const Blogcard = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                {
                                Blogapi.map((curElem) => {
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-latest-blog">
                                                    <img src={curElem.img} alt="" />
                                                    <div className="latest-text">
                                                        <div className="tag-list">
                                                            <div className="tag-item">
                                                                <i className="fa fa-calendar-o"></i>
                                                                May 4,2021
                                                            </div>
                                                            <div className="tag-item">
                                                                <i className="fa fa-comment-o"></i>
                                                                5
                                                            </div>
                                                        </div>
                                                        <a href="#">
                                                            <h4>The Best Street Style From London Fashion Week</h4>
                                                        </a>
                                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                    
                </div>

            </div>
        </>
    )
}

export default Blogcard