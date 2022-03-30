import './Modal.css'

export default function Modal(props) {
    return (
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "3px solid",
                borderColor: props.isHobbyDoneToday ? "#ff4000" : "blue",
                textAlign: "center"
            }}>
                {props.children}
            </div>

        </div>
    )
}
