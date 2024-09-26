import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape-end fundo'>

            <div className='rodape-icons'>
                <a href="#"><img src="/imagens/fb.png" alt="Foto Facebook" /></a>
                <a href="#"><img src="/imagens/ig.png" alt="Foto instagram" /></a>
            </div>

            <div className='rodape-img'>
            <img src="/imagens/logo.png" alt="Foto organo" />
            </div>

            <p>Desenvolvido por <a href="https://github.com/BrennoAlenkar" target='blank'>Brenno Alencar</a></p>

        </footer>
    )
} 

export default Rodape