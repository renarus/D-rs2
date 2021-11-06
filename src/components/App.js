import React from 'react'
import Card from './Card'
import img1 from '../img/slide01.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/1.jpg'
const App = () => {
    return (
        <div>
            <section className='section1'>
         <div className="texts ">
             <div className="text1"> <p>Populate this marketing banner to advertise a special promotion such as: Save 20% this weekend!</p></div>
             <div className="text2 container ">
            <h6><i class="fas fa-headphones "></i>       Call us at 123-456-7890 - contact@example.com</h6>
            <h6><i class="fas fa-map-marker-alt"></i>   Acme Widgets 123 Widget Street Acmeville, AC 12345</h6>
            <p>Sign in or Register </p>
             </div>
             <div className="text3 container">
                 <h2 >ELECTRONICS</h2>
                <div className="input"><input type="search" /><button><i class="fas fa-search"></i></button></div>
                <div className="icons"><div className="icon1"><i class="fas fa-gift"></i></div>  <div className="icon1"><i class="fas fa-shopping-cart"></i></div></div>
             </div>
             </div> 
             <div className="square container">
                 
                 <table>
                   <tr className="ftr container" >CATEGORIES  <i class="fas fa-list"></i>
                   </tr>
                   <tr className="all container">DIGITAL   <i class="fas fa-chevron-down"></i></tr>
                   <tr className="all container">ENTERTAINMENT</tr>
                   <tr className="all container">JEWELRY</tr>
                   <tr className="all container">ELECTRONICS</tr>
                   <tr className="all container">FASHION   <i class="fas fa-chevron-down"></i></tr>
                   <tr className="all container">FURNITURE(DEMO FULLWIDTH)  <i class="fas fa-chevron-down"></i></tr>
                   <tr className="all container">SPORT</tr>
                   <tr className="all container">UTILITY</tr>
                 </table>
                 <div className="table2crs">
                 <div className="table2">
                   <td  className="container">SHIPPING & RETURNS</td>
                   <td  className="container">CONTACT US</td>
                   <td  className="container">BLOG</td>
                   <td  className="container">RSS SYNDICATION</td>
                   </div>
                   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
        </div>
        <div className="carousel-inner crs">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
             </div>
             </div>
          </section>
          <div className="container">
          <div className="row d-flex justify-content-between ">
             <div className="col-3"> <Card  img='	https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner01.svg
' title='FREE TO DELIVERY' desc='Lorem ipsum dolor sit amet, consectetur  adipisicing elit sed do eiusmod tempor incididunt' btn='SHOW NOW' mycls="btn btn-primary"/>
</div>
<div className="col-3 ">      <Card img='https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner02.svg
' title='DAYS FREE RETURNS' desc='Lorem ipsum dolor sit amet, consectetur  adipisicing elit sed do eiusmod tempor incididunt' />
</div>
<div className="col-3">             <Card img='https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner03.svg
' title='CASH ON DELIVERY' desc='Lorem ipsum dolor sit amet, consectetur  adipisicing elit sed do eiusmod tempor incididunt' />
</div>
          </div>
          </div>

        </div>
    )
}

export default App
