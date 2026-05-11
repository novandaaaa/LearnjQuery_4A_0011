const inputTanggal = document.getElementById("inputTanggal");
const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function(){

    let teksTugas = inputTugas.value;
    let tanggalTugas = inputTanggal.value;

        if(teksTugas === "" || tanggalTugas === ""){
            alert("Data dan tanggal harus diisi");
    return;
}

    let listBaru = document.createElement("li");
    let spanBaru = document.createElement("span");

   spanBaru.innerHTML = `
    <b>${teksTugas}</b><br>
    Tanggal: ${tanggalTugas}<br>
    Status: <span class="progress">Progress</span>
`;

    listBaru.appendChild(spanBaru);

    let divAksi = document.createElement("div");
    divAksi.classList.add("aksi");

    

    daftarTugas.appendChild(listBaru);
    warnabaru.forEach((item, index) => {
        if(index & 2 === 0){
            item.style.color = "red";
        } else{
            item.style.color = "green";
        }
    })

    inputTugas.value = "";
});