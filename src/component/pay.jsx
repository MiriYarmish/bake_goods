import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pay.css';

export const Pay = () => {
  const [data, setData] = useState({
    numOfCard: '',
    date: '',
    number: ''
  });
  const [message, setMessage] = useState('');

 const n = useNavigate();

  const handleSignUp = () => {

    if (!data.numOfCard || !data.date || !data.number) {
      setMessage("כל השדות חייבים להיות מלאים");
      return;
    }
    else
      n("../order");
  };

 

  return (
    <div className="pay-container">
      <div className="pay-form">
        <h3>פרטי אשראי</h3>

        {/* שדה מספר כרטיס */}
        <label htmlFor="usr">מספר כרטיס:</label>
        <input
          type="number"
          placeholder="הכנס מספר"
          value={data.numOfCard}
          onChange={(e) => { setData({ ...data, numOfCard: e.target.value }) }}
        />

        {/* שדה תוקף */}
        <label htmlFor="date">תוקף:</label>
        <input
          type="date"
          value={data.date}
          onChange={(e) => { setData({ ...data, date: e.target.value }) }}
        />

        {/* שדה ספרות אחרונות */}
        <label htmlFor="number">ספרות אחרונות:</label>
        <input
          type="number"
          placeholder="הכנס ספרות אחרונות"
          value={data.number}
          onChange={(e) => { setData({ ...data, number: e.target.value }) }}
        />

        {/* כפתור הזמנה */}
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSignUp();
          }}
        >
          הזמנה
        </button>
        { message && <div className="message">{message} </div>}
      </div>
    </div>
    
           
  );
}
