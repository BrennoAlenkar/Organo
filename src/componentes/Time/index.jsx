import Colaborador from '../Colaborador';
import './Time.css';

const Time = (prop) => {
    const css = { backgroundColor: prop.corSecundaria };

    return (
        (prop.colaboradores.length) > 0 ? <section className='time' style={css}>
            <h3 style={{borderColor: prop.corPrimaria}}>{prop.nome}</h3>
            <div className='colaboradores'>
                {prop.colaboradores.map(colaborador => (
                    <Colaborador
                        corDeFundo={prop.corPrimaria}
                        key={colaborador.nome}
                        {...colaborador} nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} />
                ))}
            </div>
        </section>
            : ''
    );
};

export default Time;