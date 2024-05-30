import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product, onClick }) => {
  const [AddToCart, setAddToCart] = useState(false);

  const MouseHover = () => {
    setAddToCart(!AddToCart);
  };

  return (
    <Card
      onClick={onClick}
      onMouseEnter={MouseHover}
      onMouseLeave={MouseHover}
      sx={{ position: "relative", maxWidth: "340px" }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "340px",
          height: "340px",
          margin: "auto",
        }}
      >
        <img
          src={product.picture}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Button
          sx={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "black",
            color: "white",
            display: AddToCart ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": { backgroundColor: "black" },
          }}
          disableRipple
        >
          Add to cart <ShoppingCartIcon sx={{ ml: 1 }} />
        </Button>
      </div>
      <CardContent sx={{ textAlign: "center", padding: "10px" }}>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {product.name}
        </Typography>
        <Typography variant="h6" color="red">
          ${product.price}
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: "black",
            display: "block",
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
