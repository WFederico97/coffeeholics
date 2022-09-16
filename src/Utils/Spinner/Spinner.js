import Spinner from 'react-bootstrap/Spinner';
import './Spinner.scss'

export default function SpinnerLoading() {
    return (
        <div className='loading-spinner-container'>
            <Spinner className='loading-spinner'  />
            <h3 className='loading-spinner-h3'>Cargando productos ...</h3>
        </div>
    )
}