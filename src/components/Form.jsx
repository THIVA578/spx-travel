import "./formStyle.css";

export let Form = () => {
  return (
    <>
      <div className="form">
        <form>
          <label for="name">Your Name</label>
          <input id="name" type="text" />
          <label for="email">Email</label>
          <input id="email" type="text" />
          <label for="subject">Your Subject</label>
          <input id="subject" type="text" />
          <label for="para">Description</label>
          <textarea rows="4" placeholder="Type a short message here" />

          <button className="btn">Submit</button>
        </form>
      </div>
    </>
  );
};
