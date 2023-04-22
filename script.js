let jsondata;
let json = fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json')
json.then((response) => { 
  return response.json()
}).then((response) => {
  jsondata = response;
})

function getCountryByState(statename) {
  for (let i = 0; i < jsondata.length; i++) {
    const state = jsondata[i].states.find(s => s.name.toLowerCase().includes(statename.toLowerCase()));
    if (state) {
      return jsondata[i].name;
    }
  }
  return null;
}

let popupcontainer = document.getElementById("popupcontainer");
let popup = document.getElementById("popup");
function Clear(){
  document.getElementById('textbox').value='';
  document.getElementById('textbox2').value='';
  location.href="#"
  popupcontainer.classList.add("nopopup");
  popup.classList.add("nopopup");
}


function search() {
  if(event.keyCode == 13) {
      location.href="#gotojobs";
  }
}

const openfunction =()=>{
  navbar = document.getElementsByClassName('lists');
  navbar[0].classList.toggle('open');
  popupcontainer.classList.add("nopopup");
  popup.classList.add("nopopup");
}
const postjobopenfunction =()=>{
  setTimeout(() => {
    // location.href=("#gotopostjob")
    navbar = document.getElementsByClassName('lists');
    navbar[0].classList.toggle('open');
    popupcontainer.classList.remove("nopopup");
    popup.classList.remove("nopopup");
    
    let partnerbutton = document.getElementById("partnernavbar")
    let postbutton = document.getElementById("postnavbar")
    let homebutton = document.getElementById("homenavbar")
    let jobbutton = document.getElementById("jobnavbar")
    postbutton.classList.add("active")
    homebutton.classList.remove("active")
    partnerbutton.classList.remove("active")
    jobbutton.classList.remove("active")
  }, 100);
  
}
const jobopenfunction = () => {
  
  navbar = document.getElementsByClassName('lists');
  navbar[0].classList.toggle('open');
  popupcontainer.classList.add("nopopup");
  popup.classList.add("nopopup");
  
  // Scroll to the desired section using JavaScript
  setTimeout(() => {
    const section = document.getElementById('gotojobs');
    window.scrollTo({
      top: section.offsetTop + 150,
      behavior: 'smooth'
    });
  }, 50);
};
const partneropenfunction = () => {
  
  navbar = document.getElementsByClassName('lists');
  navbar[0].classList.toggle('open');
  popupcontainer.classList.add("nopopup");
  popup.classList.add("nopopup");

  // Scroll to the desired section using JavaScript
  setTimeout(() => {
    const section = document.getElementById('gotopartner');
    window.scrollTo({
      top: section.offsetTop + 120,
      behavior: 'smooth'
    });
  }, 50);
};




let secret = document.getElementById("secret")
let heart = document.getElementById("heart");
const invisible = () => {
  secret.classList.toggle("invisible");
  console.log("hi");
}
heart.addEventListener("click", invisible);










const headerforjs = document.querySelector('.headerforjs')
window.addEventListener('scroll' , ()=>{
  if (window.scrollY >10){
    headerforjs.classList.add('header-scrolled');
  }
  else if(window.scrollY <= 10){
    headerforjs.classList.remove('header-scrolled');
    
  }
});


function sync(){
  var n1 = document.getElementById('textbox');
  var n2 = document.getElementById('textbox2');
  n2.value = n1.value;
}













function ButtonClick_All(){
  alljobbutton.classList.add("activatedbutton");
  fejobbutton.classList.remove("activatedbutton");
  bejobbutton.classList.remove("activatedbutton");
  appjobbutton.classList.remove("activatedbutton");
  uijobbutton.classList.remove("activatedbutton");
  document.getElementById("textbox2").value= '';
  const alljobs = jobdata.filter((jobdata)=>{
    return jobdata.type.includes("");
  });
  renderjobs(alljobs);
}
function ButtonClick_FE(){
  alljobbutton.classList.remove("activatedbutton");
  fejobbutton.classList.add("activatedbutton");
  bejobbutton.classList.remove("activatedbutton");
  appjobbutton.classList.remove("activatedbutton");
    uijobbutton.classList.remove("activatedbutton");
    document.getElementById("textbox2").value= 'Consulting';
    const fejobs = jobdata.filter((jobdata)=>{
      return jobdata.type.includes("Consulting");
    });
    renderjobs(fejobs);
  }
  function ButtonClick_BE(){
    alljobbutton.classList.remove("activatedbutton");
    fejobbutton.classList.remove("activatedbutton");
    bejobbutton.classList.add("activatedbutton");
    appjobbutton.classList.remove("activatedbutton");
    uijobbutton.classList.remove("activatedbutton");
    document.getElementById("textbox2").value= 'Finance';
    const bejobs = jobdata.filter((jobdata)=>{
      return jobdata.type.includes("Finance");
    });
    renderjobs(bejobs);
  }
  function ButtonClick_App(){
    alljobbutton.classList.remove("activatedbutton");
    fejobbutton.classList.remove("activatedbutton");
    bejobbutton.classList.remove("activatedbutton");
    appjobbutton.classList.add("activatedbutton");
    uijobbutton.classList.remove("activatedbutton");
    document.getElementById("textbox2").value= 'Development';
    const appjobs = jobdata.filter((jobdata)=>{
      return jobdata.type.includes("Developer");
    });
    renderjobs(appjobs);
  }
  function ButtonClick_UI(){
    alljobbutton.classList.remove("activatedbutton");
    fejobbutton.classList.remove("activatedbutton");
    bejobbutton.classList.remove("activatedbutton");
    appjobbutton.classList.remove("activatedbutton");
    uijobbutton.classList.add("activatedbutton");
    document.getElementById("textbox2").value= 'Design';
    const uijobs = jobdata.filter((jobdata)=>{
      return jobdata.type.includes("UI");
    });
    renderjobs(uijobs);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header .lists li a');
  window.onscroll = () =>{
    sections.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top>= offset && top< offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .lists li a[href*=' + id + ']').classList.add('active');
        });
      };
    });
  };
  
  
  

  
  
  
  
  const form2 = document.querySelector(".form2");
  const emailInput = document.querySelector('#emailinput');
  const signUpButton = document.querySelector('#gotopartner');
  
  signUpButton.addEventListener('click', (event) => {
    validateEmail(event);
  });
  
  emailInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      validateEmail(event);
    }
  });
  
  function validateEmail(event) {
    const emailValue = emailInput.value;
    const emailPattern = /@.*?\./;
    
    if (!emailPattern.test(emailValue)) {
      event.preventDefault();
      alert('Please enter a valid email address');
      emailInput.value = "";
    } else {
      alert(`Your email: ${emailInput.value} has been registered for the newsletter!`);
      emailInput.value = "";
    }
  }
  
  
  
  const alljobbutton = document.getElementById("alljobbutton");
  const fejobbutton = document.getElementById("fejobbutton");
  const bejobbutton = document.getElementById("bejobbutton");
  const appjobbutton = document.getElementById("appjobbutton");
  const uijobbutton = document.getElementById("uijobbutton");
  
  
  
  
  
  
  
  
  
  
  const productContainerEl = document.getElementById("productcontainer");
  const renderjobs = (jobdata) => {
    productContainerEl.innerHTML="";
    jobdata.forEach(jobdata=>{
      productContainerEl.innerHTML += generatejobs(jobdata);
    });
  };
  
  
  const generatejobs = (jobdata) =>{
    return `<div class="product-card">
    <div class="image-container">
    <img src="${jobdata.image}"  alt="${jobdata.name}">
    </div>
    <div class="product-content">
    <h3>${jobdata.jobname}</h3>
    <p class="jobdes"><span>Employment: </span>${jobdata.category}</p>
    <p class="jobdes"><span>Location: </span>${jobdata.country}</p>
    <p class="jobdes"><span>Requirement: </span>${jobdata.skills}</p>
    </div>
    </div>`;
  };
  
  
  
  
  
  
  
  
  
  
  
  let jobdata = [
    { name: "Google", jobname: "Google Frontend Web Developer", category: "Full Time", country: "United States", skills: "HTML , CSS , JAVASCRIPT", image: "img/companies/google.png", type: "FrontEnd Developer" },
  { name: "Apple", jobname: "Apple Appstore App Developer", category: "Full Time", country: "Silicon Valley", skills: "JAVA , KOTLIN , PYTHON , DJANGO", image: "img/companies/apple.png", type: "App Developer" },
  { name: "Microsoft", jobname: "Microsoft Frontend Web Developer", category: "Full Time", country: "India", skills: "HTML , CSS , JAVASCRIPT", image: "img/companies/microsoft.png", type: "FrontEnd Developer" },
  { name: "Samsung", jobname: "Samsung Backend Web Developer", category: "Part Time", country: "India", skills: "JAVA , PHP , SQL", image: "img/companies/samsung.png", type: "BackEnd Developer" },
  { name: "Youtube", jobname: "Youtube UI/UX Designer", category: "Part Time", country: "India ,United States , JAPAN", skills: "FIGMA , PHOTOSHOP , ILLUSTRATOR", image: "img/companies/yt.png", type: "UI/UX" },
  { name: "Instagram", jobname: "Instagram UI/UX Designer", category: "Part Time", country: "India , United States , JAPAN", skills: "FIGMA , PHOTOSHOP , ILLUSTRATOR", image: "img/companies/insta.png", type: "UI/UX" },
  { name: "Tesla", jobname: "Tesla Frontend Web Developer", category: "Full Time", country: "India", skills: "HTML , CSS , JAVASCRIPT", image: "img/companies/tesla.png", type: "FrontEnd Developer" },
  { name: "Spotify", jobname: "Spotify Backend Web Developer", category: "Full Time", country: "India", skills: "JAVA , PHP , SQL", image: "img/companies/spotify.png", type: "BackEnd Developer" },
  { name: "AWS", jobname: "Amazon Consultant", category: "Full Time", country: "India", skills: "Consultancy , Creative , Problem Solver", image: "img/companies/aws.png", type: "Consulting" },
  { name: "PayPal", jobname: "PayPal Accountant", category: "Full Time", country: "India , United States", skills: "Data interpretation , Financial Reports", image: "img/companies/paypal.png", type: "Finance" },
  { name: "BCG", jobname: "Boston Consulting Group Consultant", category: "Full Time", country: "India , United States , Japan", skills: "Consultancy , Creative , Problem Solver", image: "img/companies/BCG.png", type: "Consulting" },
  { name: "JPMorgan", jobname: "J.P.Morgan Investment Banker", category: "Full Time", country: "India , Japan", skills: "Strong Numerical and Analytical skills , Financial Reports", image: "img/companies/JPMorgan.png", type: "Finance" },

];
renderjobs(jobdata);









const searchInputEl = document.getElementById("textbox");
const filterHandler = (event) => {
  const searchText = event.target.value.toLowerCase();
  
  const filteredJobs = jobdata.filter((jobdata) => {
    const countryName = getCountryByState(searchText);
    return (
      jobdata.jobname.toLowerCase().includes(searchText) ||
      jobdata.name.toLowerCase().includes(searchText) ||
      jobdata.category.toLowerCase().includes(searchText) ||
      jobdata.country.toLowerCase().includes(searchText) ||
      jobdata.type.toLowerCase().includes(searchText) ||
      (countryName && jobdata.country.toLowerCase().includes(countryName.toLowerCase())) ||
      jobdata.skills.toLowerCase().includes(searchText)
      );
    });
    
    renderjobs(filteredJobs);
    
    if (filteredJobs.length === 0) {
      let oops = document.getElementById("oops");
    oops.classList.remove("none");
  } else {
    let oops = document.getElementById("oops");
    oops.classList.add("none");
  }
};
searchInputEl.addEventListener('keyup', filterHandler);

const searchInputEl2 = document.getElementById("textbox2");
const filterHandler2 = (event) => {
  const searchText = event.target.value.toLowerCase();
  
  const filteredJobs = jobdata.filter((jobdata) => {
    const countryName = getCountryByState(searchText);
    return (
      jobdata.jobname.toLowerCase().includes(searchText) ||
      jobdata.name.toLowerCase().includes(searchText) ||
      jobdata.category.toLowerCase().includes(searchText) ||
      jobdata.country.toLowerCase().includes(searchText) ||
      jobdata.type.toLowerCase().includes(searchText) ||
      (countryName && jobdata.country.toLowerCase().includes(countryName.toLowerCase())) ||
      jobdata.skills.toLowerCase().includes(searchText)
      );
    });
    
    renderjobs(filteredJobs);
    
    if (filteredJobs.length === 0) {
      let oops = document.getElementById("oops");
      oops.classList.remove("none");
    } else {
      let oops = document.getElementById("oops");
      oops.classList.add("none");
    }
  };
  searchInputEl2.addEventListener('keyup', filterHandler2);
  
renderjobs(jobdata);












// ----------------------------popup open -----------------------------

const postjobopen =()=>{
  setTimeout(() => {
    
  }, 100);
  popupcontainer.classList.remove("nopopup");
  popup.classList.remove("nopopup");
  let partnerbutton = document.getElementById("partnernavbar")
  let postbutton = document.getElementById("postnavbar")
  let homebutton = document.getElementById("homenavbar")
  let jobbutton = document.getElementById("jobnavbar")
  postbutton.classList.add("active")
  homebutton.classList.remove("active")
  partnerbutton.classList.remove("active")
  jobbutton.classList.remove("active")
}
let popupbutton = document.getElementById("postbutton");
const postjobclose=()=>{
  popupcontainer.classList.add("nopopup");
  popup.classList.add("nopopup");
  location.href=("#")
  let postbutton = document.getElementById("postnavbar")
  let homebutton = document.getElementById("homenavbar")
  postbutton.classList.remove("active")
  homebutton.classList.add("active")
}


