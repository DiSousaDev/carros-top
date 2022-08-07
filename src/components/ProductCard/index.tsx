
import MainButton from '../../components/MainButton';
import CarImg from '../../assets/images/car-img.png'

import './styles.css';



const ProductCard = () => {
    return (
        <div className='base-card img-card'>
            <div className='card-img'>
                <img src={CarImg} alt='Carro' />
            </div>
            <div className='card-text'>
                <h1>Audi Supra TT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <MainButton btnName='comprar' />
        </div>
    );
}

export default ProductCard;