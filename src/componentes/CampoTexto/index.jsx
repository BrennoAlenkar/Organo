
import './CampoTexto.css'

const CampoTexto = (prop) => { 

    const placeholderModificado = `${prop.placeholder}`


    const aoDigitado = (evento) => {
        prop.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{prop.label}</label>
            <input value={prop.valor} onChange={aoDigitado}  required={prop.obrigatorio} placeholder={placeholderModificado} type="text" />
        </div>
    )
}

export default CampoTexto