import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

*,
body {
    margin: 0;
    padding: 0;
}

body {
    color: var(--text-color);
    background-color: var(--white-bg);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

p,
article,
section {
    line-height: 1.5;
}

/* :focus {
    outline: 0.15rem solid var(--heading-bg);
    outline-offset: 0.25rem;
} */

main:focus {
    outline: none;
}

img {
    max-width: 100%;
}
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
`;

export const TopContent = styled.div`
    background-image: url(https://img.hospital/wp-content/uploads/2020/03/ABOUT-US1-6.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TopBlog = styled.div`
    background-color: var(--heading-bg);
    padding: 45px 120px;
    border-radius: 15px;
    text-align: center;
`;

export const TopTitle = styled.h1`
    font-size: 35px;
    color: #fff;
    padding-bottom: 15px;
`;

export const LeftContentMenu = styled.div`
    width: 23%;
    color: var(--text-color);
`;

export const RightContent = styled.div`
    width: 73%;
    color: var(--text-color);
`;

export const HeadingBlog = styled.div`
    border-bottom: solid 2px #2cc0d6;
    padding-bottom: 40px;
`;

export const Heading = styled.h1`
    color: #000;
    font-weight: 700;
    padding-bottom: 20px;
    font-size: 30px;
`;

export const BlueLink = styled.a`
    color: #2cc0d6;
    text-decoration: none;
`;

export const Heading3 = styled.h3`
    font-size: 24px;
    text-transform: capitalize;
    font-weight: 400;
    padding-bottom: 15px;
`;

export const Heading4 = styled.h4`
    padding-bottom: 20px;
`;

export const Paragraph = styled.p`
    line-height: 24px;
    padding-bottom: 20px;
`;

export const Image = styled.img`
    display: inline-block;
    padding-bottom: 25px;
`;

export const ImageBlog = styled.div`
    text-align: center;
`;

export const SliderContent = styled.div`
    margin: 15px auto 40px;
    width: 90%;
`;

export const Condidat = styled.div`
    display: flex;
`;

export const CondidatText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const CondidatH3 = styled.h3`
    font-size: 20px;
    font-weight: lighter;
    line-height: 28px;
    color: var(--grey);
`;

export const CondidatBalckH3 = styled(CondidatH3)`
    color: var(--heading-color);
`;

export const CondidatImg = styled.img`
    max-width: 530px;
`;

export const Li = styled.li`
    padding: 10px 0;
    margin-left: 30px;
    list-style: none;
    display: flex;
    align-items: center;
    &:before {
        content: '\f059';
        font-family: 'FontAwesome';
        float: left;
        margin-left: -1.5em;
        margin-right: 10px;
        color: #0074d9;
        font-size: 18px;
    }
`;

export const SliderImg = styled.img`
    margin: 0 auto;
`;

export const AccordionLink = styled(Link)`
    display: 'block';
    width: '100%';
    padding: '12px 10px';
`;

export const linkStyle = {
    display: 'block',
    width: '100%',
    padding: '12px 10px 12px 0',
    textDecoration: 'none',
};

export const linkStyleAccordion = {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    padding: '8px 10px 8px 0',
};

export const ProceduresHeading2 = styled.h2`
    margin: 20px 0;
    color: var(--grey);
`;

export const ProceduresHeading3 = styled.h3`
    margin: 20px 0;
    color: var(--grey);
`;

export const ProceduresUl = styled.ul`
    padding-bottom: 40px;
`;

export const ProceduresLi = styled.li`
    color: var(--text-color);
    list-style: none;
    padding-bottom: 10px;
    padding-left: 15px;
    position: relative;
    &::before {
        content: '';
        float: left;
        width: 7px;
        height: 7px;
        background-color: #333;
        border-radius: 50px;
        position: absolute;
        top: 9px;
        left: 0;
    }
`;

export const ParagraphBottom0 = styled.p`
    color: var(--text-color);
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

export const FlexImg = styled.img`
    width: 345px;
    height: 300px;
    margin-left: 30px;
    margin-bottom: 5px;
`;

export const GastricImg = styled.img`
    margin-left: 30px;
    margin-bottom: 5px;
    float: right;
`;

export const MiniGastricImg = styled.img`
    margin-left: 30px;
    margin-bottom: 5px;
    float: right;
`;

export const SeleeveImg = styled.img`
    margin-left: 30px;
    margin-bottom: 5px;
    float: right;
`;

export const BandedHeading2 = styled.h2`
    font-size: 26px;
    color: #2cc0d6;
    font-weight: 600;
    border-bottom: solid 1px #ddd;
    padding-bottom: 20px;
    margin-bottom: 40px;
`;

export const BandedImg = styled.img`
    float: right;
`;

export const BandedFlex = styled.div`
    display: flex;
    flex-direction: column-reverse;
    font-size: 26px;
    color: #2cc0d6;
    font-weight: 700;
    padding-top: 55px;
    float: left;
    padding-right: 50px;
`;

export const BigText = styled.p`
    font-size: 21px;
    color: #000;
    font-weight: lighter;
    line-height: 40px;
`;

export const RouxBigText = styled.p`
    font-size: 22px;
    color: #000;
    font-weight: lighter;
    line-height: 36px;
    margin-top: 60px;
`;

export const RouxBlueText = styled.span`
    font-size: 22px;
    color: #2cc0d6;
    font-weight: 700;
`;
