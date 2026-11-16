const D=[
["Segunda",[["7h – 8h","Jiu-Jitsu","jj"],["10h – 11h","Jiu-Jitsu Competição","jj"],["18h40 – 19h30","Jiu-Jitsu Feminino","jj"],["19h30 – 20h30","Jiu-Jitsu","jj"],["20h30 – 21h30","Condicionamento Físico","cf"]]],
["Terça",[["9h – 10h","Condicionamento Físico","cf"],["15h – 16h","Ginástica 60+","gn"],["18h40 – 19h30","Jiu-Jitsu Kids","jj"],["19h30 – 20h30","Muay Thai/Boxe","mt"],["20h30 – 21h30","Muay Thai/Boxe","mt"]]],
["Quarta",[["7h – 8h","Jiu-Jitsu","jj"],["10h – 11h","Jiu-Jitsu Competição","jj"],["18h40 – 19h30","Jiu-Jitsu Feminino","jj"],["19h30 – 20h30","Jiu-Jitsu","jj"],["20h30 – 21h30","Condicionamento Físico","cf"]]],
["Quinta",[["9h – 10h","Condicionamento Físico","cf"],["15h – 16h","Ginástica 60+","gn"],["18h40 – 19h30","Jiu-Jitsu Kids","jj"],["19h30 – 20h30","Muay Thai/Boxe","mt"],["20h30 – 21h30","Muay Thai/Boxe","mt"]]],
["Sexta",[["7h – 8h","Jiu-Jitsu","jj"],["10h – 11h","Jiu-Jitsu Competição","jj"],["19h30 – 20h30","Jiu-Jitsu","jj"],["20h30 – 21h30","Condicionamento Físico","cf"]]],
["Sábado",[["10h – 11h","Condicionamento Físico","cf"],["11h – 12h","Jiu-Jitsu Livre","jj"]]]
];
let f="all";
const g=document.getElementById("grid");
function draw(){
 g.innerHTML=D.map(([d,r])=>{
  const x=r.filter(i=>f==="all"||i[2]===f);
  return x.length?`<section class="day"><h3>${d}</h3>${x.map(i=>`<div class="row ${i[2]}"><time>${i[0]}</time><span>${i[1]}</span></div>`).join("")}</section>`:"";
 }).join("");
}
document.getElementById("chips").addEventListener("click",e=>{
 const b=e.target.closest("button");if(!b)return;
 f=b.dataset.f;
 document.querySelectorAll("#chips button").forEach(x=>x.setAttribute("aria-pressed",x===b));
 draw();
});
draw();
const hd=document.getElementById("hd"),mb=document.getElementById("mb");
mb.addEventListener("click",()=>{const o=hd.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{hd.classList.remove("open");mb.setAttribute("aria-expanded","false")}));
