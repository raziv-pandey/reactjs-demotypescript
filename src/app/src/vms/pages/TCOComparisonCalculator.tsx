import { Divider } from "@mui/material";
import { TCOHeader } from "./TCOHeader";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const TCOComparisonCalculator = () => {
  return (
    <>
      <TCOHeader />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <h1 className="customTCOHeader">TCO Comparison Calculator</h1>
            <div className="header-body">
            <p>
              See how Total Cost of Ownership is lower with VMWare server
              virtualization and private cloud solution compared to Microsoft
            </p>
          </div>
          </Item>
        </Grid>
      </Grid>
      {/* <div className="row customTCOHeaderRow">
        <div className="col">
          <div className="header-title">
            <h1 className="customTCOHeader">TCO Comparison Calculator</h1>
          </div>
          <div className="header-body">
            <p>
              See how Total Cost of Ownership is lower with VMWare server
              virtualization and private cloud solution compared to Microsoft
            </p>
          </div>
          <Divider />
        </div>
      </div> */}
      
    </>
  );
};
