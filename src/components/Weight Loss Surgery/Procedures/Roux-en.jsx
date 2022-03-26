import {
    BlueLink,
    Heading,
    Paragraph,
    ProceduresHeading2,
    ProceduresHeading3,
    RightContent,
    RouxBigText,
    RouxBlueText,
    SeleeveImg,
} from '../style';

const Rouxen = () => {
    return (
        <RightContent>
            <Heading>Laparoscopic Robotic Gastric Bypass Surgery</Heading>
            <ProceduresHeading2>
                Historical Background of Roux-en-Y Gastric Bypass:
            </ProceduresHeading2>
            <div>
                <Paragraph>
                    First open gastric bypass was described by Mason and Ito in
                    1966. The gastric bypass was based on the weight loss
                    observed among patients undergoing partial stomach removal
                    for ulcers. Over several years, the gastric bypass has been
                    modified into its current form, using a Roux-en-Y limb of
                    intestine (RYGB). The RYGB is one of the most commonly
                    performed operation for weight loss all over the world.
                </Paragraph>
                <Paragraph>
                    The First laparoscopic gastric bypass was performed by
                    Wittgrove and Clark in 1994.
                </Paragraph>
            </div>

            <div>
                <ProceduresHeading2>
                    Surgical Aspects of Laparoscopic Roux-en-Y Gastric Bypass:
                </ProceduresHeading2>
                <ProceduresHeading3>
                    Principle of Roux-en-Y Gastric Bypass:
                </ProceduresHeading3>
            </div>
            <div>
                <Paragraph>
                    Roux-en-Y Gastric bypass surgery is an operation in which a
                    small pouch of stomach is created and joined to the small
                    intestine after bypassing an initial segment of small
                    intestine known as duodenum and jejunum, thereby diversion
                    of bile as well as intestinal secretions.
                </Paragraph>
                <Paragraph>
                    <strong>Aim of this arrangement:</strong> To achieve long
                    term weight loss with least side effects and complications.
                    Leading to resolution of obesity and it's related
                    comorbidities.
                </Paragraph>
                <Paragraph>
                    <strong>Preparation of patient before surgery:</strong>{' '}
                    Every patient is evaluated by a team of experts before being
                    taken for surgery which includes body composition analysis,
                    dietary consults, evaluation by physician, pulmonologist,
                    cardiologist and psychiatric evaluation. Some other expert
                    evaluations are done on case to case basis. There is
                    mandatory thromboembolism prophylaxis 6 to 12 hours before
                    surgery with antibiotics if needed.
                </Paragraph>
                <Paragraph>
                    <strong>
                        Positioning of the patient in operation threatre:
                    </strong>{' '}
                    In the operation theatre, patient is placed in a special
                    position called reverse Trendelenberg’s position after
                    general anesthesia.
                </Paragraph>
                <Paragraph>
                    <strong>Operating Ports:</strong> There are usually 3 to 4
                    small operating incisions, which in 99 % cases don’t have
                    any stiches or bandages post operatively. These are usually
                    closed by special glue so that patient can have bath after
                    the surgery. There are no pipes in most of the cases.
                </Paragraph>
                <Paragraph>
                    <strong>Formation of small gastric pouch:</strong> First
                    step is formation of a small gastric pouch by use of
                    surgical staplers. The pouch is formed on a special tube
                    called a gastric caliberation tube.
                </Paragraph>
                <Paragraph>
                    <strong>Bypass:</strong> About 100 to 170 cm of the small
                    intestine is bypassed
                </Paragraph>
                <Paragraph>
                    The intestines are re-attached to the stomach pouch by
                    various mechanisms, like stapler or by suturing.
                </Paragraph>
            </div>
            <div>
                <ProceduresHeading3>
                    Mechanism Of weight loss after RYGB:
                </ProceduresHeading3>
            </div>
            <div>
                <Paragraph>
                    The net effect of this re-arrangement is a restricted intake
                    of food; and due to the bypass, some malabsorption also
                    takes place, leading to{' '}
                    <BlueLink
                        className="link"
                        href="https://www.atulpeters.com/weight-loss-surgery/overview"
                    >
                        weight loss and resolution of Diabetes
                    </BlueLink>
                    . However it is not only the restriction and malabsorption
                    that leads to weight loss and correction of co-morbidities
                    in obese people. The intestine in our body secretes a number
                    of hormones, which are increased when exposed to undigested
                    food. These hormones modify the metabolism in our body in
                    such a way that diabetes is either resolved or controlled.
                    Similarly blood pressure and a host of other problems are
                    corrected due to these hormonal changes. Some of these
                    hormones also increase our resting metabolic rate such that
                    we consume more energy even at rest.
                </Paragraph>
                <Paragraph>
                    After surgery, there are sometimes marked changes in
                    behavior. There is reduction in hunger as well as early
                    satiety after small meals. These complex behavioral changes
                    are partially due to alterations in several hormones
                    (ghrelin, GIP, GLP, PYY) and neural signals produced in the
                    GI tract that communicate with the hunger centers in the
                    brain.
                </Paragraph>
            </div>
            <div>
                <ProceduresHeading3>
                    Weight Loss after Roux-en-Y Gastric Bypass:
                </ProceduresHeading3>
                <Paragraph>
                    Many studies done at Center of Excellence in bariatric
                    surgery all over the world report about 80% of excess weight
                    loss after roux-en-y gastric bypass. Weight loss is achieved
                    over a period of 18 months from the day of surgery and
                    depends on various factors from patient to patient.
                </Paragraph>
                <ProceduresHeading3>
                    Resolution of other problems after Roux-en-Y Gastric Bypass:
                </ProceduresHeading3>
            </div>
            <div>
                <Paragraph>
                    The obesity-related comorbidities that may be improved or
                    cured with the RYGB include type 2 diabetes mellitus, high
                    blood pressure, high cholesterol, arthritis, urinary stress
                    incontinence, liver disease, certain types of headaches,
                    heartburn, obstructive sleep apnea and many other disorders.
                </Paragraph>
                <Paragraph>
                    RYGB has also resulted in marked improvements in quality of
                    life.
                </Paragraph>
                <div>
                    <SeleeveImg
                        src="https://www.atulpeters.com/front/img/roux-en-img.png"
                        alt="Laparoscopic Gastric Bypass Surgery"
                    />
                </div>
                <RouxBigText>
                    <RouxBlueText>
                        Roux-en-Y Gastric Bypass (RYGB) Surgery
                    </RouxBlueText>{' '}
                    is done laparoscopically, or by Robotic Assistance and is
                    still the “Gold Standard” in the world. All other procedures
                    are usually compared to this when it comes to the results in
                    terms of excess weight loss and resolution of
                    co-morbidities.
                </RouxBigText>
            </div>
        </RightContent>
    );
};

export default Rouxen;
