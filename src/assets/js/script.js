import "./models/token";
import { token } from "./models/token";

async function generatePopup(){
    const object = await ShowData();
    const popup = document.getElementsByClassName("popup")[0];
    const image = document.getElementsByClassName("image-github")[0];
    const name = document.getElementsByClassName("name-github")[0];
    const location = document.getElementsByClassName("location-github")[0];
    const buttonPopupGithub = document.getElementsByClassName("button-popup-github")[0];
    const container = document.getElementsByClassName("container")[0];

    
    name.innerHTML = object.name;
    image.src = object.image_github;
    location.innerHTML = object.location;

    buttonPopupGithub.addEventListener('click',  () =>{
        window.location.href = object.url;
    })

    

    container.classList.toggle("visibilitySection");
    popup.classList.toggle("visibilityPopup");

}

async function ShowData(){
    const input = document.getElementById("input-event").value;
    const data = await ResponseUser(input);

    if(!data.login){
        window.alert(data.message);
    }
    else{
        const objectData = {
            location: data.location,
            name: data.name,
            url: data.html_url,
            image_github: data.avatar_url
        }
        
        return objectData;
    }
}

async function ResponseUser(input) {
    let User = new token(input);
    try {
        const response = await fetch(User.URL());
        const data = await response.json();
        return data;
    }
    catch (error) {
        window.alert(error)
    }
}

export default generatePopup;
