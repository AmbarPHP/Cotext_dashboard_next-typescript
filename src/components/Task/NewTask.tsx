import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Hidden } from "@mui/material";
import Form from "./Form";

function NewTask(): JSX.Element {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/*   */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            height: "99%",
            maxWidth: 445,
            marginLeft: "30%",
            marginTop: "1%",
            marginBottom: "10%",
            display: "flex",
            flexDirection: "column",
            background: "#373737",
            color: "white",
            fontFamily: "Rubik",
            fontSize: "28",
          }}
        >
          <h2 id="parent-modal-title" style={{ marginTop: "1%" }}>
            Add New Task
          </h2>

          <Card sx={{ background: "#373737" }}>
            <CardHeader>
              <h1 className="text-center">Add New Task</h1>
            </CardHeader>

            <CardContent>
              <Form></Form>
              <Button onClick={handleClose}>Close</Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default NewTask;
