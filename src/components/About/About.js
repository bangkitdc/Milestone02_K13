import React from 'react';
import { Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const About = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography className={classes.heading} variant='h1'>Apa itu <span className={classes.dor}>DoR?</span></Typography>
            <Typography className={classes.paragraph} variant='body1'>
                Merupakan solusi dari masalah yang kami, Kelompok 13, temukan dari lingkungan sekitar kami. DoR merupakan singkatan dari Dosen Review, dimana solusi kami adalah dalam bentuk produk sebuah website. DoR diciptakan untuk mewadahi informasi tentang dosen yang dapat membantu pembelajaran mahasiswa, seperti metode pembelajaran dosen tersebut, tugas yang biasanya ia berikan, dan sebagainya. Kami harap, dengan adanya DoR, informasi mengenai hal - hal tersebut dapat diakses dengan mudah untuk seluruh mahasiswa sehingga dapat membuat mahasiswa lebih siap dalam menghadapi mata kuliah yang bersangkutan.
            </Typography>
        </Box>
    )
}

export default About;
