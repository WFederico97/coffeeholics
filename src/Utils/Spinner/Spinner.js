import Spinner from 'react-bootstrap/Spinner';
import './Spinner.scss'

export default function SpinnerLoading() {
    return (
        <div className='loading-spinner-container d-flex col flex-wrap  col-12 '>
            <Spinner animation="border" role="status" className='loading-spinner col-12 ' />
            <h3 className='loading-spinner-h3 col-12 '>Cargando productos ...</h3>


        </div>
    )
}