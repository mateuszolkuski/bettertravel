import "./styles/ContactFormStyles.scss";

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Tell us what is on your mind!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="e-mail" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
