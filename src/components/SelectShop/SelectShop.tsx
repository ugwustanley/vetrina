import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Theme,
  makeStyles,
  Select,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";

// const useStyles = makeStyles((theme: Theme) => ({
//     FormSelect: {
//       fontWeight: "normal",
//       fontFamily: "Noto Sans HK",
//     },
//   }));

const SelectShop = () => {


  
 
  const selectBox = {
    margin: "3rem auto",
    marginLeft: "1rem",
  };

  type Tvalues = {
    shop:string
  }

  const [values, setValues] = useState<Tvalues>({
    shop: "",
  });

  function handleChange(event: any) {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  //const classes = useStyles();

  return (
    <Box sx={selectBox}>
      <Typography
        variant="h5"
        sx={{
          fontSize: "1.05rem",
          fontWeight: "normal",
          fontFamily: "Noto Sans HK",
          marginLeft: ".7rem",
        }}
      >
        Select your Shop
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={values.shop}
          displayEmpty
        //   className={classes.formSelect}
          onChange={handleChange}
          inputProps={{
            name: "shop",
            id: "shop-simple",
          }}
        >
          <MenuItem value="">Fenoh Store</MenuItem>
          <MenuItem value="Lagos Store">Lagos Store</MenuItem>
          <MenuItem value="London Store">London Store</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectShop;
