import {
    FaqsAccordion,
    Heading,
    HeadingBlog,
    Image,
    ImageBlog,
    RightContent,
} from '../style';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
    ({ theme }) => ({
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(2),
        },
        '& .MuiAccordionSummary-expandIconWrapper': {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(1.5),
        },
    })
);

const Index = () => {
    const [faqsAccardion, setFaqsAccardion] = useState([
        {
            tittle: 'Who are the candidates for weight loss surgery?',
            description:
                'To qualify for surgery patients one must weigh 30 kgs more than their ideal body weight, or have a Body Mass Index greater than 37 without associated Diabetes / Hypertension or more than 32 with associated co morbidities. However, patients who weigh less than this may be considered for surgery as per new IDF (International Diabetes Federation) guidelines for Asians.',
            id: 'panel1',
            bolIcon: false,
        },
        {
            tittle: 'Who are the candidates for metabolic surgery or surgery for diabetes?',
            description:
                'Candidate must have diagnosed type II Diabetes Mellitus which is not controlled with medicines and lifestyle changes, there is evidence of organ damage in the form of neuropathy or kidney disease, there must be sufficient insulin reserves on Investigations.',
            id: 'panel2',
            bolIcon: false,
        },
        {
            tittle: 'Why should I lose weight?',
            description:
                'Today pre mature death rates are increased by 200% for men and women who are significantly overweight. Obesity causes or increases the risks of many diseases e.g. Diabetes, high BP, heart disease, joint pains etc',
            id: 'panel3',
            bolIcon: false,
        },
        {
            tittle: 'What are the options available to me?',
            description:
                'Mild form of obesity can be treated with Diet, Exercise & Medication, however for people who are severely obese after conventional approaches to weight loss such as diet and exercise – have failed, or for patients who have obesity – related disease, surgery may be the best treatment option.',
            id: 'panel4',
            bolIcon: false,
        },
        {
            tittle: 'What are the long term results?',
            description:
                'The Results of bariatric surgery are long term, studies performed at various bariatric surgical centers concluded that after Bariatric surgery most of the individuals suffering from morbid obesity can maintain more than 50 % of the excess weight loss and among these individuals almost 80 % of those who are suffering from super super morbid obesity are able to achieve more than 50 % of the excess weight loss.',
            id: 'panel5',
            bolIcon: false,
        },
        {
            tittle: 'After surgery, when can I resume work?',
            description:
                'You could start your office/desk work after 3 days of surgery. If your job involves heavy lifting you may need to wait longer, possibly a week, though different patients behave differently post operatively.',
            id: 'panel6',
            bolIcon: false,
        },
        {
            tittle: 'Can I get pregnant after weight loss surgery?',
            description:
                'It is strongly recommended that women wait at least one year after the surgery before a pregnancy. Approximately one year post-operatively, your body will be fairly stable (from a weight and nutrition standpoint) and you should be able to carry a normally nourished foetus. You should consult your surgeon as you plan for pregnancy.',
            id: 'panel7',
            bolIcon: false,
        },
        {
            tittle: 'Can Weight Loss Surgery prolong my life?',
            description:
                'Various research papers published found that those who are affected by morbid obesity and have undergone bariatric surgery are at a lower risk of death then those who do not have surgery. There are proven evidences that after bariatric surgery there is a significant reduction in mortality from diabetes and heart diseases in individuals suffering from morbid obesity. The mortality rate for bariatric surgery (3 out of 1000) is similar to that of gall bladder removal and considerably less than that of hip replacement. The exceptionally low mortality rate with bariatric surgery is quite remarkable.',
            id: 'panel8',
            bolIcon: false,
        },
        {
            tittle: 'Can weight loss surgery help other physical conditions?',
            description:
                'In addition to improvements in health and longevity, surgical weight-loss improves overall quality of life. Measures of quality of life that are positively affected by bariatric surgery include physical functions such as mobility, self-esteem, work, social interactions, and sexual function. Singlehood is significantly reduced, as is unemployment and disability. Furthermore, depression and anxiety are significantly reduced following bariatric surgery.',
            id: 'panel9',
            bolIcon: false,
        },
        {
            tittle: 'How soon will I be able to walk?',
            description:
                'Almost immediately after surgery doctors will require you to get up and move about. Patients are asked to walk or stand at the bedside on the night of surgery, take several walks the next day and thereafter. On leaving the hospital, you may be able to care for all your personal needs, but will need help with shopping, lifting and with transportation.',
            id: 'panel10',
            bolIcon: false,
        },
        {
            tittle: 'How soon can I drive?',
            description:
                'You could start driving from third day of surgery if you feel upto it. However, it is recommended that you don’t take a long drive as it increases the chances of DVT (Deep Vein Thrombosis).',
            id: 'panel11',
            bolIcon: false,
        },
        {
            tittle: 'What is Minimal access Surgery?',
            description:
                'Minimal access Surgery is an established advanced technique for doing all types of surgical procedures. This technique also known as ‘Keyhole Surgery’ or Laparoscopic Surgery. It uses a thin telescope known as laparoscope, which is inserted through small incisions. The laparoscope is connected to a tiny video camera which projects the inside view of patient’s body to a high resolution monitors in the operating room. Small surgical instruments are then passed through one or more additional 3-5mm incisions, through which the surgery is done. These incisions are usually covered with surgical glue and after a few weeks are scarcely visible thus avoiding any follow up visit for suture removal',
            id: 'panel12',
            bolIcon: false,
        },
        {
            tittle: 'What are the Advantages of Minimal Access Surgery?',
            description: `The major advantages of this technique over conventional open surgery are:
                Minimal access Surgery by improving vision and providing magnification up to 20 times makes surgery more precise and accurate with minimal collateral damage. This provides faster recovery and minimal complication after surgery.
                In Minimal access Surgery a small hole is made through the abdominal muscles to permit access to the abdominal cavity by the surgeon. This leads to minimal tissue damage and less pain. In a conventional surgery, all the muscles are cut to gain the access.
                The operative scar in Minimal access Surgery consists of one or more small scars measuring up to 0.5-1.5 cms versus a single large long scar of conventional surgery.`,
            id: 'panel13',
            bolIcon: false,
        },
        {
            tittle: 'Can all patients with surgical problems benefit from this technique?',
            description:
                'MAS may not be indicated for a few selected patients. Each patient is evaluated individually and advised accordingly. You should educate yourself about all the surgical options available to you and discuss these options with your surgeon and then rely on him to choose the best option for you.',
            id: 'panel14',
            bolIcon: false,
        },
        {
            tittle: 'When is MAS mostly used?',
            description:
                '- Removal of Gall bladder for Gall Stone disease. - All type of Hernia (Inguinal, umbilical, Incisional, Hiatus hernia etc) - Removal of appendix - All colorectal diseases and tumors/ Cancer - Surgeries for Oesophagus and Stomach - Weight loss/Metabolic surgeries - Liver, Bile duct and Pancreatic surgeries - Endocrine Surgery: Adrenal Gland, Parathyroid gland surgery - Surgery for Abdominal Trauma And many of procedures have been already described above.',
            id: 'panel15',
            bolIcon: false,
        },
        {
            tittle: 'When can I get back to work?',
            description:
                'You are usually allowed to go home the same day or next day, except in cases of more advanced procedures that may require three or four days of hospital stay. You can get back to routine activities in 3 days and to work in 5 days.',
            id: 'panel16',
            bolIcon: false,
        },
    ]);

    const handleChange = (panel) => (event, isExpanded) => {
        setFaqsAccardion([...faqsAccardion]);
        panel.bolIcon = !panel.bolIcon;
    };

    return (
        <RightContent>
            <ImageBlog>
                <Image
                    src="https://www.atulpeters.com/front/img/faq-img.png"
                    alt=""
                />
            </ImageBlog>
            <HeadingBlog>
                <Heading>Frequently Asked Questions by Patients</Heading>
            </HeadingBlog>
            {faqsAccardion.map((accardion) => {
                const { id, tittle, description, bolIcon } = accardion;

                return (
                    <Accordion
                        key={id}
                        style={FaqsAccordion}
                        onChange={handleChange(accardion)}
                    >
                        <AccordionSummary
                            expandIcon={
                                bolIcon ? (
                                    <RemoveSharpIcon
                                        sx={{ fontSize: '1.3rem' }}
                                        style={{
                                            backgroundColor: '#2CC0D6',
                                            color: '#fff',
                                            boxSizing: 'content-box',
                                            padding: '11px 5px 5px',
                                            borderRadius: '5px',
                                        }}
                                    />
                                ) : (
                                    <AddSharpIcon
                                        sx={{ fontSize: '2rem' }}
                                        style={{
                                            backgroundColor: '#aaa',
                                            color: '#fff',
                                            padding: '5px',
                                            borderRadius: '5px',
                                        }}
                                    />
                                )
                            }
                            aria-controls="panel1bh-content"
                            id={`${id}bh-header`}
                        >
                            <Typography
                                style={{
                                    color: `${bolIcon ? '#2CC0D6' : '#777'}`,
                                    fontWeight: 'bold',
                                }}
                            >
                                {tittle}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </RightContent>
    );
};

export default Index;
