function kirimPesan() {
  emailjs.send("service_vhw6g24", "template_konfirmasi", {
    message: "Tugas Anda Sudah Dikonfirmasi"
  })
  .then(function(response) {
    console.log("Email berhasil dikirim", response.status, response.text);
    document.getElementById("tombol-text").style.display = "none";
    document.getElementById("tombol-centang").style.display = "inline";
    document.getElementById("notif").style.display = "block";

    setTimeout(() => {
      document.getElementById("tombol-text").style.display = "inline";
      document.getElementById("tombol-centang").style.display = "none";
      document.getElementById("notif").style.display = "none";
    }, 3000);
  }, function(error) {
    console.error("Gagal mengirim email:", error);
    alert("Gagal mengirim pesan.");
  });
}

