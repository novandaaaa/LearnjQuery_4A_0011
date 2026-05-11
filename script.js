const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function(){

    let teksTugas = inputTugas.value;
    if(teksTugas === ""){
        alert("Data harus dimasukkan");
        return;
    }

    let listBaru = document.createElement("li");
    let spanBaru = document.createElement("span");

    spanBaru.innerHTML = teksTugas;
    listBaru.appendChild(spanBaru);
    daftarTugas.appendChild(listBaru);
    inputTugas.value = "";
});