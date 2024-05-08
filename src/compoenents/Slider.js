function Slider() {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide">
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div className="carousel-inner">
   <div className="carousel-item active">
 <div style={{ backgroundColor: "red", textAlign: "center", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <h1 style={{ color: "white" }}>Welcom</h1>
</div>
</div>
<div className="carousel-item">
<div style={{ backgroundColor: "blue", textAlign: "center", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
<h1 style={{ color: "white" }}>IN</h1>
</div>
</div>
<div className="carousel-item">
<div style={{ backgroundColor: "black", textAlign: "center", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
<h1 style={{ color: "white" }}>OUR PAGE</h1>
</div>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
 </div>
  </>
  );
}
export default Slider;
