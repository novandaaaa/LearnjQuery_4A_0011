const inputTanggal = $("#inputTanggal");
const inputTugas = $("#inputTugas");
const btnTambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");  

btnTambah.on("click", function(){

    let teksTugas = inputTugas.val();
    let tanggalTugas = inputTanggal.val();

    if(teksTugas === "" || tanggalTugas === ""){
        alert("Data dan tanggal harus diisi");
        return;
    }


    let listBaru = $("<li>");
    let spanBaru = $("<span>");

   spanBaru.html(`
        <b>${teksTugas}</b><br>
        Tanggal: ${tanggalTugas}<br>
        Status: <span class="progress">Progress</span>
    `);

    let divAksi = $("<div>");
    divAksi.addClass("aksi");

    let btnEdit = $("<button>");
    btnEdit.html("Edit");
    btnEdit.addClass("edit");

    btnEdit.on("click", function () {

        let tugasBaru = prompt("Edit tugas:", teksTugas);

        if (tugasBaru !== null && tugasBaru !== "") {
            teksTugas = tugasBaru;

            spanBaru.html(`
                <b>${teksTugas}</b><br>
                Tanggal: ${tanggalTugas}<br>
                Status: <span class="progress">Progress</span>
            `);
        }
    });

    let btnStatus = $("<button>");
    btnStatus.html("Done");
    btnStatus.addClass("status");

    let selesai = false;

    btnStatus.on("click", function () {

        if (!selesai) {

            spanBaru.html(`
                <b class="done">${teksTugas}</b><br>
                Tanggal: ${tanggalTugas}<br>
                Status: <span class ="done-status">done</span>
            `);

            btnStatus.html("Progress");
            selesai = true;

        } else {

            spanBaru.html(`
                <b>${teksTugas}</b><br>
                Tanggal: ${tanggalTugas}<br>
                Status: <span class="progress">Progress</span>
            `);

            btnStatus.html("Done");
            selesai = false;
        }
    });

   let btnHapus = $("<button>");
    btnHapus.html("Hapus");
    btnHapus.addClass("hapus");

    btnHapus.on("click", function () {
        listBaru.remove();
    });

    divAksi.append(btnEdit);
    divAksi.append(btnStatus);
    divAksi.append(btnHapus);

    listBaru.append(spanBaru);
    listBaru.append(divAksi);

     daftarTugas.append(listBaru);

       inputTugas.val("");
    inputTanggal.val("");
});