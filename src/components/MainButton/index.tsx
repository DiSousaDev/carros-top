import './styles.css';

type Props = {
    btnName: string;
}

const MainButton = ({ btnName }: Props) => {
    return (
        <button className='btn bg-secondary'>{btnName}</button>
    );
}

export default MainButton