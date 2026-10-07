const ids = [
  "studentName","regNo","department","semester","academicYear","internshipTitle",
  "organization","location","duration","dates","supervisor","faculty",
  "abstract","intro","organizationProfile","work","learning","conclusion","references"
];

const defaults = {
  studentName:"Minha Fathima PI",regNo:"2301040000",
  department:"Electronics and Communication Engineering",semester:"Fifth Semester",
  academicYear:"2026 – 2027",internshipTitle:"AI Driven IoT & Embedded Systems",
  organization:"Model Finishing School, Kochi",location:"Kochi, Kerala",duration:"4 Weeks",
  dates:"June 2026 – July 2026",supervisor:"Industry Supervisor",faculty:"Faculty Coordinator",
  abstract:"This report presents the work and learning experiences gained during the internship in AI driven IoT and embedded systems. The internship provided practical exposure to Arduino, Raspberry Pi, ESP32, sensors, actuators, LCD interfacing, Bluetooth communication and basic embedded programming.",
  intro:"The internship was undertaken to gain practical knowledge of embedded systems and Internet of Things technologies. It helped bridge the gap between classroom concepts and practical implementation through hands-on activities and mini projects.",
  organizationProfile:"Model Finishing School, Kochi provides technical and skill-oriented training that supports practical learning and industry readiness.",
  work:"During the internship, practical exercises were carried out using Arduino, Raspberry Pi and ESP32. Activities included LED blinking, IR obstacle detection, LCD interfacing, ultrasonic distance measurement, servo control and Bluetooth-based communication.",
  learning:"The internship improved practical skills in embedded programming, sensor interfacing, microcontroller development, debugging, circuit connections and basic IoT concepts. It also improved problem-solving and project implementation skills.",
  conclusion:"The internship was useful in developing practical knowledge of IoT and embedded systems. The hands-on training provided a better understanding of how sensors, controllers and communication modules are combined to build real-world systems.",
  references:"[1] Arduino Documentation.\\n[2] Espressif ESP32 Documentation.\\n[3] Raspberry Pi Documentation."
};

let logoData = "";
let internshipImageData = "";

function esc(v){return String(v||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function paras(v){return esc(v).split(/\n+/).filter(Boolean).map(x=>`<p>${x}</p>`).join("")}
function val(id){return document.getElementById(id).value}

function page(content, num=""){
  return `<section class="page">${content}<div class="footer">Internship Report · Dept. of ECE, GPTC Kalamassery${num?` · Page ${num}`:""}</div></section>`;
}

function render(){
  const s=val("studentName"), r=val("regNo"), d=val("department"), sem=val("semester"), ay=val("academicYear");
  const title=val("internshipTitle"), org=val("organization"), loc=val("location"), duration=val("duration"), dates=val("dates");
  const logo=logoData?`<img class="logo" src="${logoData}">`:"<div style='height:80px'></div>";

  let out="";
  out+=page(`<div class="cover">
    ${logo}
    <div class="college">GOVERNMENT POLYTECHNIC COLLEGE<br>KALAMASSERY</div>
    <div class="dept">${esc(d)}</div>
    <div class="report-type">INTERNSHIP REPORT</div>
    <div class="on">ON</div>
    <div class="topic">${esc(title)}</div>
    <div class="submitted">Submitted in partial fulfilment of the requirements for the award of<br><b>Diploma in Electronics and Communication Engineering</b><br>(State Board of Technical Education, Kerala)</div>
    <div class="submitted">Submitted by</div>
    <div class="student">${esc(s)}</div>
    <div>Reg. No. ${esc(r)}</div>
    <div class="submitted">${esc(sem)} · Academic Year ${esc(ay)}</div>
    <div class="submitted"><b>${esc(org)}</b><br>${esc(loc)}<br>${esc(duration)} · ${esc(dates)}</div>
  </div>`);

  out+=page(`<h2 class="page-title">CERTIFICATE</h2>
    <p>This is to certify that the internship report entitled “${esc(title)}” submitted by <b>${esc(s)}</b> (Reg. No. ${esc(r)}), a student of the ${esc(sem)} ${esc(d)}, is a bonafide record of the internship work carried out during the academic year ${esc(ay)} at <b>${esc(org)}</b>. This report is submitted in partial fulfilment of the requirements for the award of the Diploma in Electronics and Communication Engineering of the State Board of Technical Education, Kerala.</p>
    <div class="meta"><b>Internship Duration:</b> ${esc(duration)}<br><b>Location:</b> ${esc(loc)}</div>
    <div class="signature-grid"><div>Industry Supervisor<br>${esc(val("supervisor"))}</div><div>Faculty Coordinator<br>${esc(val("faculty"))}</div><div>Head of Department</div><div>Internal Examiner</div></div>`);

  out+=page(`<h2 class="page-title">DECLARATION</h2>
    <p>I hereby declare that this internship report entitled “${esc(title)}” is a record of the internship work carried out by me at ${esc(org)}. The report has been prepared as part of the academic requirements of the Diploma in Electronics and Communication Engineering at Government Polytechnic College, Kalamassery.</p>
    <p>I further declare that the information presented in this report is based on my internship experience and the work carried out during the specified period.</p>
    <div style="margin-top:80px;text-align:right;font-size:13px"><b>${esc(s)}</b><br>Reg. No. ${esc(r)}</div>`);

  out+=page(`<h2 class="page-title">ACKNOWLEDGEMENT</h2>
    <p>I express my sincere gratitude to the Almighty for the blessings and strength that helped me complete my internship successfully.</p>
    <p>I am thankful to the Principal and the faculty members of the Department of Electronics and Communication Engineering, Government Polytechnic College, Kalamassery, for their support and encouragement.</p>
    <p>I express my sincere thanks to the internship organization, <b>${esc(org)}</b>, and the industry supervisor for providing me with the opportunity and guidance to gain practical knowledge.</p>
    <p>I also thank my faculty coordinator, classmates, and everyone who supported me throughout the internship.</p>
    <div style="margin-top:40px;text-align:right"><b>${esc(s)}</b><br>Reg. No. ${esc(r)}</div>`);

  out+=page(`<h2 class="page-title">ABSTRACT</h2>${paras(val("abstract"))}`);
  out+=page(`<h2 class="page-title">TABLE OF CONTENTS</h2><div class="toc">
    <div><span>Acknowledgement</span><span>i</span></div>
    <div><span>Abstract</span><span>ii</span></div>
    <div><span>1 Introduction</span><span>1</span></div>
    <div><span>2 Organization Profile</span><span>2</span></div>
    <div><span>3 Training / Work Carried Out</span><span>3</span></div>
    <div><span>4 Skills and Learning Outcomes</span><span>5</span></div>
    <div><span>5 Conclusion</span><span>6</span></div>
    <div><span>6 References</span><span>7</span></div>
  </div>`);

  out+=page(`<h2 class="page-title">1 INTRODUCTION</h2>${paras(val("intro"))}`);
  out+=page(`<h2 class="page-title">2 ORGANIZATION PROFILE</h2>${paras(val("organizationProfile"))}
    <h3>Internship Details</h3><p><b>Organization:</b> ${esc(org)}<br><b>Location:</b> ${esc(loc)}<br><b>Duration:</b> ${esc(duration)}<br><b>Dates:</b> ${esc(dates)}</p>
    ${internshipImageData?`<img src="${internshipImageData}" style="display:block;max-width:150mm;max-height:90mm;margin:25px auto;object-fit:contain">`:""}`);

  out+=page(`<h2 class="page-title">3 TRAINING / WORK CARRIED OUT</h2>${paras(val("work"))}`);
  out+=page(`<h2 class="page-title">4 SKILLS AND LEARNING OUTCOMES</h2>${paras(val("learning"))}`);
  out+=page(`<h2 class="page-title">5 CONCLUSION</h2>${paras(val("conclusion"))}`);
  out+=page(`<h2 class="page-title">6 REFERENCES</h2>${paras(val("references"))}`);

  document.getElementById("report").innerHTML=out;
}

function save(){
  const data={}; ids.forEach(id=>data[id]=val(id));
  localStorage.setItem("internshipReportData",JSON.stringify(data));
}
function load(){
  const saved=JSON.parse(localStorage.getItem("internshipReportData")||"null");
  ids.forEach(id=>document.getElementById(id).value=(saved&&saved[id]!==undefined)?saved[id]:defaults[id]);
}
ids.forEach(id=>document.getElementById(id).addEventListener("input",()=>{save();render()}));

document.getElementById("logoInput").addEventListener("change",e=>{
  const f=e.target.files[0]; if(!f)return;
  const reader=new FileReader(); reader.onload=()=>{logoData=reader.result;render()}; reader.readAsDataURL(f);
});
document.getElementById("internshipImageInput").addEventListener("change",e=>{
  const f=e.target.files[0]; if(!f)return;
  const reader=new FileReader(); reader.onload=()=>{internshipImageData=reader.result;render()}; reader.readAsDataURL(f);
});
document.getElementById("printBtn").onclick=()=>window.print();
document.getElementById("previewBtn").onclick=()=>document.querySelector(".preview-panel").scrollIntoView({behavior:"smooth"});
document.getElementById("resetBtn").onclick=()=>{
  if(confirm("Reset the form to the sample internship details?")){
    localStorage.removeItem("internshipReportData"); load(); render();
  }
};
load(); render();