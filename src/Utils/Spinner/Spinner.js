import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerLoading() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando productos...</span>
        </Spinner>
    )
}