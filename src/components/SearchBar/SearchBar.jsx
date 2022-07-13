import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    //navigate to another route
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FormControl>
      <InputLabel htmlFor="component-outlined" style={{color:'aliceblue'}}>Search</InputLabel>
      <OutlinedInput
        id="component-outlined"
        value={setValue}
        onChange={handleChange}
        label="Name"
      />
    </FormControl>
  );
};

export default SearchBar;
