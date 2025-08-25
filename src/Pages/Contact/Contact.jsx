import React from 'react'
import { Box } from '@mui/material'
import ContactForm from '../../components/Home/Contact/ContactForm'
const Contact = () => {
  return (
    <Box sx={{
      padding: { xs: '20px', md: '10px 50px' },
    }}>
      <ContactForm />
    </Box>
  )
}

export default Contact