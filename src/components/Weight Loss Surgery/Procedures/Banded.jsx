import {
    BandedFlex,
    BandedHeading2,
    BandedImg,
    BandedImgLeft,
    BigText,
    BlueLink,
    Heading,
    Paragraph,
    RightContent,
} from '../style';

const Banded = () => {
    return (
        <RightContent>
            <Heading>Banded Bariatric Procedures</Heading>
            <BandedHeading2>Banded Gastric Bypass</BandedHeading2>
            <div>
                <BandedImg
                    src="https://www.atulpeters.com/front/img/banded-img.png"
                    width="378"
                    height="378"
                    alt="Banded Gastric Bypass"
                />
                <Paragraph>
                    The Banded Bypass Surgery is a modification of the RYGB
                    enhancing its restrictive component. The rationale for
                    adding band to a gastric bypass surgery is that the pouch
                    and the stoma sizes are important in the{' '}
                    <BlueLink
                        className="link"
                        href="https://www.atulpeters.com/weight-loss-surgery/overview"
                    >
                        weight loss
                    </BlueLink>{' '}
                    and weight maintenance.
                </Paragraph>
                <Paragraph>
                    In the banded GBP (Gastric By-Pass) the pouch and the stoma
                    sizes are calibrated, standardized and reinforced. There is
                    even evidence that the band in the GBP also results in less
                    incidence of – outlet stenosis requiring dilatation, dumping
                    syndrome and reactive hypoglycemia.
                </Paragraph>
                <BandedFlex>
                    <BandedImgLeft
                        src="https://www.atulpeters.com/front/img/banded-img2.png"
                        alt="Banded Gastric Bypass"
                    />
                    Banded Sleeve Gastrectomy
                </BandedFlex>
                <BigText>
                    In the same light it makes a lot of sense to band the
                    sleeve. As Sleeve Gastrectomy is a pure restrictive, one
                    could “prolong” the effect of the restriction by either
                    adding the Fobi’s Ring or MiniMizer Ring or Midcal Ring to
                    it.
                </BigText>
            </div>
        </RightContent>
    );
};

export default Banded;
