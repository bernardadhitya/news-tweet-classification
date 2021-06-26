import React from 'react';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const SortMenu = (props) => {
  const {anchorSortMenu, setAnchorSortMenu, setSortBy, sortBy, menu} = props;

  const handleSortByClicked = (event) => {
    setAnchorSortMenu(event.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorSortMenu(null);
  };

  return (
    <div>
      <div className='sort-button' onClick={handleSortByClicked}>
        <h5>{menu.filter(item => item.id === sortBy)[0].text}</h5>
        <ArrowDropDownIcon/>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorSortMenu}
        keepMounted
        open={Boolean(anchorSortMenu)}
        onClose={handleCloseSortMenu}
      >
        {
          menu.map(item => {
            return (
              <StyledMenuItem onClick={() => {setSortBy(item.id); handleCloseSortMenu()}}>
                <ListItemText primary={item.text} />
                <ListItemIcon/>
              </StyledMenuItem>
            )
          })
        }
      </StyledMenu>
    </div>
  )
}

export default SortMenu;