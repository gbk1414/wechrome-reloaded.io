const clockTitle = document.getElementById("clock");

function clockHMS() {
  const date = new Date();
  clockTitle.innerText = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}

clockHMS();
setInterval(clockHMS, 1000);
