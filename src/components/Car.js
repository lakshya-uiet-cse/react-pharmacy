import React from "react";
// import ""

function Car (){
    
  return (<div className= "carousel">
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active" data-bs-interval="10000">
<img src="https://schmerzkongress2017.de/wp-content/uploads/sites/82/2020/09/Medical_Conference_WEB.jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption d-none d-md-block">
  
  
</div>
</div>
<div className="carousel-item" data-bs-interval="2000">
<img src="https://schmerzkongress2017.de/wp-content/uploads/sites/82/2020/09/T13-Your-Medicine-Prescriptions-f.jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption d-none d-md-block">
  
  
</div>
</div>
<div className="carousel-item">
<img src="https://schmerzkongress2017.de/wp-content/uploads/sites/82/2020/10/medicine-2020.jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption d-none d-md-block">
  
  
</div>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>




</div> 
    );
}

export default Car;