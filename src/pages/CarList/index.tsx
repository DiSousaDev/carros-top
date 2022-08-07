import ProductCard from '../../components/ProductCard';
import SearchCard from '../../components/SearchCard';
import './styles.css';


const CarList = () => {
    return (
        <div className="container my-4">
            <div className='row'>
            <div className='mb-4'>
                    <SearchCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
                <div className='mb-3 col-sm-6 col-lg-4'>
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default CarList;