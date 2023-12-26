import { Link } from "react-router-dom";
import { useProductsQuery } from "../services/productApi";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Header } from "../src/vms/pages/Header";
export const ProductsPage = () => {
  const { error, isLoading, isSuccess, data } = useProductsQuery();
  return (
    <>
    <Header />
    <div className="l-flex">
      <div className="l-fg3">
        {isLoading && (
          <Box className="loader" sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        {error && <Typography variant="h2">Something went wrong</Typography>}
        {isSuccess && (
          <>
            {data?.map((product: any) => {
              return (
                <Link className="productsLink" to={`/product/${product.id}`}>
                  <Card className="card" sx={{ maxWidth: 375 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={product.image}
                        alt={product.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="button" display="block">
                          {product.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
    </>
  );
};
