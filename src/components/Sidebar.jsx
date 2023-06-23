import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category, index) => (
      <button
        key={index}
        className="category-btn"
        onClick={()=>{
            setSelectedCategory(category.name)
        }}    
        style={{
          color: "#ffff",
          backgroundColor: category.name === selectedCategory && "#fc1503",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          <category.icon />
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? 1 : 0.8,
            marginRight: "15px",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
