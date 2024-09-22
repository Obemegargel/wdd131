const change_flag = document.getElementById("themeSelector");
const newImg = document.createElement("img");
const foot = document.getElementById("foot");

change_flag.addEventListener("change", changeTheme);

function changeTheme() {
    let selected_value = change_flag.value;

    foot.innerHTML = "";

    if (selected_value === "dark") {
        document.body.classList.add("dark");
        newImg.src = "images/byui-logo_white.png";
        console.log("Setting dark mode image:", newImg.src);
    } else {
        document.body.classList.remove("dark");
        newImg.src = "images/byui-logo_blue.png";
        console.log("Setting light mode image:", newImg.src);
    
    }

    foot.appendChild(newImg);
}