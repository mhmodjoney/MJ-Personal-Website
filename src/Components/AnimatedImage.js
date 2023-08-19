import React from 'react'
let profilepic = "images/profile_pic.jpg" ;

export default function AnimatedImage() {
  return (
     <img
              className="mj-profile-pic"
              src={profilepic}
              alt="mj Profile Pic"
            />
  )
}
