function Dashboard() {
  const token = localStorage.getItem("token");

  console.log(token);


  const handleSubmit = (e: Event): void => {
    fetch("http://localhost:8080/auth-endpoint", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${JSON.stringify(token)}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          JSON.stringify(console.error(data));
        } else {
          JSON.stringify(console.log(data.message));
        }
      });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Req</button>
    </div>
  );
}

export default Dashboard;
