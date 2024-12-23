// function Greetings (props) {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.studentNumber}</p>
//         </div>
//     )
// }

function Greetings ({name, studentNumber}) {
    let greeting = "Hello, ";
    let buttonText = "Click me!"

    const alertName = () => {
        alert(name);
    }
    return (
        <div>
            <h1>
                {greeting}{name}
            </h1>
            <p>{studentNumber}</p>

            <button onClick={alertName}>{buttonText}</button>
        </div>
    )
}

export default Greetings;