import './App.css';
import { useState } from 'react';
import Title from './components/title/Title';
import Modal from './components/modal/Modal';
import EventList from './components/eventList/EventList';
import NewEventForm from './addNewEvent/NewEventForm';

function App() {
  //State Variables
  const [name, setName] = useState('Santhosh');
  const [showHobbies, setShowHobbies] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [hobbies, setHobbies] = useState([]);

  const addEvent = (hobby) => {
    setHobbies((prevHobbies) => {
      return [...prevHobbies, hobby]
    })
    setShowModal(false);
  }

  //Variables
  const newsDetails = "Eu eiusmod deserunt pariatur laborum ex fugiat culpa Lorem enim occaecat dolor velit."

  const handleClick = (id) => {
    setHobbies((prevHobbies) => {
      return prevHobbies.filter((hobby) => {
        return id !== hobby.id;
      })
    })
    console.log(hobbies);
  }
  const changeName = () => {
    if (name === 'Santhosh')
      setName('Santhosh Chandrasekaran');
    else
      setName('Santhosh')
  }


  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal &&
        // <Modal hideModal={setShowModal}>
        //   <h2>One Piece Template System</h2>
        //   <p>Monkey D. Luffy</p>
        // </Modal>
        <Modal isHobbyDoneToday={false}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      }
      <Title newsTitle="Latest News" newsInfo={newsDetails} />
      <Title newsTitle="Latest News" newsInfo="Russia and Ukraine" />
      <h1>My Name is {name}</h1>
      <button onClick={changeName}>Name Change</button>
      <div className="buttonContainer">
        {showHobbies && (
          <div className="hideButton">
            <button onClick={() => setShowHobbies(false)}>Hide Hobbies</button>
          </div>
        )}
        {!showHobbies && (
          <div className="showButton">
            <button onClick={() => setShowHobbies(true)}>Show Hobbies</button>
          </div>
        )}
      </div>
      {showHobbies && <EventList hobbies={hobbies} handleClick={handleClick} />}
    </div>
  );
}

export default App;
