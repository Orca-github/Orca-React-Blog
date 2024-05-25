import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../../static/components/expandBtn.css"
// import { useSelector, useDispatch} from 'react-redux';
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
export default function ExpandBtn({ scrollToContent }) {
    return (
        <div className='exDiv'>
        <Button className='exBtn' onClick={scrollToContent}>
            <ExpandMoreIcon className='exIco' />
        </Button>
        </div>
    )
}
