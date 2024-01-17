import React, { useState } from "react";
import one from "../../assets/jpg/1.jpg";
import two from "../../assets/jpg/2.jpg";
import three from "../../assets/jpg/3.jpg";
import four from "../../assets/jpg/4.jpg";
import five from "../../assets/jpg/5.jpg";
import six from "../../assets/jpg/6.jpg";

function Slider() {
  const nextSlide = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  const prevSlide = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  return (
    <div className="wrapper">
      <div id="slide">
        <div className="item" style={{ backgroundImage: `url(${six})` }}>
          <div className="content">
            <div className="name">Tajmahal</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              illum dicta debitis corporis alias quaerat?
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${two})` }}>
          <div className="content">
            <div className="name">jaipur</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum corporis eligendi pariatur, accusamus maiores!
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${three})` }}>
          <div className="content">
            <div className="name">Kerala</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              amet pariatur suscipit nemo adipisci molestiae?
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${four})` }}>
          <div className="content">
            <div className="name">Himalay</div>
            <div className="des">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis atque iure doloribus aut culpa nostrum?
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${five})` }}>
          <div className="content">
            <div className="name">Manali</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${six})` }}>
          <div className="content">
            <div className="name">Tajmahal</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ducimus amet iste quo repellat placeat!
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${four})` }}>
          <div className="content">
            <div className="name">Himalay</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui amet
              eaque asperiores, repellat commodi dolor?
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
