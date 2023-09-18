import React, { useState } from "react";
import {
    Box, Typography, CssBaseline, Container, TextField,
    Grid, Button, FormControl, MenuItem
} from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import useStyles from './styles';
import { useForm } from "react-hook-form";

function FishDropdown({ register }) {
    return (
        <FormControl fullWidth>
            <TextField
                {...register("DailyFishName")}
                select
                label="Select"
                defaultValue="fish1"
                helperText="Please select your fish"
                variant="outlined"
            >
                {["fish1", "fish2", "fish3"].map(fish => (
                    <MenuItem key={fish} value={fish}>
                        {fish}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    );
}

function UploadButton({ index, handleFileChange, fileName }) {
    return (
        <FormControl fullWidth>
            <input
                id={`upload-photo-${index}`}
                type="file"
                accept="image/*"
                hidden
                name="DailyFishImage"
                onChange={(e) => handleFileChange(e, index)}
            />
            <label htmlFor={`upload-photo-${index}`}>
                <Button variant="contained" color="primary" component="span">
                    Upload Fish Image
                </Button>
            </label>
            {fileName && <Typography variant="body1">{fileName}</Typography>}
        </FormControl>
    );
}

export function Seller() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const [fishes, setFishes] = useState([{ }]);

    const handleFileChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newFishes = [...fishes];
            newFishes[index].DailyFishImage = file;  
            setFishes(newFishes);
        }
    };

    

    const addFish = () => setFishes([...fishes, { }]);
    const deleteFish = (index) => setFishes(fishes.filter((_, i) => i !== index));
    const onSubmit = async data => {
        console.log(data, fishes);
        await fetch('https://localhost:7009/api/DailyFish', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fishes),
        });    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" paddingTop={6}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box textAlign="center" className={classes.DF_Box} >
                    <Typography className={classes.DfLogo} variant="span">
                        <AddBoxOutlinedIcon fontSize="large" />
                    </Typography>
                    <Typography variant='h3' className={classes.Df_Title}>Enter Fish</Typography>
                    <Typography variant='body1' className={classes.Df_sub_title}>
                        We'll send you a message with the verification code.
                    </Typography>
                    <Grid container direction="column" spacing={3} mt={2}>
                        <Button variant="contained" className={classes.Df_Button} onClick={addFish}>Add</Button>

                        <Box component="form" onSubmit={handleSubmit(onSubmit)} method="post" mt={3} encType="multipart/form-data">
                            {fishes.map((fish, i) => (
                                <div key={i}>
                                    <Grid item><FishDropdown register={register} /></Grid>
                                    <Grid item mt={2}>
                                        <UploadButton index={i}  handleFileChange={handleFileChange} fileName={fish.file?.name} />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="secondary"  onClick={() => deleteFish(i)} sx={{ mt: 2}}>
                                            Delete
                                        </Button>
                                        <Box component="hr" my={2} borderColor="divider" />
                                    </Grid>
                                </div>
                            ))}
                            <Grid item sx={{ mt: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    sx={{ width: 360 }}
                                    className={classes.Df_Button}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
