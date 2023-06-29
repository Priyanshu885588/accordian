var accordian = document.getElementsByClassName("content-container");

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
        this.classList.toggle("active");
        if (document.body.style.background === "rgb(50, 50, 100)") {
            document.body.style.transition='1s'
            document.body.style.background = "black"; // Reset to default color
        } else {
            document.body.style.transition='1s'
            document.body.style.background = "rgb(50, 50, 100)"; // Replace "red" with your desired color
        }
        
    });
}
