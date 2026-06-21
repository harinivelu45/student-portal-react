function ContactInfo({ email, phone, address }) {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default ContactInfo;
