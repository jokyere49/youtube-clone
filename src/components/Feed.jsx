import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos} from './';

import { fetchFromAPI } from '../utils/fetchFromAPi';


// sx is usually or smaller devices like mobile phones
// md is mid or larger devices
//92vh is 92 vertical height

const Feed = () => {
  const[ selectedCategory, setSelectedCategory] = useState('New')
  const[ videos, setVideos] = useState([])

  // we need to fetch the data as soon as the components is created
  // ie the page is loaded so we use useEFfect
  // empty [] at the end of the useEffect means the code inside the useEffect
  // will run only when u hit reload ie reload the page
  // [selectedCategory] --> will run the code in useEffect if selectedCategory 
  // changes
  useEffect(() =>{
    fetchFromAPI(`search?q=${selectedCategory}
    &part=snippet`).then((data)=> setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: {sx:
    "column", md: "row"} }}>
      <Box sx={{ height: {sx: 'auto', md: '92vh'},
        borderRight: '1px solid #3d3d3d', px: {sx:0, md: 2}}}>
          <Sidebar selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}/>
          <Typography className = "copyright"
          variant='body2' sx={{mt:1.5, color: '#fff'}}>
            Copyright 2023 JO media
          </Typography>
      </Box>
      <Box p= {2} sx = {{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant = "h4" fontWeight="bold"
        mb={2} sx={{color : 'white'}}>
          {selectedCategory} <span style={{color : '#F31503'}}> videos</span>
        </Typography>
      < Videos videos={videos}/>
      </Box>

    </Stack>

  )
}

export default Feed


// // The overflowY property in CSS is used to control the behavior 
// of the vertical scrollbar when the content of an element overflows 
// its box in the vertical direction. It's part of the overall overflow property, which also includes overflowX for horizontal overflow.

// // Here's a brief explanation of overflowY:

// // overflowY: visible;: This is the default value. The content will 
// overflow the box without any scrollbars, and the overflow will be visible.

// // overflowY: hidden;: The content will overflow the box, but any 
// overflow will be hidden, and no scrollbar will appear.

// // overflowY: scroll;: A scrollbar will always be visible, 
// allowing the user to scroll through the content even if it doesn't
//  overflow. If the content does overflow, both vertical and horizontal 
//  scrollbars will be present.

// // overflowY: auto;: The browser will decide whether to display scrollbars 
// based on the content. If the content overflows, scrollbars will appear; 
// otherwise, they won't.

// // In the context of your code snippet:

// jsx
// Copy code
// <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
//   {/* ... */}
// </Box>
// overflowY: 'auto': This sets the vertical overflow behavior to "auto," which means that a vertical scrollbar will appear if the content inside the Box overflows its container in the vertical direction. If there is no overflow, no scrollbar will be visible.
// It's often used when you want to create a scrollable area for content inside a fixed-height container, such as when you want to display a list of items that may exceed the container's height.