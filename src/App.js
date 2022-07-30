import React, { Component } from "react";
import Container from "./assets/components/container"
import ContainerItem from "./assets/components/container-item";
import Section from "./assets/components/section";
import Popup from "./assets/components/popup";
import generatePopup from "./assets/js/script"
import imageGitHub from "./assets/img/logotipo-do-github.png"


 class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
         return (
            <Section>
                <Container>
                    <img className="img-container" src={imageGitHub} alt="Imagem do GitHub" />
                    <p>Api-GitHub</p>
                    <ContainerItem>
                        <input className="input-container" id="input-event" type="text" placeholder="Digite o nickname do github"></input>
                        <button id="button-event" onClick={generatePopup} className="button-container btn btn-success">Procurar</button>
                    </ContainerItem>
                </Container>
                <Popup>
                </Popup>
            </Section>
        )
    }
}

export default App;