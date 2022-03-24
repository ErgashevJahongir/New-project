import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const routes = [
    {
        path: '/',
        breadcrumb: 'Overview',
    },
    {
        path: '/procedures/roux-en-y-gastric-bypass',
        breadcrumb: 'Procedures / Roux-en-Y Gastric Bypass',
    },
    {
        path: '/procedures/sleeve-gastrectomy',
        breadcrumb: 'Procedures / Sleeve Gastrectomy',
    },
    {
        path: '/procedures/mini-gastric-bypass',
        breadcrumb: 'Procedures / Mini Gastric Bypass',
    },
    {
        path: '/procedures/banded-bariatric-procedures',
        breadcrumb: 'Procedures / Banded Bariatric Procedures',
    },
    {
        path: '/procedures/gastric-banding',
        breadcrumb: 'Procedures / Gastric Banding',
    },
    {
        path: '/procedures/intra-gastric-balloon',
        breadcrumb: 'Procedures / Intra Gastric Balloon',
    },
    {
        path: '/candidate',
        breadcrumb: 'Are You A Candidate',
    },
    {
        path: '/faqs',
        breadcrumb: 'FAQs',
    },
];

export const Breadcrumb = ({ location }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link style={{ color: '#c3fbff', textDecoration: 'none' }} to="/">
                <HomeIcon />
            </Link>
            <Link style={{ color: '#c3fbff', textDecoration: 'none' }} to="/">
                Weight Loss Surgery
            </Link>
            <Typography color="white">
                {routes.map((rout) => {
                    if (rout.path === location.pathname) {
                        return rout.breadcrumb;
                    }
                })}
            </Typography>
        </Breadcrumbs>
    );
};
