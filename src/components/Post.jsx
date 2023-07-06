import React from 'react'
import '../App.css'

export default function Post() {
  return (
    <>
    <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1688320097436-a20f0b5ba1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
        </div>
        <div className="text">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">Amar J</a>
            <time>2023-07-05 14:51</time>
          </p>
          <p className='summary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae dolor illo in natus necessitatibus dolore. Eaque consequuntur, exercitationem numquam adipisci obcaecati molestiae laborum dolor et, ex nemo praesentium ea?</p>
        </div>
    </div>
    </>
  )
}
