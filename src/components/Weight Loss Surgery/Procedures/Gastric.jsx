import {
    BlueLink,
    GastricImg,
    Heading,
    Paragraph,
    RightContent,
} from '../style';

const Gastric = () => {
    return (
        <RightContent>
            <div className="oview-sec-right">
                <div className="over-title">
                    <Heading>Laparoscopic Adjustable Gastric Banding</Heading>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        The procedure is done laparoscopically and involves
                        implantation of an inflatable gastric band made of
                        silicon to be placed around the upper part of the
                        stomach. This procedure does not involve any cutting or
                        stapling of the stomach.
                    </Paragraph>
                    <div className="gastric-banding-img">
                        <GastricImg
                            src="https://www.atulpeters.com/front/img/gastric-banding-img.png"
                            width="300"
                            height="274"
                            alt="Laparoscopic Adjustable Gastric Banding"
                        />
                    </div>
                    <Paragraph>
                        The silicon band is adjustable and the inner diameter
                        can be modified by inflating or deflating it with
                        saline. This band creates a tiny pouch of the stomach
                        which is meant to restrict the amount of food intake.
                        The outlet is also small which ensures an earlier
                        sensation of fullness and satiety with smaller
                        quantities of food, both of these mechanisms result in{' '}
                        <BlueLink
                            className="link"
                            href="https://www.atulpeters.com/weight-loss-surgery/overview"
                        >
                            weight loss
                        </BlueLink>
                        . This surgery is considered as the simplest and the
                        least invasive of the bariatric procedures. There is
                        monthly adjustment of the band which is required to
                        achieve best results.
                    </Paragraph>
                </div>
            </div>
        </RightContent>
    );
};

export default Gastric;
