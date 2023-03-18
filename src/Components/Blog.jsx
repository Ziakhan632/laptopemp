import React from 'react'
import Blogcard from './Blogcard'
import Blogbenefits from './Blogbenefits'

const Blog = () => {
    return (
        <>
            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <Blogcard />
                    <Blogbenefits />                </div>    
            </section>

        </>
    )
}

export default Blog