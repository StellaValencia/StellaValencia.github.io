document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    const App = () => {
        return `
            <div>
            
            </div>
        `;
    };

    rootElement.innerHTML = App();
});




  // Banner component
  function renderBanner() {
    const bannerElement = document.getElementById("banner");
    bannerElement.innerHTML = `
<nav class="navbar-brand">
  <div class="navbar-container">
    <span class="navbar-text">
      <img href="" src="assets/img/logo.png" alt="Logo" style="width: 20%; width="40px"; height="40px"; class="d-inline-block align-top">
     
    <div class="ms-auto social-icon">
      <a href="https://www.linkedin.com/https://www.linkedin.com/in/stella-valencia-3484ii34" target="blank"><img src="assets/img/linkedin.png" alt="LinkedIn"></a>
      <a href="https://twitter.com/" target="blank"><img src="assets/img/twitter.png" alt="Twitter"></a>
      <a href="https://github.com/StellaValencia" target="blank"><img src="assets/img/github.png" alt="GitHub"></a>
    </div>
      
    <button class="btn btn-secondary dropdown-toggle vvd" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      <span>Let's Connect</span></button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#projects">Projects</a></li>
          <li><a class="dropdown-item" href="#footer">Contacts</a></li>
        </ul>
      </span>
  </div>
</nav>
    
<section class="banner" id="home">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xs-12 col-md-6 col-xl-7 animate__animated animate__fadeIn">
        <span class="tagline">Welcome to my Portfolio</span>
          <h1>Hi! I'm Stella Valencia</h1>
            <p>I am the founder of Valencia io, a London-based software development company. With a Master’s degree in Software Engineering and a specialization in backend development using PHP Symfony, I am passionate about turning business ideas into reality through innovative and tailored development solutions.</p>
            
            <button class="button"><a href="#footer" style="display: block;"><span>Get a Quote</a></span></button>
      </div>
      
      <div class="col-xs-12 col-md-6 col-xl-5 animate__animated animate__zoomIn">
        <img src="assets/img/header-img.png" alt="Header Img">
      </div>
      </div>
</section>
              
<section class="project" id="projects">
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Projects</h2>
          <p>I have experience working on backend module projects developed with PHP Symfony. Additionally, I have worked on full-stack PHP Symfony projects, using technologies such as HTML5, CSS, MySQL, MariaDB, and JavaScript. Some of these projects involved integrating open APIs for applications like COVID-19 data tracking and currency exchange rates. You can find links to these projects, along with prototypes, on my GitHub repositories and project website. Currently, I am also developing hybrid web and mobile applications using Flutter. Feel free to stay updated on my latest projects by exploring my GitHub repositories.</p>
          
          <ul class="link-list">
            <li><a href="https://www.valenciaio.com" target="_blank"><p>Valencia IO</p></a></li>            
            <li><a href="http://www.hap-tr.com" target="_blank"><p>HAP Teknoloji Haber Portali</p></a></li>
            <li><a href="https://www.covid-19-track/valenciaio.com" target="_blank"><p>Covid-19 Track</p></a></li>
            <li><a href="https://www.currency-exchange/valenciaio.com" target="_blank"><p>Live Currency Exchange</p></a></li>
            <li><a href="https://github.com/" target="_blank"><p>London Attractions</p></a></li>
            <li><a href="https://github.com/" target="_blank"><p>Currency Exchange</p></a></li>
          </ul>

        <div id="projects-tabs">
          <ul class="nav nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            
            <li class="nav-item"><a class="nav-link active" id="first-tab" data-bs-toggle="pill" href="#first" role="tab" aria-controls="first" aria-selected="true"><img src="assets/img/softwarecode.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a></li>     
            <li class="nav-item"><a class="nav-link" id="second-tab" data-bs-toggle="pill" href="#second" role="tab" aria-controls="second" aria-selected="false"><img src="assets/img/webdevelopment.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a></li>
            <li class="nav-item"><a class="nav-link" id="third-tab" data-bs-toggle="pill" href="#third" role="tab" aria-controls="third" aria-selected="false"><img src="assets/img/consultant.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a></li>
          </ul>
        
          <div class="tab-content" id="pills-tabContent">
            
            <div class="tab-pane fade" id="first" role="tabpanel" aria-labelledby="first-tab">
              <div class="proj-imgbx">
                <a href="https://github.com/StellaValencia" target="_blank"><img src="assets/img/project-img5.jpg" alt="title" /></a>
              </div>
              
              <h2>Software Development</h2>
                <p>Specializing in backend and full-stack development, I have experience in building robust software solutions using technologies like PHP Symfony, SQL (MySQL and MariaDB), and Flutter for hybrid web and mobile applications. My expertise extends to integrating open APIs and delivering tailored software solutions to meet business needs.</p>
            </div>
                              
            <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
              <div class="proj-imgbx">
                <a href="https://github.com/StellaValencia" target="_blank"><img src="assets/img/project-img1.jpg" alt="title" /><a/>
              </div>
              
              <h2>Web Development</h2>
                <p>With proficiency in full-stack web development, I create dynamic and responsive websites using PHP Symfony, HTML5, CSS, and JavaScript. From database management to front-end design, I ensure seamless user experiences and scalable web solutions.</p>
            </div>
                      
            <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
              <div class="proj-imgbx">
                <img src="assets/img/project-img6.jpg" alt="title" />
              </div>

              <h2>Technology Consulting</h2>
                <p>I offer technology consulting services to startups and established companies, providing strategic advice on web projects, software development processes, and technology adoption. I help businesses refine their technology strategies, optimize workflows, and implement innovative solutions tailored to their goals.</p>
                <ul class="link-list">
                  <li><a href="https://github.com/StellaValencia/" target="_blank"><p>-----</p>.</a></li>
                  <li><a href="https://github.com/StellaValencia/" target="_blank"><p>-----</p></a></li>

                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="skill" id="skills">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="skill-bx wow zoomIn">
          <h2>Skills</h2>
            <p>As a backend software engineer, I specialize in working with the PHP Symphony. I develop modern and user-friendly websites, as well as full-stack web applications, using Flutter, HTML5, CSS3, and JavaScript. I tailor these solutions to meet my clients' specific requirements and consult them on their technology needs. Additionally, I have a strong proficiency in SQL and database management.</p>
          
          <div id="skill-slider" class="owl-carousel owl-theme skill-slider">
            <div class="item">
              <h5>Software Engineering</h5>
                <img src="assets/img/meter1.png" alt="Image" />  
            </div>

            <div class="item">
              <h5>Web Development</h5>
                <img src="assets/img/meter2.png" alt="Image" />
            </div>

            <div class="item">
              <h5>Technology Consultant</h5>
                <img src="assets/img/meter3.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</section>

<section>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="footer-social-icon ms-auto">
            <span>
              <img href="" src="assets/img/logo.png" alt="Logo" style="width: 20%; width="30" height="30" ">
            </span>
            <div class="image">
              <a href="mailto:stellavalenciaa@hotmail.com">
                <img src="assets/img/email.png" alt="Email">
              </a>
              <a href="https://wa.me/+4474" target="blank">
                <img src="assets/img/whatsapp.png" alt="Whatsapp">
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <p class="text-center text-sm-end">Copyright 2018. All Rights Reserved by Stella Valencia</p>
        </div>
      </div>
    </div>
  </footer>
</section>

`;


const customContainerStyle = `
.container {
    margin-top: 5px; 
}
`;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = customContainerStyle;
    bannerElement.appendChild(styleElement);

  }



  function renderContact() {
    const contactElement = document.getElementById("contact");
    contactElement.innerHTML = `
      <div>
        <!-- Your contact form or information here -->
      </div>`;
  }
  
 
  function renderFooter() {
    const footerElement = document.getElementById("footer");
    footerElement.innerHTML = `
      <footer>
        <!-- Your footer content here -->
      </footer>`;
  }
  

  function renderApp() {

    renderBanner();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
  }
  

  renderApp();
  
