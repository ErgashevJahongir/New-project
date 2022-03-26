import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { activeBreadcrumbColor, breadcrumbColor } from './style';

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

export const Breadcrumb = ({ location, setExpanded }) => {
    const handleChange = (panel) => () => {
        setExpanded(panel);
    };

    return (
        <Breadcrumbs
            style={{ color: '#c3fbff' }}
            aria-label="breadcrumb"
            className="center"
        >
            <Link style={breadcrumbColor} to="#">
                <HomeIcon />
            </Link>
            <Link
                style={breadcrumbColor}
                onClick={handleChange('panel1')}
                to="/"
            >
                Weight Loss Surgery
            </Link>
            {routes.map((rout) => {
                if (rout.path === location.pathname) {
                    let position = rout.breadcrumb.search('/');
                    if (position > 0) {
                        let frist = rout.breadcrumb.slice(0, position - 1);
                        let second = rout.breadcrumb.slice(
                            position + 2,
                            rout.breadcrumb.length - 1
                        );
                        return (
                            <Typography key={rout.breadcrumb + 'a'}>
                                <Link
                                    style={breadcrumbColor}
                                    to={rout.path}
                                    key={rout.breadcrumb}
                                >
                                    {frist}
                                    {' / '}
                                </Link>
                                <Link
                                    style={activeBreadcrumbColor}
                                    to={rout.path}
                                    key={rout.path}
                                >
                                    {second}
                                </Link>
                            </Typography>
                        );
                    }
                    return (
                        <Link
                            style={activeBreadcrumbColor}
                            to={rout.path}
                            key={rout.breadcrumb}
                        >
                            {rout.breadcrumb}
                        </Link>
                    );
                }
            })}
        </Breadcrumbs>
    );
};
