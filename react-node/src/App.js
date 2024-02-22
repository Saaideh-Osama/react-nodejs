import logo from "./logo.svg";
import "./App.css";
var globaldata = "";
var globalprice = "";
function setData(data) {
  globaldata = data;
}
fetch("http://localhost:8000/getdata")
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((err) => console.log(err));
function setPrice(price) {
  globalprice = price;
}
fetch("http://localhost:8000/getprice")
  .then((response) => response.json())
  .then((json) => setPrice(json))
  .catch((err) => console.log(err));

function App() {
  return (
    <div className="App">
      <h1> {globaldata.name}</h1>
      <h2> {globaldata.email}</h2>
      <h3> {globaldata.age}</h3>

      <div className="card w-25">
        <div className="card-body">{globalprice.price1} </div>
      </div>
      <div className="card w-25">
        <div className="card-body">{globalprice.price2} </div>
      </div>
      <div className="card w-25">
        <div className="card-body">{globalprice.price3} </div>
      </div>
      <div className="card w-25">
        <div className="card-body">{globalprice.price4} </div>
      </div>
    </div>
  );
}

export default App;
