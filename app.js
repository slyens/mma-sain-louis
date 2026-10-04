function toggleMenu(){const n=document.getElementById('nav');if(n)n.classList.toggle('open')}
function getUser(){try{return JSON.parse(localStorage.getItem('mmaUser'))}catch(e){return null}}
function readFile(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
const reg=document.getElementById('registerForm');
if(reg)reg.addEventListener('submit',async e=>{
 e.preventDefault(); const msg=document.getElementById('msg');
 const pass=document.getElementById('password').value;
 if(pass!==document.getElementById('confirm').value){msg.textContent='Les mots de passe ne correspondent pas.';return}
 const avatar=document.getElementById('avatar').files[0], medical=document.getElementById('medical').files[0];
 if(!avatar||!medical){msg.textContent='Ajoute ta photo et ton certificat médical.';return}
 if(medical.size>8*1024*1024){msg.textContent='Le certificat doit faire moins de 8 Mo dans cette démo.';return}
 const user={username:username.value,name:name.value,email:email.value,phone:phone.value,password:pass,avatar:await readFile(avatar),medicalName:medical.name,createdAt:new Date().toLocaleDateString('fr-FR')};
 localStorage.setItem('mmaUser',JSON.stringify(user)); location.href='dashboard.html';
});
const login=document.getElementById('loginForm');
if(login)login.addEventListener('submit',e=>{
 e.preventDefault();const u=getUser(),msg=document.getElementById('msg');
 if(u&&u.email===email.value&&u.password===password.value)location.href='dashboard.html';else msg.textContent='Email ou mot de passe incorrect.';
});
if(location.pathname.endsWith('dashboard.html')){
 const u=getUser(); if(!u)location.href='auth.html';
 else{document.getElementById('hello').textContent=u.username;document.getElementById('avatar').src=u.avatar;document.getElementById('medical').textContent=u.medicalName||'Document enregistré';document.getElementById('info').innerHTML=`<p><strong>Nom :</strong> ${safe(u.name)}</p><p><strong>Email :</strong> ${safe(u.email)}</p><p><strong>Téléphone :</strong> ${safe(u.phone)}</p>`}
}
function logout(){localStorage.removeItem('mmaSession');location.href='index.html'}
function safe(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
