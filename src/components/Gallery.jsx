import React from "react"
function Gallery(){
    return(
<div className="container">
    <h1 className="text-center ">Gallery</h1>
    <div className="row">
        <div className="col-md-4">
            <img src="https://i.pinimg.com/474x/f2/53/43/f253438604294c88db8c6a54626cd98f.jpg"className="galleryImg" alt="" />
        </div>
        <div className="col-md-4">
            <img src="https://i.pinimg.com/474x/8d/17/5d/8d175dd9f2c6fd7acd2f630ee5c36a9d.jpg" className="galleryImg" alt="" />
        </div>
        <div className="col-md-4">
            <img src="https://i.pinimg.com/736x/f8/32/cb/f832cbbe1a009e0c11b9442b183d386a.jpg" className="galleryImg" alt="" />
        </div>

    </div>
</div>
    )
}
export default Gallery