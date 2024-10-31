// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [botToken, setBotToken] = useState("");

    useEffect(() => {
        // Fetch bot token from backend
        axios.get("https://localhost:6000/api/getAppId")
            .then((response) => {
              console.log(response.data)
                setBotToken(response.data.botToken);
            })
            .catch((error) => console.error("Error fetching bot token:", error));
    }, []);
    console.log(botToken)
    console.log(botToken)

    return (
        <div>
            <h1>Telegram Mini App</h1>
            <p>Bot Token: {botToken}</p>
        </div>
    );
}

export default App;
