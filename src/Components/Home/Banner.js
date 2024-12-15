import React from 'react'

function Banner() {
    const headerImage = "/Assets/Background/banner.jpg";
  return (
    <div>
        <img src={headerImage} alt="Student learning" className="" style={{height: '600px', width: '100%'}}/>

    </div>
  )
}

export default Banner