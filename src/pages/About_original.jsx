import React from 'react';
import './FlipBoxStyles.css'; 
import pravidhiImage from '../assets/images/new/techlogo.webp';
import graphics from '../assets/images/new/kalkriti.webp';
import content from '../assets/images/new/content.webp';
import eductation from '../assets/images/new/eductation.webp';
import research from '../assets/images/new/Anveshan.webp';
import cultural from '../assets/images/new/SANGAM.webp';
import photo from '../assets/images/new/pratibimb.webp';
// import media from '../assets/images/new/Sampreshan.webp';
import blackbg from '../assets/images/new/purple.webp';






const FlipBoxContainer = () => {
  return (
    <div className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center"
            style={{ backgroundImage: `url(${graphics})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Graphics Wing</h3> */}
              {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              <h5><u>Graphical Wing </u></h5>
              <p>Graphics Wings Of Samarth Designs some of the Best graphics design  comprises of Hard Working Member</p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center"
            style={{ backgroundImage: `url(${pravidhiImage})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Technical Wing</h3> */}
               {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Never Sleeps</h3> */}
              <h5><u>Technical Wing </u></h5>
              <p> Forging Tomorrow's Innovators" 🌌
"Tech and inspiration dance in Pravidhi's emblem, a symphony of progress." 🔧🔗
  </p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{ backgroundImage: `url(${content})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Content Wing</h3> */}
              {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Dedicated</h3> */}
              <h5><u>Content Wing </u></h5>
              <p> Chronicles of Creativity" 📚
"Quill and book scribe sagas of eloquence in Prakaran's emblem." 📖✒
</p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{ backgroundImage: `url(${eductation})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Eductation Wing</h3> */}
              {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Dedicated</h3> */}
              <h5><u>Eductation  Wing </u></h5>
              <p>Igniting Minds, Enriching Souls" 🎓
"An open book's torch ignites wisdom in Gyan Darpan's radiant emblem." 📚🔥
</p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{ backgroundImage: `url(${research})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Research Wing</h3> */}
              {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Dedicated</h3> */}
              <h5><u>Research Wing </u></h5>
              <p>Constellations of Curiosity" 🔍
"Curiosity ascends with Anveshan's emblem, a cosmic tapestry of inquiry." 🌠🔮
 </p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>


      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{ backgroundImage: `url(${cultural})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Cultural Wing</h3> */}
              {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Dedicated</h3> */}
              <h5><u>Cultural Wing </u></h5>
              <p> Mosaic of Cultures, Symphony of Unity" 🎉
"Vibrant hues blend cultures in Sangam's emblem, a canvas of harmony." 🌈🎨
 </p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{ backgroundImage: `url(${photo})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Research Wing</h3> */}
              {/* <p>A short sentence describing this callout is.</p> */}
              {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.webp" alt="" className="flip-box-img" /> */}
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
              {/* <h3 className="flip-box-header">Dedicated</h3> */}
              <h5><u>Photography  Wing </u></h5>
              <p>Portraits of Time, Memories Eternally Captured" 📸
 </p>
              {/* <button className="flip-box-button">Learn More</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{ backgroundImage: `url(${media})` }}
          >
            <div className="inner color-white">
              
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{ backgroundImage: `url(${blackbg})` }}
          >
            <div className="inner color-white">
             
              <h5><u>Social Media  Wing </u></h5>
              <p>We Present Samarth in Various Social Media  </p>

            </div>
          </div>
        </div>
      </div> */}
     
    </div>

    
  );
  
};

export default FlipBoxContainer;
