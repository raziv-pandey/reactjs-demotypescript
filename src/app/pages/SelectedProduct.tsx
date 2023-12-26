import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useProductQuery } from "../services/productApi";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Alert,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SelectedProduct = () => {
  const { productId } = useParams();
  var productDetail: any = [];
  const { error, isLoading, data } = useProductQuery(
    productId ? productId : skipToken
  );
  if (data) {
    productDetail = data;
  }
  return (
    <>
      {isLoading && (
        <Box className="loader" sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {error && <Typography variant="h2">Something went wrong</Typography>}
      {productDetail ? (
        <div key={productDetail.id}>
          <Stack spacing="2">
            <Typography variant="h5" className="headerText">
              Product Details
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            <Grid xs={5}>
              <Item>
                <Paper elevation={3}>
                  <img
                    className="pdImage"
                    src={productDetail.image}
                    alt={productDetail.title}
                  />
                </Paper>
              </Item>
            </Grid>
            <Grid xs={7}>
              <Item>
                <Alert>{productDetail.category}</Alert>
                <br />
                <Stack spacing={2}>
                  <b>{productDetail.title}</b>
                </Stack>
                <br />

                <Button variant="contained" color="success">
                  $ {productDetail.price}
                </Button>
                <br />
                <br />
                <Typography variant="subtitle2" gutterBottom>
                  {productDetail.description}
                </Typography>
                <br />
              </Item>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>....</div>
      )}
    </>
  );
};
