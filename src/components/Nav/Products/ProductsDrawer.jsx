import * as React from "react";
import { Box, Drawer, Button } from "@mui/material/";

import "./productDrawer.css";
import AccordionMenu from "./Accordion";
// import InboxIcon from "@mui/icons-material/Inbox";
// import MailIcon from "@mui/icons-material/Mail";

export default function ProductDrawer() {
  const [state, setState] = React.useState({
    //   top: false,
    left: false,
    //   bottom: false,
    //   right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <AccordionMenu />
    </Box>
  );

  return (
    <div className="d-none d-md-block">
      {/* ['left', 'right', 'top', 'bottom'] */}
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="products-btn"
            style={{ textTransform: "unset" }}
          >
            Products
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
