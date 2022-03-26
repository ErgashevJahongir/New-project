import {
    Condidat,
    CondidatBalckH3,
    CondidatH3,
    CondidatImg,
    CondidatText,
    Heading,
    Li,
    RightContent,
} from '../style';

const index = () => {
    return (
        <RightContent>
            <Heading>Weight-loss Surgery: how do I decide?</Heading>
            <Condidat>
                <CondidatText>
                    <CondidatH3>
                        Surgery is suggested for people who remain morbidly
                        obese even after trying diet and exercise repeatedly. In
                        addition to this, surgery is the best treatment option
                        available for people suffering from obesity as well as
                        the diseases related to obesity.
                    </CondidatH3>
                    <CondidatBalckH3>
                        You can yourself decide whether surgery is right for you
                        by answering the questions mentioned below:
                    </CondidatBalckH3>
                </CondidatText>
                <div>
                    <CondidatImg
                        src="https://www.atulpeters.com/front/img/candidate-img.png"
                        alt="Candidate"
                    />
                </div>
            </Condidat>

            <div>
                <ul>
                    <Li>Do you have a BMI greater than 40 kg/m2? Or,</Li>
                    <Li>
                        Do you have a BMI more than 35 and are you also
                        suffering from one or more of obesity related diseases
                        like Type 2 Diabetes, High blood pressure, joint pains,
                        elevated cholesterol levels, heart disease or sleep
                        Apnea?
                    </Li>
                    <Li>
                        Have you ever tried diet regimens, or consulted
                        nutritionist but haven't lost desired weight?
                    </Li>
                    <Li>Are you between 16 and 70 years of age?</Li>
                    <Li>
                        If the answer to any of these questions is yes, please
                        contact us.{' '}
                    </Li>
                </ul>
            </div>
        </RightContent>
    );
};

export default index;
