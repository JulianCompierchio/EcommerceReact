import React from 'react'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className='container-fluid contenedor'>
      <div className="row">
        <h2>Cuentale a un amigo</h2>
          <div className="col-12 d-inline-flex align-items-center justify-content-center social-icons ">
            <a href="#"><img src="https://images2.imgbox.com/56/1e/4OLTv6zu_o.png" alt="Facebook" /></a>
            <a href="#"><img src="https://images2.imgbox.com/62/88/GcDqQAkT_o.png" alt="Instagram" /></a>
            <a href="#"><img src="https://images2.imgbox.com/0d/48/2dLdlKVG_o.png" alt="Twitter" /></a>
            <a href="#"><img src="https://images2.imgbox.com/a9/61/oJjbp6i5_o.png" alt="Whats App" /></a>
            <a href="#"><img src="https://images2.imgbox.com/aa/1c/jpJR5jKn_o.png" alt="Messenger" /></a>
            <a href="#"><img src="https://images2.imgbox.com/87/f2/aY116FZt_o.png" alt="Tik-Tok" /></a>
          </div>
      </div>
    </div>
  )
}

export default SocialMedia