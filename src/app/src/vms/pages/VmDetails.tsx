import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import AlertDialog from "../components/AlertDialog";

export const VmDetails = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const editVm = (id: any) => {
    navigate(`/editVms/${id}`);
  };

  const deleteVm = () => {
    axios.delete(`http://localhost:3006/vms/${id}`).then((response) => {
      if (response.status === 200 && response.statusText === "OK") {
        const message = "Successfully Deleted the Student Record";
        alert(message);
        setOpen(false);
        getVms();
      }
    });
  };

  function func1() {
    setOpen(true);
  }
  function func2(id: any) {
    console.log(id);
    setId(id);
  }

  const getVms = async () => {
    await axios
      .get("http://localhost:3006/vms")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    getVms();
  }, [id]);

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to proceed?"}
        </DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
            autoFocus
          >
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={deleteVm}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Card>
        <CardHeader
          title="VM Details"
          action={
            <Link to="/addVms">
              <Button variant="contained">Add VMs</Button>
            </Link>
          }
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table className="customTable" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>CPU</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any, index) => (
                  <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.cpu}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => editVm(row.id)}
                        variant="contained"
                        color="primary"
                        className="customButtonEdit"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        //onClick={() => deleteVm(row.id)}
                        onClick={() => {
                          func1();
                          func2(row.id);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};
