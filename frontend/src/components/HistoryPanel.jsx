import { useEffect, useState } from "react";
import axios from "axios";

function HistoryPanel() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:8000/analysis-history")
            .then((response) => {
                setHistory(response.data);
            });

    }, []);

    return (
        <div className="history-container">

            <h2>Project Analysis History</h2>

            {history.map((item) => (

                <div
                    key={item.id}
                    className="history-card"
                >

                    <h3>{item.project_name}</h3>

                    <p>
                        {item.created_at}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default HistoryPanel;