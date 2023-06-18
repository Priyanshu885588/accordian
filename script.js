var accordian = document.getElementsByClassName("content-container");

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
        this.classList.toggle("active");
        if (document.body.style.background === "rgb(100, 124, 99)") {
            document.body.style.transition='1s'
            document.body.style.backgroundColor = ""; // Reset to default color
        } else {
            document.body.style.transition='1s'
            document.body.style.background = "rgb(100, 124, 99)"; // Replace "red" with your desired color
        }
        
    });
}
