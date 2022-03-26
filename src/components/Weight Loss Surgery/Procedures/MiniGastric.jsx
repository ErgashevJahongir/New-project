import {
    Heading,
    MiniGastricImg,
    Paragraph,
    ProceduresHeading2,
    ProceduresHeading3,
    RightContent,
} from '../style';

const MiniGastric = () => {
    return (
        <RightContent>
            <Heading>Mini Gastric Bypass Surgery</Heading>
            <div>
                <MiniGastricImg
                    src="https://www.atulpeters.com/front/img/mini-gastric-img.png"
                    alt="Mini Gastric Bypass Surgery"
                />
            </div>
            <div>
                <ProceduresHeading2>
                    Historical Background of Mini Gastric Bypass:
                </ProceduresHeading2>
                <div>
                    <Paragraph>
                        First performed by Robert Rutledge in September 1997.
                        Mini Gastric Bypass is a modification of Billroth II
                        procedure, initially done for stomach cancers. Now,
                        nearly 20 years and many more than 30,000 procedures
                        later, a recent survey showed that the Mini Gastric
                        Bypass appears to be growing into one of the top 3-4
                        bariatric and metabolic procedures in many countries
                        around the world.
                    </Paragraph>
                </div>
                <div>
                    <ProceduresHeading2>
                        Surgical Aspects of Mini Gastric Bypass:
                    </ProceduresHeading2>
                    <ProceduresHeading3>
                        Principle of mini Gastric Bypass:
                    </ProceduresHeading3>
                    <Paragraph>
                        Long gastric tube and a wide loop anastomosis, to create
                        a mal-absorptive and dumping effect.
                    </Paragraph>
                    <ProceduresHeading3>
                        Position of patient in the operation theatre:
                    </ProceduresHeading3>
                </div>
                <div>
                    <Paragraph>
                        The position of patient in the operation theatre is same
                        as that in the Roux-en Y Gastric Bypass
                    </Paragraph>

                    <Paragraph>
                        Mini Gastric bypass is considered as a malabsorptive
                        procedure where in there is less absorption of the
                        consumed food.
                    </Paragraph>

                    <Paragraph>
                        There are similar 3 to 4 incisions or holes
                    </Paragraph>

                    <Paragraph>
                        In this the Gastric pouch is long, like a sleeve which
                        is joined to the intestines, making a loop thereby
                        finishing the procedure with only single anastomosis or
                        joint.
                    </Paragraph>

                    <Paragraph>
                        The intestines that are bypassed are about 170 cm to 250
                        cm long depending on the requirement for each patient.
                    </Paragraph>
                </div>
                <div>
                    <ProceduresHeading3>
                        Weight loss after Mini Gastric bypass surgery:
                    </ProceduresHeading3>
                    <Paragraph>
                        The results of excess weight loss and resolution of co
                        morbidities is similar to that of RYGB.
                    </Paragraph>
                    <ProceduresHeading3>
                        <strong>Advantage over RYGB:</strong>
                    </ProceduresHeading3>
                </div>
                <div>
                    <Paragraph>
                        It has a theoretical advantage over RYGB in reduced
                        chances of intestinal obstruction in long term follow
                        up.
                    </Paragraph>
                    <Paragraph>
                        The patient has a better capacity and tolerance to
                        quantity of the food but as it causes more malabsorption
                        the frequency of stools may be increased.
                    </Paragraph>
                    <Paragraph>
                        Post MGB, we have seen brilliant results in special
                        subtype of our population.
                    </Paragraph>
                </div>
            </div>
        </RightContent>
    );
};

export default MiniGastric;
