import React from "react";
import "./AppAbout.styles.scss";
import darlan from "../../images/darlan.png";
import guilhermeC from "../../images/guilhermeC.png";
import guilhermeS from "../../images/guilhermeS.png";
import hyan from "../../images/hyan.png";
import ruan from "../../images/ruan.png";
import thiago from "../../images/thiago.png";

export default function AppAbout() {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1>Time de Desenvolvimento</h1>
                <div className="image-grid">
                    <div className="image-wrapper">
                        <img src={darlan} alt="Imagem 1" className="image" />
                        <div className="info-container">
                            <p className="image-description">Darlan Cristian Rodrigues dos Santos</p>
                            <p className="image-email">darlancrs@unipam.edu.br</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={guilhermeC} alt="Imagem 2" className="image" />
                        <div className="info-container">
                            <p className="image-description">Guilherme Caixeta Rodrigues</p>
                            <p className="image-email">Guilhermecaixeta1@unipam.edu.br</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={guilhermeS} alt="Imagem 3" className="image" />
                        <div className="info-container">
                            <p className="image-description">Guilherme Souza Reis de Melo Lopes</p>
                            <p className="image-email">guilhermesrml@unipam.edu.br</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={hyan} alt="Imagem 4" className="image" />
                        <div className="info-container">
                            <p className="image-description">Hyan Justo Amorim</p>
                            <p className="image-email">hyanjusto@unipam.edu.br</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={ruan} alt="Imagem 5" className="image" />
                        <div className="info-container">
                            <p className="image-description">Ruan Carlos Gomes Silva</p>
                            <p className="image-email">ruancarlos@unipam.edu.br</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={thiago} alt="Imagem 6" className="image" />
                        <div className="info-container">
                            <p className="image-description">Thiago Aparecido de Araujo</p>
                            <p className="image-email">thiagoaaraujo@unipam.edu.br</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}; 