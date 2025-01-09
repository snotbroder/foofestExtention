function ContactForm({ index }) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col">
        <h4 className="border-b-2 border-tertiary py-2 mb-2 text-main-1">Information for person {index + 1}</h4>
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" type="text" name={`first_name_${index}`} placeholder="John" required></input>
      </div>
      <div className="flex flex-col">
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" type="text" name={`last_name_${index}`} placeholder="Doe" required></input>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name={`email_${index}`} placeholder="john@doe.com" required></input>
      </div>
    </section>
  );
}

export default ContactForm;
