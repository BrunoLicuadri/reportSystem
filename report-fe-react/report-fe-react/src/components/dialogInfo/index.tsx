import ButtonWhite from "../buttonWhite";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({ message, onDialogClose }: Props) {

    return (
        <div className="gkr-dialog-info-background" onClick={() => onDialogClose()}>
            <div className="gkr-dialog-box" onClick={(e)=> e.stopPropagation()}>
                <h2>{message}</h2>
                <div onClick={() => onDialogClose()} className="gkr-dialog-btn">
                    <ButtonWhite text="OK" />
                </div>
            </div>
        </div>
    );
}