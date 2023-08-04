count =1;
function fuc() {
const ba = document.querySelector('#b');
const value = document.getElementById('sec').value;

val = document.getElementById('n').value;
col = document.getElementById('color').value;
console.log(val);
for(var i=0;i<val;i++){
const da = document.createElement('div');
da.setAttribute('id', 'id1');
da.className = value;
da.style.backgroundColor = col; 
da.innerHTML = count;
count = count+1;
ba.appendChild(da);
}
}