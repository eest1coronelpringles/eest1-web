const botonMenu = document.getElementById("botonMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

botonMenu.addEventListener("click", () => {
  const abierto = menuPrincipal.classList.toggle("activo");
  botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
});

menuPrincipal.querySelectorAll("a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menuPrincipal.classList.remove("activo");
    botonMenu.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("anio").textContent = new Date().getFullYear();

const noticias = document.getElementById('noticiasDinamicas');
if(noticias){
  (window.NOTICIAS_ESCUELA || []).slice().sort((a,b)=>String(b.fecha).localeCompare(String(a.fecha))).forEach(n=>{
    const card=document.createElement('article'); card.className='noticia';
    const cat=document.createElement('small'); cat.textContent=n.categoria || 'Novedades';
    const title=document.createElement('h3'); title.textContent=n.titulo || '';
    const date=document.createElement('time'); date.textContent=n.fecha || '';
    const desc=document.createElement('p'); desc.textContent=n.texto || '';
    card.append(cat,title,date,desc);
    if(n.enlace && /^https:\/\//i.test(n.enlace)){
      const link=document.createElement('a');link.href=n.enlace;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Ver más →';card.append(link);
    }
    noticias.append(card);
  });
}
