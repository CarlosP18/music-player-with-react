import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import 'popper.js'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import { SongList } from './player';


function App() {
  return (
    <>
    <div className="container rounded">
        <div className="card text-center">
            <SongList />
        </div>
    </div>
</>
  );
}

export default App;
