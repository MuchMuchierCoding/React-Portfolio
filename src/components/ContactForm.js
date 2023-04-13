import {useState} from 'react';
import ReactDOM from 'react-dom/client';

function ContactForm() {

            const [inputs, setInputs] = useState({});
            const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
            }

            const handleSubmit = (event) => {
                event.preventDefault();
                alert(inputs);
            }
            return (
                <form action="https://formsubmit.co/f85f369c7a8978dd0c9e71b2dbc8ddf1" method="POST" className="ContactForm">
                    <label>Your name:
                        <input
                            type="text"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>Email address:
                        <input
                            type="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>Message:
                        <input
                            type="text"
                            name="message"
                            value={inputs.message || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <input type="submit" />
                </form>
            );
        }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactForm />);

export default ContactForm;
