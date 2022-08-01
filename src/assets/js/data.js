import "./models/token";
import { token } from "./models/token";

async function ShowData() {
    const input = document.getElementById("input-event").value;
    const data = await Responseuser(input);

    if (!data.login) {
        window.alert(data.message);
    }
    else {
        const objectData = {
            location: data.location,
            name: data.name,
            url: data.html_url,
            image_github: data.avatar_url
        }
        return objectData;
    }
}

async function Responseuser(input) {
    let user = new token(input);

    try {
        const response = await fetch(user.URL());
        const data = await response.json();
        return data;
    }

    catch (error) {
        window.alert(error)
    }
}

export default ShowData;
