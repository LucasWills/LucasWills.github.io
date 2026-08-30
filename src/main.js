import '/style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import QCW1_RoofHit from './assets/QCW1_RoofHit.png'

import HV_collage from './assets/HV_category_collage.png'



document.querySelector('#app').innerHTML = /*html*/`



<!-- top header stuff -->

<h style="text-align: left">Lucas Wills</h>

<section id="center">
  <h1>Welcome to my [WORK IN PROGRESS] Hobby Site!</h1>
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
        <li><a href="/HV/DRSSTC/">DRSSTC 1</a> - 2.375" diameter dual-resonant solid state tesla coil, acieved 2 foot arcs.</li>
        <li><a href="/HV/MiscSSTCs/">Misc. SSTCs</a> - [PAGE WIP] Other solid state tesla coil projects.</li>

        <b class="page-list-category">High-Frequency Solid State Tesla Coils (Megahertz range)</b>
        <li><a href src="/">Self-Oscillating HFSSTCs</a> - [PAGE INCOMPLETE] HFSSTCs with the classic "driverless" setup.</li>
        <li><a href src="/">Fixed Frequency HFSSTCs</a> - [PAGE INCOMPLETE] HFSSTCs tuned for fixed frequency drivers.</li>
        <li><a href src="/">Interrupted PLL Driven HFSSTC</a> - [PAGE INCOMPLETE] A very unique PLL driven coil giving short, curly arcs!</li>

        <b class="page-list-category">Inductively-Coupled Plasma (ICP)</b>
        <li><a href src="/">Plasma Toroid</a> - [PAGE INCOMPLETE] Beautiful rings of inductively coupled plasma in low pressure xenon.</li>
        <li><a href src="/">Radio Frequency HV Oscillator for ICP</a> - [PAGE INCOMPLETE] A simple RF oscillator capable of several hundred watts!</li>
        
        <b class="page-list-category">High Voltage Power Supplies</b>
        <li><a href src="/">Small Ferrite HV Transformers</a> - [PAGE INCOMPLETE] Designing and building small HV transformers using 3D-printing!</li>
        <li><a href src="/">HUGE Ferrite HV Transformer</a> - [PAGE INCOMPLETE] Messing around with a gigantic ferrite core!</li>
        <li><a href src="/">HV Capacitor-Charging-Power-Supply</a> - [PAGE INCOMPLETE] Simple short-circuit proof series-loaded-resonant converter for high voltage capacitors.</li>

        <b class="page-list-category">Misc. High Voltage</b>
        <li><a href src="/">ZVS Drivers</a> - [PAGE INCOMPLETE] Various sizes and shapes of the classic ZVS driver.</li>


      </ul>
    </div>  
    <div>
      <img src="${HV_collage}" class="category-img"/>
      <p style="font-size: 12px">Clockwise from top left: plasma toroid, QCWDRSSTC, Fixed-frequency HFSSTC, DRSSTC 1</p>
    </div>
    
  </div>


  <div class="div-line"></div>

  <div class="category">
    <div>
      <h2><b>Misc. Electronics</b></h2>

      <ul class="page-list">
        <b class="page-list-category">Power Electronics and Related</b>
        <li><a href="/HV/QCW1/">Big SMPS</a> - [PAGE INCOMPLETE] Adjustable power supply giving 3-80V at up to 1.5kW</li>
        <li><a href="/HV/QCW1/">1V Protected Boost Converter</a> - [PAGE INCOMPLETE] A small boost converter to efficiently power a 3.3V microcontroller from a single 1.2V NiMH cell</li>


        <b class="page-list-category">Radio Frequency Experiments</b>
        <li><a href src="/">13.56MHz ISM Generator</a> - Generates a strong 13.56MHz signal using a class E topology. Mostly just an experiment</li>

      </ul>
    </div>  
    <div>
      <!-- <img src="${HV_collage}" class="category-img"/>
      <p style="font-size: 12px">Clockwise from top left: plasma toroid, QCWDRSSTC, Fixed-frequency HFSSTC, DRSSTC 2</p> -->
    </div>
    
  </div>
  
  <div class="div-line"></div>

    <div class="category">
    <div>
      <h2><b>Chemistry</b></h2>

      <ul class="page-list">
        <b class="page-list-category">Inorganic Chemistry</b>
        <li><a href="/HV/QCW1/">Sodium Metal</a> - [PAGE INCOMPLETE] Reduction of NaOH with magnesium catalyzed by alcohol.</li>
        <li><a href="/HV/QCW1/">Nitric Acid</a> - [PAGE INCOMPLETE] Preparation of nitric acid.</li>
        <li><a href="/HV/QCW1/">Sodium Nitrite</a> - [PAGE INCOMPLETE] Room temperature preparation of pure NaNO2 with zinc.</li>
        <li><a href="/HV/QCW1/">Sodium Chlorate</a> - [PAGE INCOMPLETE] A simple chlorate cell using MMO and titanium.</li>


        <b class="page-list-category">Organic Synthesis</b>
        <li><a href src="/">1,4-Dioxane</a> - [PAGE INCOMPLETE] Dioxane synthesis by dehydration of ethylene glycol.</li>
        <li><a href src="/">Tert-Butanol</a> - [PAGE INCOMPLETE] t-Butanol synthesis by hydrolosis of t-Butyl Acetate solvent.</li>
        <li><a href="/HV/QCW1/">Benzaldehyde</a> - [PAGE INCOMPLETE] Oxidation of benzyl alcohol by nitric acid.</li>


        <b class="page-list-category">Extractions</b>
        <li><a href src="/">Dichloromethane</a> - [PAGE INCOMPLETE] DCM extraction from paint stripper.</li>

        
        <b class="page-list-category">Chemistry Equipment</b>
        <li><a href src="/">Aspirator Vacuum Pump</a> - [PAGE INCOMPLETE] A 3D-printed aspirator pump capable of pulling down to 50mBar.</li>

      </ul>
    </div>  
    <div>
      <!-- <img src="${HV_collage}" class="category-img"/>
      <p style="font-size: 12px">Clockwise from top left: plasma toroid, QCWDRSSTC, Fixed-frequency HFSSTC, DRSSTC 2</p> -->
    </div>
    
  </div>

  <div class="div-line"></div>

  <div class="category">
    <div>
      <h2><b>Robotics</b></h2>

      <ul class="page-list">
        <b class="page-list-category">TODO</b>
        <li><a href="/HV/QCW1/">TODO</a> - nothing here yet!</li>


      </ul>
    </div>  
    <div>
      <!-- <img src="${HV_collage}" class="category-img"/>
      <p style="font-size: 12px">Clockwise from top left: plasma toroid, QCWDRSSTC, Fixed-frequency HFSSTC, DRSSTC 2</p> -->
    </div>
    
  </div>

  <div class="div-line"></div>

  <div class="category">
    <div>
      <h2><b>Other Fun Stuff</b></h2>

      <ul class="page-list">
        <b class="page-list-category">Computer Engineering and Digital Logic</b>
        <li><a href="/HV/QCW1/">Functioning Computer in Logisim</a> - [PAGE INCOMPLETE] A fully functional 8-bit computer capable of playing simple games.</li>

        <b class="page-list-category">Exploits in Games</b>
        <li><a href="/HV/QCW1/">Abusing Race Conditions in Minecraft</a> - [PAGE INCOMPLETE] Doing things that you definitely aren't supposed to do.</li>


      </ul>
    </div>  
    <div>
      <!-- <img src="${HV_collage}" class="category-img"/>
      <p style="font-size: 12px">Clockwise from top left: plasma toroid, QCWDRSSTC, Fixed-frequency HFSSTC, DRSSTC 2</p> -->
    </div>
    
  </div>

  <div class="div-line"></div>

</section>

<div class="div-line"></div>

<div class="footer">Updated 8/15/2026</div>

`
