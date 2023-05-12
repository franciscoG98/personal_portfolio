import './formStyles.scss'

const ContactForm = () => {
  return (
    <form className="form_container">
        <label className="form_label">Name</label>
        <input
            className="form_input"
            required
            type="text"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
        />

        <label className="form_label">Email</label>
        <input
            className="form_input"
            required
            type="text"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
        />

        <label className="form_label">Message</label>
        <textarea
            className="form_input textarea"
            required
            rows={8}
            type="text"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
        />

        <input
            className="form_input submit_btn"
            type="submit"
            value="send"
        />
    </form>
  )
}

export default ContactForm