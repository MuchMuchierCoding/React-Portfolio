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
                <form onSubmit={handleSubmit} className="ContactForm">
                    <label>Your name:
                        <input
                            type="text"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Email address:
                        <input
                            type="text"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Message:
                        <input
                            type="text"
                            name="message"
                            value={inputs.message || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form>
            );
        }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactForm />);

export default ContactForm;
