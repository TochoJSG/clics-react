import React from "react";
import '../estilos/Boton.css'
function Boton({texto, estadoBtn, manejarClics}){
    return(
        <button 
        className={estadoBtn? "btn.clic":"btn-reinicio"}
        onClick={manejarClics}>
            {texto}
        </button>
    );
}
export default Boton;