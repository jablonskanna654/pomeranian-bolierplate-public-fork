import React from 'react';
import './style.css';
import fox from './fox.jpg';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
const FigmaFloatDesign = () => {

  return (
    <>
      <div className="container">&gt; BLOG &gt; ĆWICZENIE</div>
      <p className="firstA">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        <p className="firstB">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </p>
      <p className="comment-up">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="second">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.</p>
      <img className="fox" src={fox} alt="fox (d) view" />
      <p className="comment-down">zapisz na później</p>
      <p className="pink-frame">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="gray-frame">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
      </p>
      <button>zapisz na później</button>
      <p className="white-frame">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestie a iaculis at. Dictum varius duis at consectetur lorem
        donec. Sit amet dictum sit amet justo. Fringilla phasellus faucibus
        scelerisque eleifend donec. Elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum posuere. Arcu dictum varius duis at
        consectetur lorem. Massa ultricies mi quis hendrerit.
        <br />
        <br />
        Leo vel orci porta non pulvinar neque laoreet. In egestas erat imperdiet
        sed euismod nisi porta lorem. Ut porttitor leo a diam sollicitudin
        tempor id. Tortor at auctor urna nunc id. Gravida quis blandit turpis
        cursus in. Ornare quam viverra orci sagittis eu. Metus dictum at tempor
        commodo ullamcorper a. Vestibulum mattis ullamcorper velit sed
        ullamcorper morbi. Amet massa vitae tortor condimentum lacinia quis.
        Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Auctor
        elit sed vulputate mi.
      </p>
      <div className='shape square1'></div>
      <div className='shape square2'></div>
      <div className='shape square3'></div>
    </>
   );
};

export default FigmaFloatDesign
