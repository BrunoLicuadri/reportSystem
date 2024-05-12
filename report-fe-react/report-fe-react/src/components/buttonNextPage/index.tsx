import './styles.css'


type Props={
    onNextPage: Function;
}

export default function ButtonNextPage({onNextPage}: Props){

    return (
        <div onClick={ ()=> onNextPage()} className="gkr-btn-next-page">Carregar Mais</div>
    );
}