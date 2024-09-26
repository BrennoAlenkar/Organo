import './ListaSuspensa.css'

const ListaSuspensa = (prop) => {
    return (
        <div className="lista-suspensa">
            <label>{prop.label}</label>
            <select onChange={evento => prop.aoAlterado(evento.target.value)} required={prop.required} value={prop.valor}>
                <option value=""></option>
                {prop.itens.map(item => <option key={item}>{item}</option>)} {
                }
            </select>
        </div>
    );
}

export default ListaSuspensa;