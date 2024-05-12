import './styles.css';

type Props = {
    text: string;
}

export default function ButtonBlue({ text }: Props) {
    return (
        <button type="submit"  className="gkr-btn gkr-btn-blue">
            {text}
        </button>
    );
}