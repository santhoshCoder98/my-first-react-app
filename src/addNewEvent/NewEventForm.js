import { useState, useRef } from 'react'
import './NewEventForm.css'

export default function NewEventList({ addEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("Chennai");

    // const title = useRef();
    // const date = useRef();

    const submitData = (e) => {
        e.preventDefault();
        const eventData = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        };
        addEvent(eventData);
        resetForm();
    }

    const resetForm = () => {
        setTitle("");
        setDate("");
        // title.current.value = "";
        // date.current.value = "";
    }

    return (
        <form className="new-event-form" onSubmit={submitData}>
            <label>
                <span>Event Title:</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
                <span>Event Date:</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyedrabad">Hyderabad</option>
                    <option value="Madurai">Madurai</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}
