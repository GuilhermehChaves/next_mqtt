export default function Container(props) {
    return (
        <div id={props.id} className={`container__content ${props.className}`}>
            {props.children}
        </div>
    );
}
