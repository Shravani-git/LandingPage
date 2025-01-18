import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Box, Typography, InputBase, IconButton } from "@mui/material";
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {
  const gridStyle = {
    border: '1px solid #000',
    borderRadius: '8px',
    backgroundColor: "#f0f0f0",
    height: "70vh",
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    width: "100%",
  };

  return (
    <Box sx={{ backgroundColor: '#E8E6F3', minHeight: '100vh', color: 'black' }}>
      {/* Navbar*/}
      <Box sx={navbarStyle}>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", color: 'black', gap: 1 }}>
          <Image src="/logo.png" alt="Brand Logo" width={30} height={30} />
          Luxe Living
        </Typography>
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 1, padding: 1 }}>
          <InputBase placeholder="Search" sx={{ marginRight: 1 , width:"100%"}} />
          <IconButton>
          <SearchIcon />
          </IconButton>

        </Box>
        {/* User Profile */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Avatar src="/profile.png" alt="User Avatar" />
          </IconButton>
          <Typography sx={{ ml: 1 }}>Doe</Typography>
        </Box>
        
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 2,
          margin: { xs: "0 auto", md: 0 },
          maxWidth: { xs: "90%", md: "100%" }
        }}
      >
        {/* Left Sidebar */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: { xs: "none", md: "block" },
            margin: "auto",
            ...gridStyle,
            padding: 2
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Categories</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography>Living Room</Typography>
            <Typography>Bedroom</Typography>
            <Typography>Dining Room</Typography>
            <Typography>Office</Typography>
            <Typography>Outdoor</Typography>
          </Box>
          
          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Filters</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography>Price Range</Typography>
            <Typography>Material</Typography>
            <Typography>Color</Typography>
            <Typography>Brand</Typography>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "auto",
            width: { xs: "100%", md: "auto" },
            ...gridStyle,
            padding: 2,
            overflowY: 'auto'
          }}
        >
          <Typography variant="h5" sx={{ mb: 3 }}>Featured Collections</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1 }}>
                <Typography variant="h6">Modern Minimalist</Typography>
                <Image 
                  src="/image.png" 
                  alt="Modern Minimalist Furniture" 
                  width={300} 
                  height={200}
                  style={{ width: '100%', height: 'auto', marginTop: 8, marginBottom: 8 }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Clean lines and contemporary designs for the modern home
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1 }}>
                <Typography variant="h6">Rustic Charm</Typography>
                <Image 
                  src="/image.png" 
                  alt="Rustic Furniture" 
                  width={300} 
                  height={200}
                  style={{ width: '100%', height: 'auto', marginTop: 8, marginBottom: 8 }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Timeless pieces with natural materials and textures
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Sidebar */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: { xs: "none", md: "block" },
            margin: "auto",
            ...gridStyle,
            padding: 2
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Trending Items</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1">Ergonomic Office Chair</Typography>
              <Typography variant="body2" color="text.secondary">$299.99</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Modern Sofa Set</Typography>
              <Typography variant="body2" color="text.secondary">$1,299.99</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Dining Table Set</Typography>
              <Typography variant="body2" color="text.secondary">$899.99</Typography>
            </Box>
          </Box>
          
          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Recent Views</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="body2">Leather Recliner</Typography>
            <Typography variant="body2">Queen Size Bed</Typography>
            <Typography variant="body2">Coffee Table</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


