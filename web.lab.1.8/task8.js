var n=0;
var deliting = 0;
var nRow = [];

function AddRow(m){
	return`
			<tr class="${m}">
				<td><input type="text" class="input1"></td>
				<td><input type="number" class="input2"></td>
				<td><button class="UpButton">&#8593;</button></td>
				<td><button class="DownButton">&#8595;</button></td>
				<td><button class="DelButton">х</button></td>
			</tr>	
        `
}

function AddButton(){
	n+=1;
	deliting+=1;
	var m = 'row' + n;
	document.body.querySelector('table').insertAdjacentHTML("beforeend",  this.AddRow(m));
	nRow[n] = document.querySelector('.'+m)
	nRow[Number(n)+1]=null;
}

function DelButton(delObject){
	var i = delObject.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	var j = nRow[n].className;
	j = j.replace(/\D/g,'') - 1;
	var m = n;
	nRow.splice(i, 1);
	document.body.querySelector('table').querySelector('.'+delObject.parentElement.parentElement.className).remove();
	for (m; m > i; m--) {
		nRow[m-1].className = 'row' + j;
		j-=1;	
	}
	n-=1;
}

function DownButton(down){
	var i = down.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	j = Number(i)+1;
	if (nRow[j]!=null){
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input1').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input1').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input1').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input1').value = temp;
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input2').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input2').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input2').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input2').value = temp;
	}
}

function UpButton(up){
	var i = up.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	j = i - 1;
	if (nRow[j]!=null){
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input1').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input1').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input1').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input1').value = temp;
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input2').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.input2').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input2').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.input2').value = temp;
	}
}

function SaveButton(){
	var saveUpload = [];
	document.body.insertAdjacentHTML("beforeend",  `{`);
	for (i=0;i<=n;i++){
		saveUpload.input1 = document.body.querySelector('table').querySelector('.' + nRow[i].className).querySelector('.input1').value;
		saveUpload.input2 = document.body.querySelector('table').querySelector('.' + nRow[i].className).querySelector('.input2').value;
		document.body.insertAdjacentHTML("beforeend", `"${saveUpload.input1}" : "${saveUpload.input2}"`);
		if (i != n) document.body.insertAdjacentHTML("beforeend", ` , `);
	}
	document.body.insertAdjacentHTML("beforeend",  `}`);
}

function Listener(){
	nRow[0]=document.querySelector('.row0');
	nRow[-1] = null;
	document.body.addEventListener("click", e => {
		if (e.target.classList.contains("DelButton")) {
			this.DelButton(e.target);
        }
    });
	document.body.addEventListener("click", e => {
		if (e.target.classList.contains("DownButton")) {
			this.DownButton(e.target);
		}
	});
	document.body.addEventListener("click", e => {
		if (e.target.classList.contains("UpButton")) {
			this.UpButton(e.target);
		}
	});
}

document.addEventListener("DOMContentLoaded", () => Listener());