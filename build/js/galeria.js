function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=8;n++){const t=document.createElement("picture");t.innerHTML=`\n    <source srcset="build/img/nueva/${n}.avif" type="image/avif">\n    <source srcset="build/img/nueva/${n}.webp type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/nueva/${n}.jpg" alt="imagen galeria">\n    \n\n    `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n<source srcset="build/img/nuevaz/${e}.avif" type="image/avif">\n<source srcset="build/img/nuevaz/${e}.webp type="image/webp">\n<img loading="lazy" width="200" height="300" src="build/img/nuevaz/${e}.jpg" alt="imagen galeria">\n';\n\n`;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const o=document.querySelector("body");o.appendChild(t),o.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=galeria.js.map
