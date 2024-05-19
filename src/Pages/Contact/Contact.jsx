import Hero from '../../Component/Hero';

const Contact = () => {
  return (
    <div>
      <Hero title="Contact Us"></Hero>
      <div>
        <form>
          <h1>Leave a message</h1>
          <div>
            <input type="text" placeholder="Name" name="" id="" />
          </div>
          <div>
            <input type="email" placeholder="Email" name="" id="" />
          </div>
          <div>
            <input type="text" placeholder="Phone" name="" id="" />
          </div>
          <div>
            <textarea type="text" placeholder="Message" name="" id="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
