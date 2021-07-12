const coloronelight = ['#00ff55','#ff00bb','#d0ff00','#04c0ff','#ff003c','#ff3c00'];
const colortwodark = ['#4527a0','#049c62','#029991','#ad0051','#025094','#770191'];
const rootelement = document.querySelector(':root');
rootelement.style.setProperty('--sqrt-of-three',Math.sqrt(3));
var colorindex=0;
rootelement.style.setProperty('--hexagonoutlinecolor',coloronelight[colorindex]);
rootelement.style.setProperty('--hexagongradientmaxcolor',`${colortwodark[colorindex]} 60%,#ffffff`);
rootelement.style.setProperty('--navcellcolor',`${colortwodark[colorindex]}`);
let changecolor =function()
{colorindex++;
if(colorindex ==6){colorindex=0;}
rootelement.style.setProperty('--hexagonoutlinecolor',coloronelight[colorindex]);
rootelement.style.setProperty('--hexagongradientmaxcolor',`${colortwodark[colorindex]} 60%,#ffffff`);
rootelement.style.setProperty('--navcellcolor',`${colortwodark[colorindex]}`);

}
window.setInterval(changecolor,9000);
const sqrtofthreestyles = getComputedStyle(rootelement);
const sqrtofthreestylesvalue = sqrtofthreestyles.getPropertyValue('--sqrt-of-three');
console.log(sqrtofthreestylesvalue);
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
let widthFactor = viewportHeight/5*Math.sqrt(3);//considering half of viewportHeight as standard height
var numberOfColumnsValue = 0;
const numberOfColumns = document.querySelector('body');
window.addEventListener('load',resizer);
window.addEventListener('resize',resizer);
function resizer(){
 viewportHeight = window.innerHeight;
 viewportWidth = window.innerWidth;
 widthFactor = viewportHeight/5*Math.sqrt(3);//considering half of viewportHeight as standard height
 numberOfColumnsValue = 0;
if (Math.round(viewportWidth/widthFactor)%2==0) {
  numberOfColumnsValue = Math.round(viewportWidth/widthFactor);
}
else if (Math.round(viewportWidth/widthFactor)==1) {
  numberOfColumnsValue = 2;
}
else {
  numberOfColumnsValue = Math.round(viewportWidth/widthFactor)-1;
}
numberOfColumns.style.setProperty('--number-of-columns',numberOfColumnsValue);
removegriddiv();
createnewchildelements();
// const a = document.getElementById('sidebarelement1');
// let d = document.getElementsByClassName('fonts');
// const b = getComputedStyle(a);
// let bw = b.getPropertyValue('width');
// let bh = b.getPropertyValue('height');
// let fwh = b.getPropertyValue('background-size');
// console.log(bw + ' ' + bh);
// console.log(fwh);
// bw=bw*4;
// bh=bh*4;
// for(let i=0;i<7;i++)
// {d[i].style.setProperty("background-size",`${bw} ${bh}`);
// const e = getComputedStyle(d[i]);
// const ewh = e.getPropertyValue('background-size');
// console.log(ewh);}
// const bh = b.getPropertyValue('height');
// d.style.setProperty('height',bh);
}
document.querySelector('body').onmousemove = (e) => {
e.target.style.setProperty('--x',`${e.pageX}px`);
e.target.style.setProperty('--y',`${e.pageY}px`);
}
function removegriddiv(){
let bodynode = document.querySelector('body');
  bodynode.removeChild(bodynode.childNodes[2]);
}
function createnewchildelements(){
let bodynode = document.querySelector('body');
let griddiv = document.createElement('div');
griddiv.setAttribute("class","griddiv");
bodynode.appendChild(griddiv);
var grid = document.querySelector('.griddiv');
for(var i = 0;i<(numberOfColumnsValue * 2);i++)
{let gridcell = document.createElement('div');
 gridcell.setAttribute("class","gridcell");
  grid.appendChild(gridcell);

   for(let j = 0;j<10;j++)
   {
     let gridcellelem = document.querySelectorAll('.gridcell')[i];
     let hexagon = document.createElement('div');
     hexagon.className="hexagon";
     if(i==0)
     {
       if(j==0)
       {
         hexagon.classList.add("outerhexagon1");
         console.log('this is 1');
       }

       if(j==1)
       {
         console.log('2');
         hexagon.classList.add("outerhexagon2");
       }
       if(j==2)
       {
         hexagon.classList.add("outerhexagon3");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement1';
         anchor.setAttribute("href","https://www.facebook.com/nibin.benny.712");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-facebook");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);

       }
       if(j==3)
       {
         hexagon.classList.add("outerhexagon4");
       }
       if(j==4)
       {
         hexagon.classList.add("outerhexagon5");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement2';
         anchor.setAttribute("href","https://www.linkedin.com/in/nibin-benny-60923a211/");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-twitter");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);
       }
       if(j==5)
       {
         hexagon.classList.add("outerhexagon6");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement3';
         anchor.setAttribute("href","https://www.instagram.com/nibinbenny_77/");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-instagram");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);
       }
       if(j==6)
       {
         hexagon.classList.add("outerhexagon7");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement4';
         anchor.setAttribute("href","https://www.youtube.com/channel/UCH39RHRfr1bWUUmtqw9P1qQ");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-youtube");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);
       }
       if(j==7)
       {
         hexagon.classList.add("outerhexagon8");
       }
       if(j==8)
       {
         hexagon.classList.add("outerhexagon9");
       }
       if(j==9)
       {
         hexagon.classList.add("outerhexagon10");
       }

     }
     else if(i==numberOfColumnsValue)
     {
       if(j==0)
       {
         hexagon.classList.add("outerhexagon1");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement5';
         anchor.setAttribute("href","");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-blogger");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);
       }

       if(j==1)
       {
         console.log('2');
         hexagon.classList.add("outerhexagon2");
       }
       if(j==2)
       {
         hexagon.classList.add("outerhexagon3");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement6';
         anchor.setAttribute("href","https://www.linkedin.com/in/donal-shijan-bab44015a");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-linkedin");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);
       }
       if(j==3)
       {
         hexagon.classList.add("outerhexagon4");
       }
       if(j==4)
       {
         hexagon.classList.add("outerhexagon5");
         let anchor = document.createElement('a');
         anchor.classList.add('sidebarelement');
         anchor.id='sidebarelement7';
         anchor.setAttribute("href","");
         anchor.setAttribute("target","_blank");
         let fonticon = document.createElement('i');
         fonticon.classList.add("fab");
         fonticon.classList.add("fa-patreon");
         fonticon.classList.add("fonts");
         anchor.appendChild(fonticon);
         hexagon.appendChild(anchor);
       }
       if(j==5)
       {
         hexagon.classList.add("outerhexagon6");
       }
       if(j==6)
       {
         hexagon.classList.add("outerhexagon7");
       }
       if(j==7)
       {
         hexagon.classList.add("outerhexagon8");
       }
       if(j==8)
       {
         hexagon.classList.add("outerhexagon9");
       }
       if(j==9)
       {
         hexagon.classList.add("outerhexagon10");
       }
     }
     else{
       if(j==0)
       {
         hexagon.classList.add("outerhexagon1");
         console.log('this is 1');
       }

       if(j==1)
       {
         console.log('2');
         hexagon.classList.add("outerhexagon2");
       }
       if(j==2)
       {
         hexagon.classList.add("outerhexagon3");
       }
       if(j==3)
       {
         hexagon.classList.add("outerhexagon4");
       }
       if(j==4)
       {
         hexagon.classList.add("outerhexagon5");
       }
       if(j==5)
       {
         hexagon.classList.add("outerhexagon6");
       }
       if(j==6)
       {
         hexagon.classList.add("outerhexagon7");
       }
       if(j==7)
       {
         hexagon.classList.add("outerhexagon8");
       }
       if(j==8)
       {
         hexagon.classList.add("outerhexagon9");
       }
       if(j==9)
       {
         hexagon.classList.add("outerhexagon10");
       }
     }

    gridcellelem.appendChild(hexagon);
   }
}

}
