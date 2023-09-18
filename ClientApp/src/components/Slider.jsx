import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import {Typography} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material';



const btnStyle = {
    height: '40px',
    width: '24px',
    backgroundColor: '#eaeff8',
    borderRadius: '12px',
    ml: 2,
}

const cardStyle = {
    width: '200px',
    height: '120px',
    mr: 1,
    mt: 2,
    borderRadius: '30px',
}

const images = [
    {
        label: 'Name',
        imgPath:
            'https://plus.unsplash.com/premium_photo-1661936371108-6765cb65b4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NDQxODEzNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
        label: 'Name',
        imgPath:
            'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzgzMzA0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
        label: 'Name',
        imgPath:
            'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM1NjA4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
        label: 'Name',
        imgPath:
            'https://images.unsplash.com/photo-1535443120147-89aef0b5327a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA3ODA1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
];

export function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ height: '260px', width: '100%', flexGrow: 1, position: 'relative' }}>

            <Box sx={{ position: 'absolute', right: 213, mt: -6 }}>
                <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={btnStyle}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                </Button>

                <Button sx={btnStyle}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >

                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            </Box>

            <Box sx={{ mt: 12, backgroundColor: 'rgb(250,250,250)', height: '160px' }}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 0 ? (
                            <Box sx={{ flexGrow: 1, display: 'flex', width: '100%', margin: 'auto 12.5%' }}>

                                {/* <Grid container spacing={1} sx={{ display: 'flex', overflow: 'hidden' }} >

<Grid item xs={2} component="img" src={step.imgPath} sx={gridStyle}>
</Grid>

<Grid item xs={2} component="img" src={step.imgPath} sx={gridStyle}>
</Grid>

<Grid item xs={2} component="img" src={step.imgPath} sx={gridStyle}>
</Grid>

<Grid item xs={2} component="img" src={step.imgPath} sx={gridStyle}>
</Grid>

<Grid item xs={2} component="img" src={step.imgPath} sx={gridStyle}>
</Grid>

<Grid item xs={2} component="img" src={step.imgPath} sx={gridStyle}>
</Grid>
</Grid> */}

                                <Box sx={{ backgroundColor: '#FFF', borderRadius: '20px', pl: '9px' }}>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            sx={{ height: '100%' }}
                                            component="img"
                                            height="194"
                                            src={step.imgPath}
                                        />
                                    </Card>
                                    <Typography>{step.label}</Typography>
                                </Box>

                                <Box>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            sx={{ height: '100%' }}
                                            component="img"
                                            height="194"
                                            src={step.imgPath}
                                        />
                                    </Card>
                                    <Typography>{step.label}</Typography>
                                </Box>

                                <Box>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            sx={{ height: '100%' }}
                                            component="img"
                                            height="194"
                                            src={step.imgPath}
                                        />
                                    </Card>
                                    <Typography>{step.label}</Typography>
                                </Box>

                                <Box>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            sx={{ height: '100%' }}
                                            component="img"
                                            height="194"
                                            src={step.imgPath}
                                        />
                                    </Card>
                                    <Typography>{step.label}</Typography>
                                </Box>

                                <Box>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            sx={{ height: '100%' }}
                                            component="img"
                                            height="194"
                                            src={step.imgPath}
                                        />
                                    </Card>
                                    <Typography>{step.label}</Typography>
                                </Box>

                            </Box>
                        ) : null}
                    </div>
                ))}
            </Box>
        </Box>
    );
}



