import './styles.css'


type Props = {
    text: string;
}

export default function ButtonWhite({ text }: Props) {
    return (
        <div className="gkr-btn gkr-btn-white">
            {text}
        </div>
    );
}