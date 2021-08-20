import React from 'react'
import cv from "../images/Lebenslauf-English.pdf"

export default function About() {
  return (
    <div>
      <h1>About Abdilkani</h1>
      <p>I am Web Developer based in Wetzlar Hesse Germany.

I designed and developed wordpress theme for a local business to create a better online presence and increase sign-ups for there business.
I am Fullstact Web developer with Entry Level of Experience
</p>
      <h2>Little Background information about me</h2>
      <article> <p>I am from somalia, I have been in Germany last 7 years.</p>
      <p>I was Student before i came Germany, I have some experience of coding.</p>
      <p>when i came in Germany i joined language course after i joined formal school for one year.</p>
      <p>After the School i started work, i worked the last three years by B&T GROUP Metal processing Company here in Wetzlar..</p>
      <p>During the Pandemic time i redescover My passion of coding. then I started some courses like html,css, and js but only the basics.</p>
      <p>I finnaly joined DCI and learned a lot from there. I will Graduate at the end of 2021 Fullstack Web development from DCI.</p>
</article>

<h2>My Hobbies</h2>
<ul>
  <p>I like sports particulary Football.</p>
  <p>Bike riding for fun.</p>
</ul>
<h2>Daily routine</h2>
<p>Working</p>
<p>Learning</p>
<p>Code</p>
<p>Creating Content on Youtube</p>

<h2>My Goals</h2>
<p>🎯 Fullstack Web Developer.</p>
<p>🎯 Web Application Developer.</p>
<p>🎯 Software Engineer.</p>


<p>Check my CV here <a href={cv}>CV</a>.</p>
    </div>
  )
}
