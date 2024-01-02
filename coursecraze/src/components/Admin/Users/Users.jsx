import { Box, Grid } from '@chakra-ui/react'
import React from 'react' 
import cursor from '../../../images/cursor.png'
import Sidebar from '../Sidebar'

const Users = () => {
  return (
    <Grid  css={{
        cursor:`url(${cursor}),default`,
      }}  minH={'100vH'} templateColumns={['1fr','5fr 1fr']}>
  
  <Box>
  
  </Box>
  <Sidebar />
  
      </Grid>
  )
}

export default Users