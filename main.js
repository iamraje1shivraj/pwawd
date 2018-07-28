// function Loadjson(file,callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//  xhr.open("GET",file,true);
//  xhr.onreadystatechange = function() {
//    if(xhr.readyState === 4 && xhr.status == "200" ){
//    callback(xhr.responseText);
//  }
// };
// xhr.send(null);
// }
//
// Loadjson("data.json",function(text)
// {
//   var data = JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   education(data.education);
//   skills(data.skills);
//   achievement(data.achievement);
// })

function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  skills(data.skills);
  achievement(data.achievement);
})
var childone = document.querySelector(".Child1");

function basics(det) {
  var image = document.createElement("img");
  var name = document.createElement("h3");
var phno = document.createElement("h3");
var email = document.createElement("a");

  image.src = det.image;
  childone.appendChild(image);
  childone.appendChild(name);
  childone.appendChild(phno);
  childone.appendChild(email);
  name.textContent = det.name;
  phno.textContent = det.phno;
  email.textContent= det.email;
  email.href="rajeswarigampa99@gmail.com";
 var add = document.createElement("h2");
  add.textContent= "address";
  childone.appendChild(add);

  var hr = document.createElement("hr");
  childone.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = det.address;
  childone.appendChild(p);
}
var childtwo = document.querySelector(".Child2");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent = "career objective:"
  childtwo.appendChild(heading);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

  var c = document.createElement("h4");
  c.textContent=info.info;
  childtwo.appendChild(c);
}
function education(edu)
{
  var hd=document.createElement("h2");
  hd.textContent= "Educational Qualification";
  childtwo.appendChild(hd);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

var table1 = document.createElement("table");
table1.border = "1";
  childtwo.appendChild(table1);

  tabledata = "";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
  table1.innerHTML=tabledata;
}

function skills(skillinfo)
{
  var hd=document.createElement("h2");
  hd.textContent= "Technical Skills";
  childtwo.appendChild(hd);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);
for(i=0;i<skillinfo.length;i++){
  var title = document.createElement("h4");
  title.textContent=skillinfo[i].title;
  childtwo.appendChild(title);

  var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=skillinfo[i].info;
    eduul.appendChild(eduli);
    childtwo.appendChild(eduul);
}
}

function achievement(act){
  var hd=document.createElement("h2");
  hd.textContent= "Achievements";
  childtwo.appendChild(hd);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

  for(i=0;i<act.length;i++){
    var title = document.createElement("h4");
    title.textContent=act[i].title;
    childtwo.appendChild(title);

   var eduul = document.createElement("ul");
     var eduli = document.createElement("li");
      eduli.textContent=act[i].info;
      eduul.appendChild(eduli);
       childtwo.appendChild(eduul);
}
}
function openpage(){
  window.open("resu.html","_self",true)
}
