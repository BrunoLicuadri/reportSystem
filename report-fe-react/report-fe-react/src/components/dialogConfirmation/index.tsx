import ButtonBlue from "../buttonBlue";
import ButtonWhite from "../buttonWhite";


type Props = {
    
    id: number;
    message: string;
    onDialogAnswer: Function;
}


export default function DialogConfirmation({ id, message, onDialogAnswer }: Props) {

    return (
        <div className="gkr-dialog-info-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="gkr-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="gkr-dialog-btn-container" >
                    <div onClick={() => onDialogAnswer(false, id)}>
                        <ButtonWhite text="Não" />
                    </div>

                    <div onClick={() => onDialogAnswer(true, id)}>
                        <ButtonBlue text="Sim" />
                    </div>
                </div>

            </div>
        </div>
    )
}