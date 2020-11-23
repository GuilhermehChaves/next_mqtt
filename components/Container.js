export default function Container(props) {
    return (
        <div className="container__content container__content--center">
            {props.children}
        </div>
    );
}
