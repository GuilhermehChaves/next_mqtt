export default function Circle(props) {
    return (
        <a href={props.href} title={props.title}>
            <div className={`circle ${props.className}`}>
                <p id={props.id} class="value">0</p>
                <p class="title">
                    {props.children}
                    {props.value_name}
                </p>
            </div>
        </a>
    );
}
