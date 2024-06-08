import React from 'react'
import FadeLoader from "react-spinners/FadeLoader"
function Loader() {
  return (
    <div>
         <div className="position-absolute top-50 start-50 translate-middle">
            <FadeLoader color="#36d7b7" />
          </div>
    </div>
  )
}

export default Loader