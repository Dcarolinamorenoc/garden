export const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `ID ${hours}:${minutes}:${seconds} /`;
}
setInterval(()=>{
    document.querySelector("#clock").innerText = updateClock();
}, 1000);