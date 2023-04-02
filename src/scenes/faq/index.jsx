import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        How far is Saturn from the sun?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The average distance between Saturn and the Sun is about 1.43 billion kilometers (886 million miles).
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        What year did Canada gain its independence?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Canada did not gain independence on a single specific date. Instead, it is generally considered that Canada gradually gained independence from the United Kingdom over a period of time, with the process beginning in the mid-19th century and continuing through the 20th century. Some important milestones in this process include the British North America Act of 1867, which established the Dominion of Canada, the Statute of Westminster of 1931, which granted Canada greater autonomy from Britain, and the adoption of the Canadian Charter of Rights and Freedoms in 1982, which solidified Canada's independence as a sovereign nation.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        How much does a great white shark weigh?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A great white shark can weigh up to 2,268 kilograms (5,000 pounds), although the average weight of an adult great white shark is around 680 to 1,360 kilograms (1,500 to 3,000 pounds).
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        How many species of lizards live in Canada?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are no native species of lizards in Canada. Due to its cooler climate, the lizard population is limited to only a few introduced and invasive species, such as the European Wall Lizard and the Green Anole, found in some parts of British Columbia and southern Ontario.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        What city is closest to the South Pole?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are no cities located at the South Pole, but the nearest inhabited place is the research station at the McMurdo Station in Antarctica, which is about 3,486 kilometers (2,167 miles) away from the South Pole. McMurdo Station is the largest research station in Antarctica and serves as the logistics hub for several other research stations on the continent. The closest city to McMurdo Station is Christchurch, New Zealand, which is approximately 3,800 kilometers (2,361 miles) away.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Why is JavaScript awesome?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        JavaScript is a versatile programming language that can be used for front-end and back-end development, making it popular among developers. Its easy-to-learn syntax and client-side scripting capabilities make it essential for web development. Additionally, its open-source nature and cross-platform compatibility allow developers to use it freely on various platforms, making it a powerful and widely used language. Overall, JavaScript's popularity, versatility, and extensive community make it a favorite among developers worldwide.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ