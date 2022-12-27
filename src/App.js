import logo from './logo.svg';
import './App.css';
import useApi from './useApi'
function App() {
  const { loading, data } = useApi('https://jsonplaceholder.typicode.com/users')
    if (loading) return <h1>Loading</h1>
  return (
    <div className="App">
      <h2>Data fetched successfully.</h2>
      <table>
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
