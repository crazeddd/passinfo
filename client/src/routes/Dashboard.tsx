import { useNavigate } from "@solidjs/router";

export default function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSubmit = (e: Event): void => {
    fetch("https://literate-succotash-46xwrx49j6r2j4j9-8080.app.github.dev/auth-endpoint", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        {
          JSON.stringify(console.log(data.message));
        }
      })
      .catch((err) => {
        console.log(`Unexpected error when fetching (${err})`);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    console.log("Logged out");
    navigate("/");
  }

  return (
    <div class="secondary container column gp-1" >
      <h4>Dashboard</h4>
      <button onClick={handleSubmit}>Req</button>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}