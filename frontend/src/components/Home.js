import React from "react";
import profile from "../images/Passbild.jpg"
import "../App.css"


export default function Home() {
  return (
   <div>
     
     <h1>I'm Abdilkani a Web Developer.</h1>
     <img src={profile} className="profile" alt="" />

     
     <p>I am a Full-stack Web Developer with some experience of Wordpress sites , custom websites and have entery level experience .
</p>
<p>I ❤️ coffee and coding.</p>
<h3>Technologies i use </h3>
     <div className="box">
       <img src="https://snetts.com/wp-content/uploads/2021/03/snettscom-gearing-up-for-html5.jpg" alt="" />
       <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" alt="" />
       <img src="https://blog.logrocket.com/wp-content/uploads/2021/03/javascript-php-developers.png" alt="" />
       <img src="https://reactjs.org/logo-og.png" alt="" />
       <img src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png?fit=1240%2C700&ssl=1" alt="" />
       <img src="https://cdn.buttercms.com/6IOYf3uRJMGxcpXMTswN" alt="" />
       <img src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-social.png" alt="" />
       <img src="https://www.influxdata.com/wp-content/uploads/GitHub-logo.jpg" alt="" />
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png" alt="" />
       <img src="https://cdn1.vogel.de/unsafe/fit-in/1000x0/images.vogel.de/vogelonline/bdb/1494700/1494776/original.jpg" alt="" />
     </div>
     <h2>Get in Touch</h2>
     <h3>If you would like to have Modern Website feel free to contact me .</h3>
     <p>Adress: 35578 Wetzlar</p>
     <p>Tel:+491771665824</p>
     <a class="btn" href="mailto:cmisomtech@gmail.com">CONTACT ME</a>
   </div>

  );
}