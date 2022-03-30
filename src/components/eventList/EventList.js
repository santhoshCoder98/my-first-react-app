import styles from './EventList.module.css'

export default function EventList({ hobbies, handleClick }) {
    return (
        <div className="hobbies-style">
            {hobbies.map((hobby) => (
                <div className={styles.card} key={hobby.id}>
                    <h3>{hobby.title}</h3>
                    <p>{hobby.date}</p>
                    <p>{hobby.location}</p>
                    <button onClick={() => handleClick(hobby.id)}>Delete Data</button>
                </div>
            ))}
        </div>
    )
}
