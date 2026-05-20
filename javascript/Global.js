function navOpen() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("nav-bar");
  var z = document.getElementById("topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (y.style.backgroundColor === "rgb(12, 12, 12)") {
    y.style.backgroundColor = "transparent";
  } else {
    y.style.backgroundColor = "rgb(12, 12, 12)";
  }
  if (z.style.height === "100%") {
    z.style.height = "48px";
    z.style.width = "48px";
  } else {
    z.style.height = "100%";
    z.style.width = "100%";
  }
}

class SpecialNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div id="topnav" class="topnav">
  <div id="nav-bar" class="active"></div>
  <!-- Navigation links (hidden by default) -->
  <div id="myLinks" class="w3-animate-top">
    <a href="index.html">Home</a>
    <a href="about.html">About me</a>
    <div class="menu-header">Projects</div>
    <a href="firststeps-case-study.html">First Steps</a>
    <a href="upcoming-case-study.html">Upcoming</a>
    <a href="spaces-case-study.html">Saving Spaces</a>
    <a href="epa-case-study.html">EPA Vic</a>
  </div>
  <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
  <a href="javascript:void(0);" class="icon" onclick="navOpen()">
    <i class="fa fa-bars"></i>
  </a>
</div>
    `;
  }
}
customElements.define("main-nav", SpecialNav);

function navOpen() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("nav-bar");
  var z = document.getElementById("topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (y.style.backgroundColor === "rgb(12, 12, 12)") {
    y.style.backgroundColor = "transparent";
  } else {
    y.style.backgroundColor = "rgb(12, 12, 12)";
  }
  if (z.style.height === "100%") {
    z.style.height = "48px";
    z.style.width = "48px";
  } else {
    z.style.height = "100%";
    z.style.width = "100%";
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
<div class="footer-content">
   <div class="footer-block">
      <div class="footer-menu">
         <div class="workspace-title-text">
            <div class="footer-content-section">
               <div>
                  <div class="footer-name">Nathan Richardson</div>
                  <div class="footer-title">Senior Product Designer</div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer-menu">
         <div class="footer-content-section">
            <div class="footer-menu-header">
               <div class="title-wrapper">
                  <div class="footer-menu-header-section">
                     <div class="footer-menu-header-text">Menu</div>
                  </div>
               </div>
            </div>
            <div class="footer-menu-link-section">
               <a href="index.html" aria-current="page" class="footer-menu-link w-inline-block w--current">
                  <div class="footer-link">Home</div>
               </a>
               <a href="about.html" class="footer-menu-link w-inline-block">
                  <div class="footer-link">About Me</div>
               </a>
            </div>
         </div>
      </div>
      <div class="footer-menu end">
         <div class="footer-content-section">
            <div class="footer-menu-header">
               <div class="title-wrapper">
                  <div class="footer-menu-header-section">
                     <div class="footer-menu-header-text">Projects</div>
                  </div>
               </div>
            </div>
            <div class="footer-menu-link-section">
               <div class="w-dyn-list">
                  <div role="list" class="w-dyn-items">
                     <div role="listitem" class="collection-item-4 w-dyn-item">
                        <a href="firststeps-case-study.html" class="footer-menu-link w-inline-block">
                           <div class="footer-link">First Steps</div>
                        </a>
                     </div>
                     <div role="listitem" class="collection-item-4 w-dyn-item">
                        <a href="upcoming-case-study.html" class="footer-menu-link w-inline-block">
                           <div class="footer-link">Upcoming</div>
                        </a>
                     </div>
                     <div role="listitem" class="collection-item-4 w-dyn-item">
                        <a href="spaces-case-study.html" class="footer-menu-link w-inline-block">
                           <div class="footer-link">Saving Spaces</div>
                        </a>
                     </div>
                     <div role="listitem" class="collection-item-4 w-dyn-item">
                        <a href="epa-case-study.html" class="footer-menu-link w-inline-block">
                           <div class="footer-link">EPA Vic</div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div>
      <div class="footer-contentblock">
         <div class="footer-text">COPYRIGHT 2026 Nathan Richardson</div>
      </div>
   </div>
</div>
      </footer>
    `;
  }
}
customElements.define("main-footer", SpecialFooter);

const observerOptions = {
  threshold: 0.1 // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Stop observing once the animation has played
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Tell the observer to watch all elements with our class
document.querySelectorAll('#fade-in').forEach(el => {
  observer.observe(el);
});
