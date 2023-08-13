import React from 'react'

const Blog = () => {
  return (
    <div>
       <div className="services">
                <div className="section-header">
                    <h2>LATEST NEWS</h2>
                    <div className="text-large">Check out our latest news and activities</div>
                    <div className="line-border"></div>
                </div>
                <div className='blog-1'>
                    <div className='blog-2'>
                        <img src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c32085b166809064187a9c_news-thumb-3.jpg" alt="" />
                    
                    <h3>Tempor incidunt labore dolor</h3>
                     <div  className='blog-3'>August 24, 2016</div>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a className='blog-4' href="#">
                     <div>READ MORE</div>
                     <div><i class="fa-solid fa-arrow-right"></i></div>
                    </a> 
                </div>


                
                    <div className='blog-2'>
                        <img src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3296d60b164041bc35522_news-thumb-2.jpg" alt="" />
                    
                     <h3>Eiusmod tempor labore aliqua</h3>
                    <div  className='blog-3'>August 20, 2016</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className='blog-4' href="#">
                     <div>READ MORE</div>
                     <div><i class="fa-solid fa-arrow-right"></i></div>
                    </a>
                 
                   </div>

                
                    <div className='blog-2'>
                        <img src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c329d28f74bc0349ef7f33_news-thumb-1.jpg" alt="" />
                    
                    <h3>Conseqntur distinctio ipsum</h3>
                    <div  className='blog-3'>August 18, 2016</div>
                    <p>Aenean commodo ligula eget dolor sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <a className='blog-4' href="#">
                     <div>READ MORE</div>
                     <div><i class="fa-solid fa-arrow-right"></i></div>
                    </a> 
                    </div>
                </div>
                <div className='blog-5'>
                    <button><a href="#">READ OUR BLOG</a></button>
                </div>
        </div>        
    </div>
  )
}

export default Blog
