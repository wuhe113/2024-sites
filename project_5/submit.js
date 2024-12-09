function submitWindow(){
    const submit = document.getElementById("submit");
    const save = document.getElementById("push-data")

    save.onclick = function (e) {
        submit.style.display = "block";

        setTimeout(function () {
            submit.style.display = "none";
        }, 2000);
    };

};

submitWindow();