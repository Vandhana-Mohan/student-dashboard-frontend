import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Navbar() {
  return (
    <div>
      <Link to="/" color="primary" variant="body2" underline="always">
        {" "}
        <h2>Student App</h2>{" "}
      </Link>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Link to="/students">
          <ListItem>Students</ListItem>
        </Link>
        <Link to="/about">
          <ListItem>About</ListItem>
        </Link>
        <Link to="/contact">
          <ListItem>Contact</ListItem>
        </Link>
      </List>
    </div>
  );
}

export default Navbar;