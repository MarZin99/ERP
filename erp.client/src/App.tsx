import './App.css';
import axios from "axios"

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

const response = await axios.get("http://localhost:5000/api/employees");

function App() {

    console.log(response.data.toJson());

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
        </div>
    );
}

export default App;