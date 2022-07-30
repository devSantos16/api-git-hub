import "./models/token";
import { token } from "./models/token";



async function generatePopup(){
    const object = await ShowData();
    const popup = document.getElementsByClassName("popup")[0];
    const image = document.getElementsByClassName("image-github")[0];
    const name = document.getElementsByClassName("name-github")[0];
    const username = document.getElementsByClassName("username-github")[0];
    const button = document.createElement("a");


    button.classList.add("github-button");
    button.href = object.url;

    button.ariaLabel = `Follow @${object.username} on GitHub`;
    button.textContent = `Follow ${object.username}`;
    document.getElementsByClassName("github-button-container")[0].appendChild(button);

    image.src = object.image_github;
    name.innerHTML = object.name;
    username.innerHTML = object.username;

    popup.classList.toggle("visibilityPopup");


}

async function ShowData(){
    const input = document.getElementById("input-event").value;
    const data = await ResponseUser(input);

    if(!data.login){
        window.alert(data.message);
    }
    else{
        let objectData = {
            username: data.login,
            name: data.name,
            url: data.html_url,
            image_github: data.avatar_url
            
        }
        return objectData;
    }
}

async function ResponseUser(input) {
    let Pessoa = new token(input);
    try {
        const response = await fetch(Pessoa.URL());
        const data = await response.json();
        return data;
    }
    catch (error) {
        window.alert(error)
    }
}

export default generatePopup;
