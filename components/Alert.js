export default function Alert(props) {
    return (
        <span className="warning warning-blink"
            title={props.title}
        >
            !
        </span>
    );
}
