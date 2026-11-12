/* INVYTIA · Pases nominales — uso: tuboda.com/?id=n
   Formato: id:[nombre, pases adultos, pases niños] */
/* ⬇⬇ PEGA AQUÍ la URL de tu Apps Script (termina en /exec) ⬇⬇ */
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzs2PEMruJtXAfOS3uUa49-DBNS9tPpgVRH03Eg25JKIkhtbcDQ9tgEauAx-AetWoDgVg/exec';

const PASES = {
  1:["Familia Ramírez Mateo", 4, 0],
  2:["Familia Mateo Ramírez", 4, 0],
  3:["Familia Ramírez Jiménez", 3, 0],
  4:["Eleno Velázquez", 2, 0],
  5:["Enrique Sánchez", 2, 0],
  6:["Armando Sánchez", 2, 0],
  7:["Rafaela González", 2, 0],
  8:["Imanol Sánchez", 2, 0],
  9:["Carmen Mateo", 2, 0],
  10:["Marina Sánchez", 3, 0],
  11:["Lucia Sánchez", 1, 0],
  12:["Romualda Torres", 2, 0],
  13:["Brisa González", 1, 1],
  14:["Yara González", 2, 1],
  15:["Rosa González", 2, 0],
  16:["Wilbert González", 2, 0],
  17:["Marisol Torres", 2, 0],
  18:["Maria Torres", 2, 1],
  19:["Fany Torres", 1, 0],
  20:["Cecilia Mateo", 2, 0],
  21:["Brisa Sánchez", 4, 0],
  22:["Jireth Ramírez", 1, 0],
  23:["Familia Sánchez Mateos", 3, 1],
  24:["Familia Puga Banda", 2, 0],
  25:["Familia Hernández Dominguez", 5, 0],
  26:["Familia Nataren Reyes", 3, 0],
  27:["Adriana González", 2, 0],
  28:["Familia Torres Mariano", 4, 0],
  29:["Familia Lázaro Salome", 2, 0],
  30:["Reyna Velázquez", 2, 0],
  31:["Guadalupe Méndez", 1, 0],
  32:["Héctor López", 1, 0],
  33:["Carmen Zárate", 1, 0],
  34:["Dulce Santiago", 2, 0],
  35:["Beatriz Sánchez", 2, 2],
  36:["Yamileth Martínez", 2, 0],
  37:["Janeth Vega", 2, 0],
  38:["Marisol Rámirez", 2, 0],
  39:["Liseth Isidoro", 2, 0],
  40:["Victoria León", 2, 0],
  41:["Leticia Torres", 2, 0],
  42:["Juan Carrasco", 2, 0],
  43:["Rosa González", 1, 0],
  44:["Familia Gutierrez Márquez", 2, 2],
  45:["Miguel Márquez", 2, 0],
  46:["Lizbeth Márquez", 2, 0],
  47:["Genaro Márquez", 2, 0],
  48:["Familia Márquez Absalon", 4, 0],
  49:["Familia Cruz Cervantes", 4, 0],
  50:["Valeria Cervantes", 2, 0],
  51:["Familia Márquez de Jesús", 2, 0],
  52:["Clemente Cruz", 2, 2],
  53:["Nineth Gómez", 3, 0],
  54:["Familia Domínguez Márquez", 2, 0],
  55:["Manuel Domínguez", 2, 0],
  56:["Familia Domínguez Sánchez", 3, 1],
  57:["Antonio Márquez", 2, 2],
  58:["Isabel Márquez", 2, 0],
  59:["Familia Barrios Mateos", 3, 1],
  60:["Familia Mateo Martínez", 3, 0],
  61:["Valeria Mateo", 1, 1],
  62:["Yolanda Jiménez", 2, 0],
  63:["Familia Guillen Francisco", 4, 0],
  64:["Familia Tovar", 4, 0],
  65:["Gael Corona", 2, 0],
  66:["Iram Mera", 2, 0],
  67:["Kristell Rivas", 2, 0],
  68:["Kelly Bernal", 1, 0],
  69:["Familia Bernal Rodríguez", 5, 0],
  70:["Familia Flores Avelino", 2, 0],
  71:["Itzel Mendoza", 2, 0],
  72:["Luis García", 2, 0],
  73:["Alhelí Palacios", 2, 0],
  74:["Mario Morales", 2, 0],
  75:["Familia Ibarra Cruz", 2, 0],
  76:["Hipolito Trinidad", 2, 0],
  77:["Michelle Valverde", 2, 0],
  78:["Familia Carbajal Pérez", 2, 0],
  79:["Cesar Hernández", 2, 0],
  80:["Irving Mateo", 2, 0],
  81:["Katya Galmich", 2, 0],
  82:["Julio Rosaldo", 2, 0],
  83:["David Pacheco", 2, 0],
  84:["Alfredo Rosaldo", 2, 0],
  85:["Julio Rosaldo", 2, 0],
  86:["Yareli Soriano", 1, 0],
  87:["Elia Espinos", 1, 0],
  88:["Nohemí Cabrera", 1, 0],
  89:["Eduardo Oropeza", 2, 0],
  90:["Erick Gallegos", 2, 0],
  91:["Mariana Ávila", 2, 0],
  92:["", 2, 0],
  93:["Victor Cruz", 2, 0],
  94:["Rosalina Mayo", 2, 0],
  95:["Edgar Rodríguez", 2, 0],
  96:["Sandra García", 2, 0],
  97:["Lucio Gutierrez", 2, 0],
  98:["Victor Parada de la O", 2, 0],
  99:["Yesenia Ramos", 2, 0],
  100:["Octavio Cruz", 2, 0],
  101:["Ricardo Vargas", 2, 0],
  102:["Claudia Martínez", 2, 0],
  103:["Oyuky Hernández", 2, 0],
  104:["José Olivera", 2, 0],
  105:["Arnoldo Ordoñez", 2, 0],
  106:["Matias Martínez", 2, 0],
  107:["José Hernández", 2, 0],
  108:["Familia Guillén Chipol", 2, 0],
  109:["PASE PERSONAL", 1, 0],
  110:["PASE PERSONAL", 2, 0],
  111:["Alma Reyes", 2, 0],
  112:["Familia Cruz González", 2, 0],
  113:["Familia Alonso Martínez", 3, 0],
  114:["Familia Loza Luna", 2, 0],
  115:["Familia Salazar Domínguez", 2, 0],
  116:["Familia Márquez Mateo", 2, 0],
  117:["Lucia del Carmen Sánchez", 2, 0],
  118:["Nury Mungia", 2, 0],
  119:["Familia Sánchez Martínez", 4, 0],
  120:["Patricia Ortiz", 2, 0],
  121:["Emilio Merlín", 2, 0],
  122:["Sagrario Ávalos", 2, 0],
  123:["Amparo Jiménez", 2, 0],
  124:["Familia Romay Francisco", 2, 0],
  125:["Familia Palacio Torres", 3, 0],
  126:["Familia Márquez Castillo", 2, 0]
};

document.addEventListener('DOMContentLoaded', function(){
  const id = new URLSearchParams(window.location.search).get('id');
  const g = id && PASES[parseInt(id,10)];
  if(!g) return;                         // sin id válido: la invitación se ve normal
  const [nombre, adultos, ninos] = g;
  window.GUEST_PASS = {id:parseInt(id,10), nombre, adultos, ninos};

  const sec = document.getElementById('paseSection');
  const h = document.getElementById('guestNameDisplay');
  if(nombre){ h.textContent = nombre; h.style.display=''; } else { h.style.display='none'; }
  const ps = document.getElementById('guestPassesDisplay');
  ps.textContent = adultos;
  let extra = document.getElementById('guestKidsLine');
  if(!extra){
    extra = document.createElement('p');
    extra.id = 'guestKidsLine';
    extra.style.fontSize = '1.1rem';
    ps.parentElement.insertAdjacentElement('afterend', extra);
  }
  if(ninos > 0){
    extra.innerHTML = 'Lugares para niños: <span style="font-weight:bold;color:var(--cobalt);font-size:1.4rem">'+ninos+'</span>';
    extra.style.display = '';
  } else { extra.style.display = 'none'; }
  sec.style.display = 'block';

  // Sin lista legada: el formulario usa el nombre del pase
  document.getElementById('dynamicGuestList').innerHTML = '';
  document.getElementById('genericRSVPInputs').style.display = '';
  if(nombre) document.getElementById('rsvpNombre').value = nombre;

  // Selector: cuántas personas de las asignadas asisten
  const fgResp = document.getElementById('rsvpAsistencia').closest('.fg');
  const box = document.createElement('div');
  box.id = 'asistentesBox'; box.style.display = 'none';
  const opts = (min,max)=>{ let o=''; for(let i=min;i<=max;i++) o+=`<option value="${i}">${i}</option>`; return o; };
  let hh = `<div class="fg"><label for="asisAdultos">¿Cuántos adultos asistirán? (máx. ${adultos})</label>
    <select id="asisAdultos"><option value="">Selecciona una opción</option>${opts(1,adultos)}</select></div>`;
  if(ninos > 0){
    hh += `<div class="fg"><label for="asisNinos">¿Cuántos niños asistirán? (máx. ${ninos})</label>
    <select id="asisNinos">${opts(0,ninos)}</select></div>`;
  }
  box.innerHTML = hh;
  fgResp.insertAdjacentElement('afterend', box);
  const toggle = ()=>{ box.style.display = document.getElementById('rsvpAsistencia').value.indexOf('Sí')!==-1 ? 'block' : 'none'; };
  document.getElementById('rsvpAsistencia').addEventListener('change', toggle);
  toggle();
});

// Registra en Google Sheets (sin bloquear WhatsApp)
function enviarASheet(payload){
  if(!SHEET_ENDPOINT) return;
  try{
    fetch(SHEET_ENDPOINT,{method:'POST',mode:'no-cors',keepalive:true,
      headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)}).catch(()=>{});
  }catch(e){}
}

// RSVP: registra en la hoja y abre WhatsApp
function sendRSVP(telefono, destino){
  const nombre = document.getElementById('rsvpNombre').value.trim();
  const asis = document.getElementById('rsvpAsistencia').value;
  if(!nombre || !asis){ alert("Por favor, completa tu nombre y tu respuesta."); return; }
  const p = window.GUEST_PASS;
  const va = asis.indexOf('Sí')!==-1;
  let aA = '', aN = '';
  if(p && va){
    aA = document.getElementById('asisAdultos').value;
    if(!aA){ alert("Por favor, indica cuántos adultos asistirán."); return; }
    const sn = document.getElementById('asisNinos');
    aN = sn ? sn.value : '0';
    aA = parseInt(aA,10); aN = parseInt(aN||'0',10);
  }
  let m = `Hola, soy *${nombre}*.\n\nQuiero confirmar mi respuesta a la boda de José y Cinthia: *${asis}*\n`;
  if(p){
    m += `\nPase #${p.id}: ${p.adultos} lugar${p.adultos===1?'':'es'}`;
    if(p.ninos>0) m += ` + ${p.ninos} para niño${p.ninos===1?'':'s'}`;
    m += `\n`;
    if(va){
      m += `\n👥 *Asistiremos:* ${aA} adulto${aA===1?'':'s'}`;
      if(p.ninos>0) m += ` y ${aN} niño${aN===1?'':'s'}`;
      m += `\n`;
    }
  }
  enviarASheet({tipo:'rsvp', id:p?p.id:'', pase:p?p.nombre:'', nombre, respuesta:asis,
    adultos:p?p.adultos:'', ninos:p?p.ninos:'', asisten_adultos:aA, asisten_ninos:aN,
    destino:(destino||'').replace(/^(la|el)\s+/,'')});
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(m)}`,'_blank');
}

// Libro de firmas: registra en la hoja y abre WhatsApp
function sendGuestbook(telefono){
  const n = document.getElementById('firmaNombre').value.trim();
  const m = document.getElementById('firmaMensaje').value.trim();
  if(!n || !m){ alert("Por favor, escribe tu nombre y tu mensaje."); return; }
  const p = window.GUEST_PASS;
  enviarASheet({tipo:'firma', id:p?p.id:'', nombre:n, mensaje:m,
    destino: telefono==='5219221222268' ? 'novia' : 'novio'});
  const msg = `¡Hola José y Cinthia! Les dejo este mensaje para su libro de firmas:\n\n"${m}"\n\n— *${n}*`;
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`,'_blank');
}
