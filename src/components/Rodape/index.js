import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='container-rodape'>
                <div className='container-botoes'>
                    <a href="http://www.facebook.com/"><img src="/images/fb.png" alt="Ícone do Facebook" /></a>
                    <a href="http://www.twitter.com/"><img src="/images/tw.png" alt="Ícone do Instagram" /></a>
                    <a href="http://www.instagram.com/"><img src="/images/ig.png" alt="Ícone do Twitter" /></a>
                </div>
                <img src="/images/logo.png" alt="Logo do Organo" />
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    );
}

export default Rodape;