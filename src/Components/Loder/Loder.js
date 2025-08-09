import React from 'react'
import {FadeLoader} from 'react-spinners'
function Loder() {
  return (
    <div
     style={{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh"

     }}
     >
        <FadeLoader color="#14bc30ff" />
    </div>
  )
}

export default Loder