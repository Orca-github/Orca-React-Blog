import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeskIcon from '@mui/icons-material/Desk';
import ArticleIcon from '@mui/icons-material/Article';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import PostAddIcon from '@mui/icons-material/PostAdd';
import List from '@mui/material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';

export function mainListItems() {
  const [open, setOpen] = React.useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  };
  return(

  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DeskIcon />
      </ListItemIcon>
      <ListItemText primary="Workbench" />
    </ListItemButton>

    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Article" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Atricle" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Atricle List" />
          </ListItemButton>
        </List>
      </Collapse>

    <ListItemButton>
      <ListItemIcon>
        <ModeCommentIcon />
      </ListItemIcon>
      <ListItemText primary="Comment" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton> */}
  </React.Fragment>
  )
}

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);