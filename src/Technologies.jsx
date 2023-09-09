import React from 'react'
import {Grid, Box, Typography, Stack} from '@mui/material'

export const Technologies = () => {
    return (

        <Box>

            <Grid className='mx-auto' sx={{width:{xs:'100%', md:'80%', lg:'80%'}, mt:12, display:'flex', justifyContent:'center'}} container spacing={6}>
                <Grid sx={{display: 'flex', justifyContent: 'center'}} item lg={4} md={8} xs={12}>
                    <img src='../images/vector59.svg' />
                </Grid>

                <Grid item lg={4} md={8} xs={12}>
                    <Typography style={{
                        color: '#5F5F5F',
                        textAlign: 'center',
                        fontFamily: 'Google Sans',
                        fontSize: '4.375rem',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '150%', /* '6.5625rem' */
                        letterSpacing: '-0.09625rem'
                    }}>
                        Technologies
                    </Typography>
                </Grid>

                <Grid sx={{display: 'flex', justifyContent: 'center'}} item lg={4} md={8} xs={12}>
                    <img src='../images/vector58.svg' />
                </Grid>
            </Grid>

            <Box>

                <Typography style={{
                        color: '#5F5F5F',
                        textAlign: 'center',
                        fontFamily: 'Google Sans',
                        fontSize: '2rem',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%', /* '3rem' */
                        letterSpacing: '-0.022rem',
                }}>
                Domains That Excite Us to Collaborate and Teach!
                </Typography>

            </Box>

            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    {/* <img src="..." class="d-block w-100" alt="..."/> */}
                            <Stack className='' sx={{display:'flex',justifyContent:'center', flexDirection:'column', mt:12,mb:2}}>
                                <Box className='mx-auto'>
                                    <img src='../images/red-bar.svg' />
                                </Box>

                                <Box className='andbox mx-auto' sx={{width:{xs:'80%',md:'60%',lg:'35%'}, height:{xs:'80%',md:'60%',lg:'35%'}}}>
                                    <Box sx={{display:'flex',justifyContent:'center'}}>
                                        <img style={{width:'50%', height:'50%'}} src='../images/android.svg' />
                                    </Box>

                                    <Box sx={{display:'flex',justifyContent:'center'}}>
                                        <Typography className='' style={{
                                            color: '#5F5F5F',
                                            fontFamily: 'Google Sans',
                                            fontSize: '2.98694rem',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: 'normal'
                                        }}>
                                            Android
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:'flex',justifyContent:'center', mt:3}}>
                                        <img src='../images/vector-android.svg' />
                                    </Box>
                                </Box>
                            </Stack>
                    </div>
                    <div class="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..."/> */}
                            <Stack className='' sx={{display:'flex',justifyContent:'center', flexDirection:'column', mt:12,mb:2}}>
                                <Box className='mx-auto'>
                                    <img src='../images/blue-bar.svg' />
                                </Box>

                                <Box className='andbox mx-auto' sx={{width:{xs:'80%',md:'60%',lg:'35%'}, height:{xs:'80%',md:'60%',lg:'35%'}}}>
                                    <Box sx={{display:'flex',justifyContent:'center'}}>
                                        <img style={{width:'50%', height:'50%'}} src='../images/flutter.svg' />
                                    </Box>

                                    <Box sx={{display:'flex',justifyContent:'center'}}>
                                        <Typography className='' style={{
                                            color: '#5F5F5F',
                                            fontFamily: 'Google Sans',
                                            fontSize: '2.98694rem',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: 'normal'
                                        }}>
                                            Flutter
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:'flex',justifyContent:'center', mt:3}}>
                                        <img src='../images/vector-android.svg' />
                                    </Box>
                                </Box>
                            </Stack>
                    </div>
                    <div class="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..."/> */}
                                <Stack className='' sx={{display:'flex',justifyContent:'center', flexDirection:'column', mt:12, mb:2}}>
                                    <Box className='mx-auto'>
                                        <img src='../images/green-bar.svg' />
                                    </Box>

                                    <Box className='andbox mx-auto' sx={{width:{xs:'80%',md:'60%',lg:'35%'}, height:{xs:'80%',md:'60%',lg:'35%'}}}>
                                        <Box sx={{display:'flex',justifyContent:'center'}}>
                                            <img style={{width:'50%', height:'50%'}} src='../images/cloud.svg' />
                                        </Box>

                                        <Box sx={{display:'flex',justifyContent:'center'}}>
                                            <Typography className='' style={{
                                                color: '#5F5F5F',
                                                fontFamily: 'Google Sans',
                                                fontSize: '2.98694rem',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: 'normal'
                                            }}>
                                                Cloud
                                            </Typography>
                                        </Box>

                                        <Box sx={{display:'flex',justifyContent:'center', mt:3}}>
                                            <img src='../images/vector-android.svg' />
                                        </Box>
                                    </Box>
                                </Stack>
                    </div>
                    <div className="carousel-item">
                                    <Stack className='' sx={{display:'flex',justifyContent:'center', flexDirection:'column', mt:12,mb:2}}>
                                            <Box className='mx-auto'>
                                                <img src='../images/blue-bar.svg' />
                                            </Box>

                                            <Box className='andbox mx-auto' sx={{width:{xs:'80%',md:'60%',lg:'35%'}, height:{xs:'80%',md:'60%',lg:'35%'}}}>
                                                <Box sx={{display:'flex',justifyContent:'center'}}>
                                                    <img style={{width:'50%', height:'50%'}} src='../images/machine-learning.png' />
                                                </Box>

                                                <Box sx={{display:'flex',justifyContent:'center'}}>
                                                    <Typography className='' style={{
                                                        color: '#5F5F5F',
                                                        fontFamily: 'Google Sans',
                                                        fontSize: '2.98694rem',
                                                        fontStyle: 'normal',
                                                        fontWeight: 500,
                                                        lineHeight: 'normal'
                                                    }}>
                                                        Machine Learning
                                                    </Typography>
                                                </Box>

                                                <Box sx={{display:'flex',justifyContent:'center', mt:3}}>
                                                    <img src='../images/vector-android.svg' />
                                                </Box>
                                            </Box>
                                    </Stack>
                    </div>
                </div>
                <button class="carousel-control-prev bg-dark prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next bg-dark next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <Box sx={{mt:12}}>
                <Typography style={{
                    color: '#5F5F5F',
                    textAlign: 'center',
                    fontFamily: 'Google Sans',
                    fontSize: '3.75rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '150%', /* '5.625rem' */
                    letterSpacing: '-0.04125rem'
                    
                }}>
                    FAQs
                </Typography>
            </Box>

            <Stack sx={{mt:12}}>
                <Grid container spacing={5} sx={{display:'flex', justifyContent:'center'}}>

                    <Grid className='faq-que1' item lg={9} sx={{display:'flex', flexDirection:'row'}}>
                        <Grid lg={0.5} sx={{display:'flex', justifyContent:'right', mb:3}}>
                            <img  src='../images/vec-red.svg' />
                            
                        </Grid>

                        <Grid lg={11.5} sx={{mb:3, ml:4}}>
                            <Typography style={{
                                color: '#5F5F5F',
                                textAlign: 'left',
                                fontFamily: 'Google Sans',
                                fontSize: '2rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '3rem' */
                                letterSpacing: '-0.022rem'
                                
                            }}>
                                What is GDSC?
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item lg={8} sx={{display:'flex', flexDirection:'row'}}>
                        <Box>
                            <img src='../images/ver-red.svg' />
                        </Box>
                        <Box className='faq-ans1'>
                            <Typography style={{
                                color: '#5F5F5F',
                                fontFamily: 'Google Sans',
                                fontSize: '1.7625rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.34375rem' */
                                letterSpacing: '-0.01719rem'
                                
                            }}>
                            Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>


                <Grid container spacing={5} sx={{display:'flex', justifyContent:'center', mt:12}}>

                    <Grid className='faq-que1' item lg={9} sx={{display:'flex', flexDirection:'row'}}>
                        <Grid lg={0.5} sx={{display:'flex', justifyContent:'right', mb:3}}>
                            <img  src='../images/vec-green.svg' />
                            
                        </Grid>

                        <Grid lg={11.5} sx={{mb:3, ml:4}}>
                            <Typography style={{
                                color: '#5F5F5F',
                                textAlign: 'left',
                                fontFamily: 'Google Sans',
                                fontSize: '2rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '3rem' */
                                letterSpacing: '-0.022rem'
                                
                            }}>
                                How can you become a part of GDSC ?
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item lg={8} sx={{display:'flex', flexDirection:'row'}}>
                        <Box>
                            <img src='../images/ver-green.svg' />
                        </Box>
                        <Box className='faq-ans1'>
                            <Typography style={{
                                color: '#5F5F5F',
                                fontFamily: 'Google Sans',
                                fontSize: '1.75625rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.34375rem' */
                                letterSpacing: '-0.01719rem'
                                
                            }}>
                            We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>



                <Grid container spacing={5} sx={{display:'flex', justifyContent:'center', mt:12}}>

                    <Grid className='faq-que1' item lg={9} sx={{display:'flex', flexDirection:'row'}}>
                        <Grid lg={0.5} sx={{display:'flex', justifyContent:'right', mb:3}}>
                            <img  src='../images/vec-blue.svg' />
                            
                        </Grid>

                        <Grid lg={11.5} sx={{mb:3, ml:4}}>
                            <Typography style={{
                                color: '#5F5F5F',
                                textAlign: 'left',
                                fontFamily: 'Google Sans',
                                fontSize: '2rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '3rem' */
                                letterSpacing: '-0.022rem'
                                
                            }}>
                                What does a GDSC Lead do?
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item lg={8} sx={{display:'flex', flexDirection:'row'}}>
                        <Box>
                            <img src='../images/ver-blue.svg' />
                        </Box>
                        <Box className='faq-ans1'>
                            <Typography style={{
                                color: '#5F5F5F',
                                fontFamily: 'Google Sans',
                                fontSize: '1.75625rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.34375rem' */
                                letterSpacing: '-0.01719rem'
                                
                            }}>
                            A GDSC Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>


                <Grid container spacing={5} sx={{display:'flex', justifyContent:'center', mt:12}}>

                    <Grid className='faq-que1' item lg={9} sx={{display:'flex', flexDirection:'row'}}>
                        <Grid lg={0.5} sx={{display:'flex', justifyContent:'right', mb:3}}>
                            <img  src='../images/vec-yellow.svg' />
                            
                        </Grid>

                        <Grid lg={11.5} sx={{mb:3, ml:4}}>
                            <Typography style={{
                                color: '#5F5F5F',
                                textAlign: 'left',
                                fontFamily: 'Google Sans',
                                fontSize: '2rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '3rem' */
                                letterSpacing: '-0.022rem'
                                
                            }}>
                                How is DSC related to Google?
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item lg={8} sx={{display:'flex', flexDirection:'row'}}>
                        <Box>
                            <img src='../images/ver-yellow.svg' />
                        </Box>
                        <Box className='faq-ans1'>
                            <Typography style={{
                                color: '#5F5F5F',
                                fontFamily: 'Google Sans',
                                fontSize: '1.75625rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.34375rem' */
                                letterSpacing: '-0.01719rem'
                                
                            }}>
                            A GDSC Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>



                <Grid container spacing={5} sx={{display:'flex', justifyContent:'center', mt:12}}>

                    <Grid className='faq-que1' item lg={9} sx={{display:'flex', flexDirection:'row'}}>
                        <Grid lg={0.5} sx={{display:'flex', justifyContent:'right', mb:3}}>
                            <img  src='../images/vec-red.svg' />
                            
                        </Grid>

                        <Grid lg={11.5} sx={{mb:3, ml:4}}>
                            <Typography style={{
                                color: '#5F5F5F',
                                textAlign: 'left',
                                fontFamily: 'Google Sans',
                                fontSize: '2rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '3rem' */
                                letterSpacing: '-0.022rem'
                                
                            }}>
                                How to reach us?
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item lg={8} sx={{display:'flex', flexDirection:'row'}}>
                        <Box>
                            <img src='../images/ver-red-sm.svg' />
                        </Box>
                        <Box className='faq-ans1'>
                            <Typography style={{
                                color: '#5F5F5F',
                                fontFamily: 'Google Sans',
                                fontSize: '1.75625rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.34375rem' */
                                letterSpacing: '-0.01719rem'
                                
                            }}>
                            Mail us at "dsc.rknec@gmail.com "
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>


                
            </Stack>

            <div class="box">
                <div class="rectangle">

                </div>
            </div>




        </Box>
    )
}

export default Technologies