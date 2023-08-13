import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="services">
                <div className="section-header">
                    <h2>KEEP IN TOUCH</h2>
                    <div className="text-large">Setibulum rutrum quam vitae fringilla tincidunt</div>
                    <div className="line-border"></div>
                </div>
                <form action="" className='form2'>   
                <div className='form1'>
                     <div className='form-1'>
                      <div className='form-1-2-1'>
                         <input className='form-input w-input' type="text" placeholder='Enter Your First Name' />
                      
                         </div>
                         </div>
                         <div className='form-1'>
                      <div className='form-1-2-1'>
                         <input className='form-input w-input' type="text" name="" id="" placeholder='Enter Your Second name'/>
                         </div>
                         </div>
                     
                     <div className='form-2-1'>
                      <div className='form-1-2'>
                      <input className='form-input w-input' type="text" name="" id="" placeholder='Enter Your Address'/>
                     </div>
                     </div>
                     
                     <div className='form-2-1'>
                      <div className='form-1-2'>
                      <textarea className='text-area w-input' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                     </div>
                     </div>
                    
                </div>
                 <div className='form-button'>
                      <button>SEND MESSAGE</button>
                     </div>
                </form> 
              
              </div>
      </div>
    
  )
}

export default Contact
