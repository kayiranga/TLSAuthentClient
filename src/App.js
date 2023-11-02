
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Login Authentication</h1>
      <form>
          <div className="form-group my-2">
          
          <label>Username</label>
          <input
            type="text"
            className="form-control"
          />

          </div>
          <div className="form-group my-2">
              <label>password</label>
               <input
                  type="text"
                 className="form-control"
             
              />
            </div>

        <div>
          <button className="btn btn-primary m-4" >
            Register
          </button>
          
        </div>

        </form>

      
    </div>
  );
}

export default App;
