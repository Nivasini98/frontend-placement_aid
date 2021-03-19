import React from 'react'

const Carosal = () =>
{
return(
<div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img
              class="d-block w-100"
              src="https://www.amity.edu/aibs/images/placement.jpg"
              alt="First slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://servicestrategies.com/wp-content/uploads/Training_2.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://www.kotak.com/content/dam/Kotak/herosliderbanner/corporate-benifits-for-online-lead.jpg"
              alt="Third slide"
            ></img>
          </div>
        </div>
      </div>
);
};

export default Carosal;