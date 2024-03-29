import { Box, Stack } from '@mui/material'
import {
    IMG_ABOUT_1,
    IMG_ABOUT_2,
    M_IMG_ABOUT_1,
    M_IMG_ABOUT_2,
} from '../constants/images'
import {
    ContentOuterBox,
    OutlinedBlueButton,
    SectionDesc,
    SectionHead,
    SectionTitle,
} from '../styles'
import { BrowserView, MobileView } from 'react-device-detect'
import { VERIFY_SERVICE } from '../constants/links'

const About = () => {
    return (
        <>
            <BrowserView style={{ width: '100%' }}>
                <ContentOuterBox>
                    <Stack
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            p: '120px 0 166px 0',
                            maxWidth: '1200px',
                            gap: '238px',
                        }}
                    >
                        <Stack
                            direction="row"
                            sx={{
                                width: '100%',
                                justifyContent: 'space-between',
                                position: 'relative',
                            }}
                        >
                            <Stack sx={{ zIndex: 2 }}>
                                <SectionTitle sx={{ color: '#0875f5' }}>
                                    About
                                </SectionTitle>
                                <SectionHead
                                    sx={{
                                        color: '#161718',
                                        maxWidth: '331px',
                                        width: '100%',
                                        pb: '40px',
                                    }}
                                >
                                    Build
                                    <br /> a higher
                                    <br /> level of trust.
                                </SectionHead>
                                <SectionDesc
                                    sx={{
                                        width: '378px',
                                        pb: '40px',
                                        color: '#4a4d51',
                                    }}
                                >
                                    All recorded data on the blockchain network
                                    are transparently disclosed and cannot be
                                    modified. Using our verification service,
                                    <br />
                                    build your own impeccable service.
                                </SectionDesc>

                                <OutlinedBlueButton
                                    title="Verify service"
                                    onClick={() =>
                                        window.open(VERIFY_SERVICE, '_blank')
                                    }
                                />
                            </Stack>
                            <Box sx={{ position: 'absolute', right: 0 }}>
                                <img
                                    src={IMG_ABOUT_1}
                                    alt=""
                                    style={{
                                        maxWidth: '740px',
                                        maxHeight: '482px',
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Stack>

                        <Stack
                            direction="row"
                            sx={{
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <img
                                    src={IMG_ABOUT_2}
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        maxWidth: '670px',
                                        width: '100%',
                                    }}
                                />
                            </Box>
                            <Stack sx={{ alignItems: 'flex-end' }}>
                                <SectionTitle sx={{ color: '#0875f5' }}>
                                    About
                                </SectionTitle>
                                <SectionHead
                                    sx={{
                                        maxWidth: '417px',
                                        width: '100%',
                                        pb: '40px',
                                        textAlign: 'right',
                                        color: '#161718',
                                    }}
                                >
                                    Open API
                                    <br />
                                    for Easy
                                    <br />
                                    Implementation.
                                </SectionHead>
                                <SectionDesc
                                    sx={{
                                        width: '465px',
                                        textAlign: 'right',
                                        color: '#4a4d51',
                                    }}
                                >
                                    Using FirmaChain’s open API, you can easily
                                    integrate
                                    <br /> the features that meet the
                                    requirements of your company.
                                </SectionDesc>
                                <SectionDesc
                                    sx={{
                                        width: '465px',
                                        pb: '40px',
                                        textAlign: 'right',
                                        color: '#4a4d51',
                                    }}
                                >
                                    From creating a contract file to the
                                    authentication of recorded data, you do not
                                    have to be a blockchain specialist to
                                    integrate the features that FirmaChain’s
                                    open API provides.
                                </SectionDesc>

                                <OutlinedBlueButton title="API Docs" />
                            </Stack>
                        </Stack>
                    </Stack>
                </ContentOuterBox>
            </BrowserView>
            <MobileView style={{ width: '100%' }}>
                <ContentOuterBox>
                    <Stack
                        direction="column"
                        alignItems="center"
                        sx={{ width: '100%', p: '60px 0', gap: '70px' }}
                    >
                        <Stack sx={{ width: '100%', alignItems: 'center' }}>
                            <SectionTitle sx={{ color: '#0875f5' }}>
                                about
                            </SectionTitle>
                            <SectionHead
                                sx={{
                                    maxWidth: '212px',
                                    width: '100%',
                                    textAlign: 'center',
                                    pb: '24px',
                                }}
                            >
                                Build a higher level of trust.
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    textAlign: 'center',
                                    width: '310px',
                                    color: '#4a4d51',
                                }}
                            >
                                All recorded data on the blockchain network are
                                transparently disclosed and
                                <br /> cannot be modified.
                            </SectionDesc>
                            <SectionDesc
                                sx={{
                                    textAlign: 'center',
                                    width: '310px',
                                    color: '#4a4d51',
                                    pb: '30px',
                                }}
                            >
                                Using our verification service,
                                <br /> build your own impeccable service.
                            </SectionDesc>

                            <OutlinedBlueButton
                                title="Verify Service"
                                sx={{ mb: '50px' }}
                                onClick={() =>
                                    window.open(VERIFY_SERVICE, '_blank')
                                }
                            />

                            <Box>
                                <img
                                    src={M_IMG_ABOUT_1}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </Stack>
                        <Stack sx={{ width: '100%', alignItems: 'center' }}>
                            <SectionTitle sx={{ color: '#0875f5' }}>
                                about
                            </SectionTitle>
                            <SectionHead
                                sx={{ textAlign: 'center', pb: '24px' }}
                            >
                                Open API
                                <br /> for Easy
                                <br /> Implementation.
                            </SectionHead>
                            <SectionDesc
                                sx={{
                                    textAlign: 'center',
                                    color: '#4a4d51',
                                    pb: '30px',
                                }}
                            >
                                Using FirmaChain’s open API, you can easily
                                integrate the features that meet the
                                <br />
                                requirements of your company.
                                <br /> From creating a contract file to the
                                authentication
                                <br /> of recorded data, you do not have to be a
                                <br /> blockchain specialist to integrate the
                                features
                                <br /> that FirmaChain’s open API provides.
                            </SectionDesc>

                            <OutlinedBlueButton
                                title="API Docs"
                                sx={{ mb: '50px' }}
                            />

                            <Box>
                                <img
                                    src={M_IMG_ABOUT_2}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </ContentOuterBox>
            </MobileView>
        </>
    )
}

export default About
