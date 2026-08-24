import "./form.css";

export default function () {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" required />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="number" required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" required />
      </div>
      <div>
        <label>Are You An Employee?</label>
        <input type="checkbox" required className="big-checkbox" />
      </div>
      <div>
        <label>Salary</label>
        <input type="text" required />
      </div>
      <button>Submit</button>
    </form>
  );
}
