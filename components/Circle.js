export default function Circle(props) {
    return (
        <a href={props.href} title={props.title}>
            <div className={`circle ${props.className}`}>
            <p id={props.id} className="value">{props.value}</p>
                <p className="title">
                    {props.children}
                    {props.value_name}
                </p>
            </div>
        </a>
    );
}
