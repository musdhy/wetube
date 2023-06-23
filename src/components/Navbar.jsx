import { Stack } from '@mui/material'
import { Link } from "react-router-dom"

import { logo } from '../utils/constants'
import  { SearchBar }from '../components'

const Navbar = () => (
    <Stack
    direction="row" p={1} 
    alignItems="center" 
    sx={{position: "sticky", 
    background: "#0000", 
    top:0,
    justifyContent: 'space-between' }}
    >
      <Link to='/' style={{
      display :'flex',
      alignItems: 'center',
      color: '#ffff'
      }} >
      <img src={logo} alt="logo" height={45} />
      <span>weTube</span>
      </Link>
      <SearchBar />
    </Stack>
  )


export default Navbar