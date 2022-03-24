import {
    Heading,
    Paragraph,
    ProceduresHeading2,
    ProceduresHeading3,
    RightContent,
    SeleeveImg,
} from '../style';

const Seleeve = () => {
    return (
        <RightContent>
            <div className="oview-sec-right">
                <div className="over-title">
                    <Heading>Laparoscopic/Robotic Sleeve Gastrectomy</Heading>
                </div>
                <div className="over-title">
                    <ProceduresHeading2>
                        Historical Background of Sleeve Gastrectomy:
                    </ProceduresHeading2>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        It was Doug Hess, in Bowling Green, Ohio, who performed
                        the first open sleeve gastrectomy in March of 1988 as
                        part of what is now known as the duodenal switch
                        procedure. In 1999, the first laparoscopic approach to
                        the duodenal switch was developed on a porcine model by
                        de Csepel, Jossart, and Gagner. Later on due to high
                        complication rate of duodenal switch surgery in very
                        obese individuals, they subsequently developed the
                        technique of staging the intestinal bypass procedure by
                        performing the laparoscopic sleeve gastrectomy only as
                        an initial stage. It was noted that LSG worked very well
                        as a stand- alone procedure, and majority of these
                        patients did not require the bypass procedure later.
                    </Paragraph>
                    <Paragraph>
                        LSG is technically easier when compared with gastric
                        bypass or biliopancreatic diversion. It is free from
                        serious anatomical intestinal complications in the long
                        run like internal herniation or small bowel obstruction,
                        and the micronutrient deficiencies and malnutrition are
                        less frequent.
                    </Paragraph>
                </div>
                <div className="over-title">
                    <ProceduresHeading2>
                        Surgical aspects of sleeve gastrectomy:
                    </ProceduresHeading2>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        Laparoscopic/Robotic sleeve gastrectomy which is also
                        known as vertical sleeve gastrectomy is a procedure in
                        which about 70 to 80% of the stomach is removed leaving
                        a narrow gastric tube or "sleeve" through which food
                        passes. It has now becoming popular at most of the
                        centres as Laparoscopic Sleeve Gastrectomy is
                        technically easier when compared with gastric bypass or
                        biliopancreatic diversion. It is free from serious
                        anatomical intestinal complications in the long run like
                        internal herniation or small bowel obstruction, and the
                        micronutrient deficiencies and malnutrition are less
                        frequent.
                    </Paragraph>
                </div>
                <div className="over-title">
                    <ProceduresHeading3>
                        Position of patient in operation theatre:
                    </ProceduresHeading3>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        Patient position remains same as in Roux-en-Y gastric
                        bypass. Number of incisions are 3 to 4.
                    </Paragraph>
                    <Paragraph>
                        The sleeve constructed with use of about 6 to 7 surgical
                        staplers over a special tube called a gastric
                        calibration tube. A leak test may be performed intra
                        operatively to see that the staple line is intact in
                        select group of patients.
                    </Paragraph>
                    <div className="sleeve-gas-img">
                        <SeleeveImg
                            src="https://www.atulpeters.com/front/img/sleeve-gastrectomy-img.png"
                            width="338"
                            height="408"
                            alt="Laparoscopic Sleeve Gastrectomy"
                        />
                    </div>
                </div>
                <div className="over-title">
                    <ProceduresHeading3>
                        Mechanism of weight loss after sleeve gastrectomy:
                    </ProceduresHeading3>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        Due to this small stomach tube, the amount of food
                        ingested is restricted and a person can take small
                        amount of food at a time thereby the amount of calories
                        consumed is restricted which results in weight loss.
                    </Paragraph>
                </div>
                <div className="over-title">
                    <ProceduresHeading3>
                        Hormonal changes after Sleeve Gastrectomy:
                    </ProceduresHeading3>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        The removed part of the stomach includes fundus, which
                        is the upper outer part of stomach. It is important as
                        it releases hormone Ghrelin. This hormone is termed
                        as‘hunger hormone’ because it stimulates appetite,
                        increases food intake and promotes fat storage. By
                        removal of fundus, the source of Ghrelin is removed. No
                        intestines are removed or bypassed during Sleeve
                        Gastrectomy so that malabsorption is minimal.
                    </Paragraph>
                    <Paragraph>
                        Having said that, it is not only the restriction that
                        causes the weight loss but many a metabolic changes also
                        occur due to rapid transit of the food in the
                        intestines, releasing intestinal hormones that cause
                        these effect. Thus Sleeve Gastrectomy is no longer
                        considered purely a restrictive surgery but also a
                        metabolic surgery.
                    </Paragraph>
                </div>
                <div className="over-title">
                    <ProceduresHeading3>
                        Weight loss after Sleeve Gastrectomy:
                    </ProceduresHeading3>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        Though, Sleeve Gastrectomy was originally used as a
                        first step procedure for a more definitive gastric
                        bypass in super obese, it is now also used as a single
                        stage procedure with excellent results across the globe.
                        In patients with Reflux Disease and Diabetes the results
                        may be inferior to the Roux-en-Y Gastric Bypass but the
                        excess weight loss of both the procedures may be
                        comparable in a select subgroup of patients which is
                        about 80% of the excess weight.
                    </Paragraph>
                </div>
                <div className="over-title">
                    <ProceduresHeading3>
                        Hospital stay after Sleeve Gastrectomy:
                    </ProceduresHeading3>
                </div>
                <div className="oview-sec-para">
                    <Paragraph>
                        It is a simple procedure and the patients may be able to
                        leave the hospital in one day or even the same day in
                        selected cases.
                    </Paragraph>
                </div>
            </div>
        </RightContent>
    );
};

export default Seleeve;
