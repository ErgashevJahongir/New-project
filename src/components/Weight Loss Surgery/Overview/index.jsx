import {
    BlackParagraph,
    BlueLink,
    Heading,
    Heading3,
    Heading4,
    Paragraph,
    RightContent,
    SliderContent,
    SliderImg,
} from '../style';
import Slider from 'react-slick';

const index = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <RightContent>
            <Heading>Weight Loss Surgery</Heading>
            <div>
                <Paragraph>
                    Obesity is nowadays a major health hazard so much so that
                    worldwide obesity tripled since 1975. In 2016, more than 1.9
                    billion adults aged 18 years and older were overweight. Of
                    these over 650 million adults were obese and had obesity
                    related problems. In India the number of obese people has
                    doubled in the last 10 years, according to the National
                    Family Health Survey.
                </Paragraph>
                <Paragraph>
                    With research, we have realized that obesity is difficult to
                    treat and it might require long term changes in lifestyle as
                    well as diet. Several researchers have highlighted that
                    obesity accounts for 80-85 per cent of the risk of
                    developing type-2 diabetes. The survey highlights that urban
                    population is more prone to obesity as compared to their
                    rural counterparts.
                </Paragraph>
                <Paragraph>
                    Obesity tends to run in families, suggesting there may be a
                    genetic contribution. However, family members also tend to
                    share the same diet and lifestyle habits. Environment also
                    plays a role in obesity. Environmental factors include what
                    and how often a person eats, a person's level of activity
                    and behavioral factors.{' '}
                </Paragraph>
                <Paragraph>
                    Obesity is on the rise in children, which is having
                    disastrous results in the younger population thus affecting
                    the newborns of these adults. In 2016, an estimated 41
                    million children under the age of 5 years were overweight or
                    obese.{' '}
                </Paragraph>
                <Heading4>Obesity causes?</Heading4>
                <Paragraph>
                    The basic cause of obesity and overweight is an energy
                    imbalance between calories consumed and calories spent. In
                    recent trends, there has been:
                    <br />
                    &#8226; excessive intake of energy-dense foods that are high
                    in fat
                    <br />
                    &#8226; Decrease in physical activity due to the sedentary
                    nature of many forms of work, changing modes of
                    transportation, and increasing urbanization.
                    <br />
                </Paragraph>
                <Heading4>
                    What are common health consequences of overweight and
                    obesity?
                </Heading4>
                <Paragraph>
                    &#8226; cardiovascular diseases (mainly heart disease and
                    stroke), which were the leading cause of death in 2012;
                    <br />
                    &#8226; diabetes
                    <br />
                    &#8226; musculoskeletal problems (especially degenerative
                    disease of the joints)
                    <br />
                    &#8226; some of the cancers.
                    <br />
                    Childhood obesity is associated with a higher chance of
                    obesity, premature death and disability in adulthood.
                    <br />
                    Low-calorie, low-fat diets along with exercise - usually are
                    recommended to treat obesity. "Crash" diets and appetite
                    suppressants generally are appropriate only under very
                    specific conditions and under strict supervision.
                </Paragraph>
            </div>
            <BlackParagraph>
                Definitions of obesity according to BMI and excess body weight
            </BlackParagraph>
            <div>
                <img src="#" alt="Yangi rasm" />
                <img
                    src="https://www.atulpeters.com/front/img/bmi-img.png"
                    alt="Definitions of obesity according to BMI and excess body weight"
                />
            </div>
            <div>
                <Heading3>Results of surgical weight loss</Heading3>
                <Paragraph>
                    After gastric bypass procedure, most of the patients are
                    expected to lose about 60-80% of their excess body weight.
                    This weight loss occurs within 9-12 months post-surgery,
                    although some weight regain is normal after 2-5 years in
                    some of the patients.
                </Paragraph>
                <Paragraph>
                    Apart from weight loss, bariatric surgery is found to have
                    beneficial effects on a large number of associated medical
                    problems such as type II diabetes, high blood pressure, acid
                    reflux, Obstructive sleep apnea, polycystic ovarian disease,
                    joint pains, stress incontinence. There are improvements in
                    psychosocial and depressive disorders following bariatric
                    surgery. Best of the bariatric surgical centers like
                    Cleveland clinic have time and again shown about 80% of
                    remission from diabetes after bariatric surgery.
                </Paragraph>
                <Paragraph>
                    Patients are able to perform their routine activities and
                    duties easily and happily as there is considerable mood
                    elevation. Daily activities like getting in and out of a
                    car, walking in the garden, shopping for clothes which they
                    were not able to do previously can be done with much ease
                    after bariatric surgery.
                </Paragraph>
            </div>
            <SliderContent>
                <Slider {...settings}>
                    <div>
                        <SliderImg
                            src="https://www.atulpeters.com/media_upload/success-stories/72fe46cad29ab492165639df85e9f7c1.jpg"
                            alt="Ms. Usha Diwan"
                        />
                    </div>
                    <div>
                        <SliderImg
                            src="https://www.atulpeters.com/media_upload/success-stories/7ed28bdd2a41a5498d63cae46879c4f3.jpg"
                            alt="Mr. Raj Bakshi"
                        />
                    </div>
                    <div>
                        <SliderImg
                            src="https://www.atulpeters.com/media_upload/success-stories/bd499bc02d08332420d811a70918542c.jpg"
                            alt="Pinky Singh"
                        />
                    </div>
                    <div>
                        <SliderImg
                            src="https://www.atulpeters.com/media_upload/success-stories/5e5e9607b384878197d464358bd830a0.jpg"
                            alt="Sunil Singhal"
                        />
                    </div>
                    <div>
                        <SliderImg
                            src="https://www.atulpeters.com/media_upload/success-stories/22254b0a5d6066158a4be1b170f1c192.jpg"
                            alt="Mrs  Larai mohammad"
                        />
                    </div>
                    <div>
                        <SliderImg
                            src="https://www.atulpeters.com/media_upload/success-stories/61144d55101cc944c5853b1d8d2aad17.jpg"
                            alt="Mahesh Bhutani"
                        />
                    </div>
                </Slider>
            </SliderContent>
            <div>
                <Heading3>Benefits of weight loss surgery</Heading3>
                <Paragraph>
                    Severe obesity affects almost every organ of our body and
                    there are several problems due to this which have been
                    mentioned below. Weight loss achieved with{' '}
                    <BlueLink
                        className="link"
                        href="https://www.atulpeters.com/weight-loss-surgery/procedures/roux-en-y-gastric-bypass"
                    >
                        gastric bypass surgery
                    </BlueLink>{' '}
                    is sustained and can be maintained for several years
                    following surgery. Most of the obesity related problems are
                    resolved or improved following weight loss surgery. Those
                    people who have lost weight by dieting alone might not
                    experience improvement in these problems because weight loss
                    from diet does not often last long.
                </Paragraph>
            </div>
        </RightContent>
    );
};

export default index;
