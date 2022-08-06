import './styles.css';

import MainImg from '../../assets/images/main-image.svg';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='bg-secondary home-content-container'>
                <div className='home-img-container'>
                    <img src={MainImg} alt='carro principal' />
                </div>
                <div className='home-text-container'>
                    <h1>O carro perfeito para você</h1>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>      
            <div className='home-button-container'>
                <button className='btn bg-secondary'>Ver Catálogo</button>
                <p>Comece agora a navegar</p>
            </div>   
        </div>
    );
}

export default Home;