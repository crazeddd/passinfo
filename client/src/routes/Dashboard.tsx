import { useNavigate } from "@solidjs/router";
import { useForm } from "../utils/useForm";

export default function Dashboard() {
  const formFields = { username: "", password: "" };
  const { form, handleChange } = useForm(formFields);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSubmit = (e: Event): void => {
    fetch("https://literate-succotash-46xwrx49j6r2j4j9-8080.app.github.dev/create-item", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((data) => {
        {
          JSON.stringify(console.log(data.message));
        }
      })
      .catch((err) => {
        console.error(`Unexpected error when fetching (${err})`);
      });
  };

  const handleLogOut = (): void => {
    localStorage.removeItem("token");
    console.log("Logged out");
    navigate("/");
  }

  return (
    <div class="secondary container column gp-1" >
      <h4>Dashboard</h4>
      <div class="column gp-2">
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onchange={handleChange}
        >
        </input>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          value={form.password}
          onchange={handleChange}
        >
        </input>
        <button class="primary" onClick={handleSubmit}>Submit</button>
      </div>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}