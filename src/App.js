import "./App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  return (
    <div className="app">
      <h1>COVID19 TRACKER</h1>
      {/* Header */}
      {/* Title + dropdown countries */}

      <FormControl variant="outlined" className="app__dropdown">
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value={0}>zero</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* info boxes */}
      {/* info boxes */}
      {/* info boxes */}

      {/* Table */}
      {/* chart */}

      {/* Map */}
    </div>
  );
}

export default App;
