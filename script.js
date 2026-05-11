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

    let divAksi = document.createElement("div");
    divAksi.classList.add("aksi");

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("edit");

    btnEdit.addEventListener("click", function () {
        let tugasBaru = prompt("Edit tugas:", teksTugas);

        if (tugasBaru !== null && tugasBaru !== "") {
            teksTugas = tugasBaru;

            spanBaru.innerHTML = `
                <b>${teksTugas}</b><br>
                Tanggal: ${tanggalTugas}<br>
                Status: <span class="progress">Progress</span>
            `;
        }
    });

    let btnStatus = document.createElement("button");
    btnStatus.innerHTML = "Done";
    btnStatus.classList.add("status");

    let selesai = false;

    btnStatus.addEventListener("click", function () {

        if (!selesai) {
            spanBaru.innerHTML = `
                <b class="done">${teksTugas}</b><br>
                Tanggal: ${tanggalTugas}<br>
                Status: Done
            `;

            btnStatus.innerHTML = "Progress";
            selesai = true;

        } else {

            spanBaru.innerHTML = `
                <b>${teksTugas}</b><br>
                Tanggal: ${tanggalTugas}<br>
                Status: <span class="progress">Progress</span>
            `;

            btnStatus.innerHTML = "Done";
            selesai = false;
        }
    });

    let btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.classList.add("hapus");

    btnHapus.addEventListener("click", function () {
        listBaru.remove();
    });

    divAksi.appendChild(btnEdit);
    divAksi.appendChild(btnStatus);
    divAksi.appendChild(btnHapus);

    listBaru.appendChild(spanBaru);
    listBaru.appendChild(divAksi);

     daftarTugas.appendChild(listBaru);

      inputTugas.value = "";
    inputTanggal.value = "";
});