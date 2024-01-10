
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';

import {Navbar, SearchFeed, VideoDetail, ChannelDetail, Feed} from './components';

const App = () =>  (
    <BrowserRouter>
        <Box sx ={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path = "/" exact element ={<Feed />} />
                <Route path = "/video/:id" element ={<VideoDetail/>} />
                <Route path = "/channel/:id" element ={<ChannelDetail/>} />
                <Route path = "/search/:searchTerm" element ={<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App

// Route path = "/" exact the exact is placed after to route to mean it shd match the route exactly
//  the path should be exactly / for the element to render