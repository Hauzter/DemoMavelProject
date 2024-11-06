import './App.css'

// const data = [
//   { name: "abc", age: 19, gender: "Male" },
//   { name: "def", age: 19, gender: "Female" },
//   { name: "ghi", age: 25, gender: "Male" },
// ]
export const App = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://gateway.marvel.com/v1/public/characters?ts=1667722238&apikey=df17d2ee72f64e3bea59f98b87e57bb9&hash=18b5a5757dc9077ff8f8fbab26a6a4fb')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);
  return (
    <div className="App">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Modified</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.modified}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
  );
}

export default App;