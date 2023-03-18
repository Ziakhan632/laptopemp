import React from 'react'
import Blog from './Components/Blog'
import Blogcard from './Components/Blogcard'

const Blogpage = () => {
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
                    <Blogcard /><Blogcard /><Blogcard />
                                    </div>    
            </section>

    </>
  )
}

export default Blogpage