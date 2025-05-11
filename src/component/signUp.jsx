import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/dataActions";
import { useNavigate } from "react-router-dom";
import "./sighnUp.css"

export const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    });
    const [message, setMessage] = useState('');
    const n = useNavigate();
    const disU = useDispatch();

    // פונקציה לבדוק אם המשתמש כבר קיים
    const handleSignUp = (e) => {
        e.preventDefault();
        
        if (!data.name || !data.email || !data.pass) {
            setMessage("כל השדות חייבים להיות מלאים");
            return;
        }
        // אם לא קיים, נבצע את ההרשמה
        disU(addUser(data));
        setMessage("הרשמה הצליחה!");
        n("../");
    };

    return (
        <div className="form">
            <h2>הרשמה</h2>
            <label htmlFor="usr">שם:</label>
            <input
                className="form-control"
                type="text"
                placeholder="הכנס שם"
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <label htmlFor="email">אימייל:</label>
            <input
                type="email"
                className="form-control"
                placeholder="הכנס אימייל"
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <label htmlFor="pwd">סיסמה:</label>
            <input
                type="password"
                className="form-control"
                placeholder="הכנס סיסמה"
                onChange={(e) => setData({ ...data, pass: e.target.value })}
            />

            <button onClick={handleSignUp}>הרשמה</button>

            {message && <div className={`message ${message.includes('הצליחה') ? 'success' : ''}`}>{message}</div>}
        </div>
    );
};
