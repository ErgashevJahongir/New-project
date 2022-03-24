import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiListItem from '@material-ui/core/ListItem';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiTypography from '@material-ui/core/Typography';
import { LeftContentMenu, linkStyle, linkStyleAccordion } from './style';
import { Link, NavLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MuiIconButton from '@material-ui/core/IconButton';

const ListItem = withStyles({
    root: {
        padding: '0 0 0 22px',
    },
    button: {
        '&:hover': {
            backgroundColor: '#f8f8f8',
        },
    },
})(MuiListItem);

const AccordionDetails = withStyles({
    root: {
        padding: '0',
        background: '#f3f8f8',
    },
})(MuiAccordionDetails);

const Accordion = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:first-child': {
            borderTop: '1px solid rgba(0, 0, 0, .125)',
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: '0',
        },
    },
    expanded: {
        margin: 0,
    },
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1,
        padding: '0px',
        '&$expanded': {
            minHeight: 48,
        },
    },
    content: {
        '&$content': {
            margin: 0,
        },
        '&$expanded': {
            margin: 0,
        },
    },
    expanded: {
        margin: 0,
    },
})(MuiAccordionSummary);

const Typography = withStyles({
    root: {
        width: '100%',
    },
})(MuiTypography);

const useStyles = makeStyles((theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        expanded: {
            padding: '0px',
        },
    })
);

const LeftMenu = () => {
    const classes = useStyles();
    return (
        <LeftContentMenu>
            <Accordion>
                <AccordionSummary
                    className={classes.panelSummary}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <NavLink to="/" className="link" style={linkStyle}>
                            <span className="effet"></span>
                            <span>Overview</span>
                        </NavLink>
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.panelSummary}
                    expandIcon={
                        <ExpandMoreIcon
                            style={{ backgroundColor: '#f8f8f8' }}
                        />
                    }
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>
                        <Link
                            to="#"
                            onClick={(e) => {
                                if (e.target.className === 'link') {
                                    e.target.className += ' active';
                                } else {
                                    e.target.className = 'link';
                                }
                            }}
                            style={linkStyle}
                            className="link"
                        >
                            <span className="effet"></span>
                            Procedures
                        </Link>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="column">
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={1}
                        >
                            <Typography className={classes.heading}>
                                <NavLink
                                    to="/procedures/roux-en-y-gastric-bypass"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <span>Roux-en-Y Gastric Bypass</span>
                                </NavLink>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={2}
                        >
                            <Typography className={classes.heading}>
                                <NavLink
                                    to="/procedures/sleeve-gastrectomy"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <span>Sleeve Gastrectomy</span>
                                </NavLink>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={3}
                        >
                            <Typography className={classes.heading}>
                                <NavLink
                                    to="/procedures/mini-gastric-bypass"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <span>Mini Gastric Bypass</span>
                                </NavLink>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={4}
                        >
                            <Typography className={classes.heading}>
                                <NavLink
                                    to="/procedures/banded-bariatric-procedures"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <span>Banded Bariatric Procedures</span>
                                </NavLink>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={5}
                        >
                            <Typography className={classes.heading}>
                                <NavLink
                                    to="/procedures/gastric-banding"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <span>Gastric Banding</span>
                                </NavLink>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={6}
                        >
                            <Typography className={classes.heading}>
                                <NavLink
                                    to="/procedures/intra-gastric-balloon"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <span>Intra Gastric Balloon</span>
                                </NavLink>
                            </Typography>
                        </ListItem>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.panelSummary}
                    aria-controls="panel1a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>
                        <NavLink
                            to="/candidate"
                            className="link"
                            style={linkStyle}
                        >
                            <span className="effet"></span>
                            <span>Are you candidate</span>
                        </NavLink>
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.panelSummary}
                    aria-controls="panel1a-content"
                    id="panel4a-header"
                >
                    <Typography
                        className={classes.heading}
                        style={{ margin: ' 0' }}
                    >
                        <NavLink to="/faqs" className="link" style={linkStyle}>
                            <span className="effet"></span>
                            <span>FAQs</span>
                        </NavLink>
                    </Typography>
                </AccordionSummary>
            </Accordion>
        </LeftContentMenu>
    );
};

export default LeftMenu;
