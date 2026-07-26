import '/style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import QCW1_RoofHit from './assets/QCW1_RoofHit.png'


document.querySelector('#app').innerHTML = /*html*/`



<!-- top header stuff -->

<h style="text-align: left">Lucas Wills</h>

<section id="center">
  <h1>Welcome to my WORK IN PROGRESS Hobby Site!</h1>
  <!-- <a href="/login/">login</a> -->
</section>




<!-- categories -->


<section id="categories-list">
  <h1>Categories</h1>

  <div class="div-line"></div>

  <div class="category">
    <div>
      <h2><b>High Voltage Electronics</b></h2>

      <ul class="page-list">
        <b class="page-list-category">Tesla Coils (Kilohertz range)</b>
        <li><a href="/HV/QCW1/">QCWDRSSTC</a> - Quasi-Continuous Wave solid state tesla coil, achieved 6 foot arcs!</li>
        <li><a href="/">DRSSTC 2</a> - 2.5" diameter dual-resonant solid state tesla coil, acieved 2 foot arcs.</li>
        <li><a href="/">Misc. SSTCs</a> - Other solid state tesla coil projects.</li>

        <b class="page-list-category">High-Frequency Solid State Tesla Coils (Megahertz range)</b>
        <li><a href src="/">Self-Oscillating HFSSTCs</a> - HFSSTCs with the classic "driverless" setup.</li>
        <li><a href src="/">Fixed Frequency HFSSTCs</a> - HFSSTCs tuned for fixed frequency drivers.</li>
        <li><a href src="/">Interrupted PLL Driven HFSSTC</a> - A very unique PLL driven coil giving short, curly arcs!</li>

        <b class="page-list-category">Inductively-Coupled Plasma (ICP)</b>
        <li><a href src="/">Plasma Toroid</a> - Beautiful rings of inductively coupled plasma in low pressure xenon.</li>
        <li><a href src="/">Radio Frequency HV Oscillator for ICP</a> - A simple RF oscillator capable of several hundred watts!</li>
        
        <b class="page-list-category">High Voltage Power Supplies</b>
        <li><a href src="/">Small Ferrite HV Transformers</a> - Designing and building small HV transformers using 3D-printing!</li>
        <li><a href src="/">HUGE Ferrite HV Transformer</a> - Messing around with a gigantic ferrite core!</li>
        <li><a href src="/">HV Capacitor-Charging-Power-Supply</a> - Simple short-circuit proof series-loaded-resonant converter for high voltage capacitors.</li>

        <b class="page-list-category">Misc. High Voltage</b>
        <li><a href src="/">ZVS Drivers</a> - Various sizes and shapes of the classic ZVS driver.</li>


      </ul>
    </div>  
    <img src="${QCW1_RoofHit}" class="category-img"/>
  </div>


  <div class="div-line"></div>

  <div class="category">
    <div>
      <h2><b>Other Electronics</b></h2>

      <ul class="page-list">
        <b class="page-list-category">Switched-Mode Power Supplies and Other Power Electronics</b>
        <li><a href="/HV/QCW1/">TODO</a> - TODO</li>


      
      </ul>
    </div>
  </div>
  
  <div class="div-line"></div>

  <div class="category">
    <h2>Robotics</h2>
  </div>

  <div class="div-line"></div>

  <div class="category">
    <h2>Chemsitry</h2>
  </div>

  <div class="div-line"></div>

  <div class="category">
    <h2>Programming</h2>
  </div>

  <div class="div-line"></div>

</section>

<div class="div-line"></div>

`
