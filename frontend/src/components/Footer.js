import React from 'react'
import "../App.css"

export default function Footer() {
  return (
    <div className="bottom-container">
       <a className="footer-link" href="https://www.linkedin.com/in/abdilkani-muse-eidle-2312771b4/" target="_blank">LinkedIn</a>
     
    <a className="footer-link" href="https://twitter.com/" target="_blank">Twitter</a>
    <a className="footer-link" href="https://github.com/cmi112">GitHub</a>
    <a class="footer-link" href="/" target="_blank">Website</a>
    <p className="copyright">© {new Date().getFullYear()} Abdilkani Eidle  @  <a href="https://digitalcareerinstitute.org/">DCI.</a></p>
      
    </div>
  )
}
