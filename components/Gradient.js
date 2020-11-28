export default function Gradient(props) {
    return(
        <div className={`container--gradient ${props.className}`}>
            {props.children}
        </div>
    );
}
