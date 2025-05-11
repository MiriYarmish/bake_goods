import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurr } from "../redux/dataActions";
import './login.css'

export const Login = () => {
    const n = useNavigate();
    const allU = useSelector(u => u.dataU.my_users);
    const allM = useSelector(u => u.dataU.manager);
    const dis = useDispatch();

    const [data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    });

    const [message, setMessage] = useState('');

    const exists = () => {
        const index = allU.findIndex((u) => u.name === data.name && u.pass === data.pass);
        if (index !== -1) {
            if (!data.name || !data.email || !data.pass) {
                setMessage("כל השדות חייבים להיות מלאים");
                return;
            }
            else {
                dis(setCurr(allU[index].name));
                n("./");
            } // Redirect to home page after login
        } else if (data.name === allM.name && data.pass === allM.pass) {
            if (!data.name || !data.email || !data.pass) {
                setMessage("כל השדות חייבים להיות מלאים");
                return;
            }
            else {
                dis(setCurr(allM.name));
                n("./");
            }// Redirect to home page for manager
        } else {
            if (!data.name || !data.email || !data.pass) {
                setMessage("כל השדות חייבים להיות מלאים");
                return;
            }
            setMessage("שם משתמש או סיסמה לא נכונים");
            dis(setCurr("אורח"));
            n("../sighIn"); // Redirect to signIn page
        }

    };

    return (
        <div className="form">
            <h2>התחברות</h2>

            <label htmlFor="usr">שם:</label>
            <input
                className="form-control"
                type="text"
                placeholder="הכנס שם"
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <div className="form-group">
                <label htmlFor="email">אימייל:</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="הכנס אימייל"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
            </div>

            <div className="form-group">
                <label htmlFor="pwd">סיסמה:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="הכנס סיסמה"
                    onChange={(e) => setData({ ...data, pass: e.target.value })}
                />
            </div>

            <button
                className="btn"
                onClick={(e) => {
                    e.preventDefault();
                    exists();
                }
                }
            >
                התחבר
            </button>

            {message && <div className="message">{message}</div>}
        </div>
    );
};
