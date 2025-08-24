import { Box, Typography } from '@mui/material'
import React from 'react'
import TeamCard from './TeamCard'

const TeamCards = () => {
    const cardData = [
        {
            id: 1,
            title: "Ms. Clara Bennett",
            desc: "Lead Teacher with 10+ years of experience in early childhood education. Passionate about creating a nurturing and stimulating learning environment.",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYYRTrujB0QDmnGtIDFC8l_c483GEuEtcF2VFUAFy74Oi0HVUit2x_I4-2vdFO_RvaWS-RmJ8XIw7GcRaVGM7Dcdipxpb-AT3qfZi30Cgj27tYhnTpep3rd2FFIPhgih3-TkmeaOvTppBdT9E6tXjU2kyUT9GH6cyyS-r_eP77XP7A4du_bBFQZuyAi85p3VX8XercTfuPNDRmbdiLy94NctNDU50ZZYaIpP4aUU505ewYZ844o4LEf_QNFiy3HTrA2HPLMUB1aGlC"
        },
        {
            id: 2,
            title: "Mr. Ethan Carter",
            desc: "Assistant Teacher specializing in outdoor activities and physical development. Dedicated to fostering children's love for nature.",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0k5N7GKRU9wrk_LRXSHT44PXsTH7n5mPhP126uQF6KzoSuaVSwX_tm6tYgim5V2f6VSF_uT1ma2TzVRptk-IM1kQUGucMKJh2x9dys4Pl3QsWcfnE_7I1NYByopPQ_mNPqHPrS3eBgWwN4Kk_T_EmlXoavkfY5_kJLxJC90gXekxsjSt1RMD4RAvrPhb7_OP-Zu594daRLLDbXYCKtOOAiXlHOdu6bprssFqxU0QSBvI2LOPcS0yL1jaZ1OqUmMbjWkCtszuiVHd1"
        },
        {
            id: 3,
            title: "Ms. Olivia Brown",
            desc: "Creative Arts Teacher with a passion for inspiring young artists. Focused on developing children's creativity and self-expression.",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvJzNDvFdZIqQRcMJmy5FOoKPtu5WbQ6KQD6U1g-m91-CcGIyExiXoDDFjfzhIEFu2KYQsH1GKsHo2xmxi08P-n6Qlb_qLMX2FdaDQQaSQgQoJKQtNlnSl0O5s0usW0lvwvao_gvkV0V3SGJhtv387Rp2Rv9EcS2YySfNygdbDCbtRBPbsVtnmrs4Ei1861oGggk2MyHRC25Ida_MDoLTgVm9F8f3JC23X2sbD1gd_dBpWRzQDJHePl7cxbPY2QqSWYBKjWMso947B",
        }
    ]

    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" },
            gap: 2,
            mt: 2,
        }}>
            {
                cardData?.map((card) =>
                    <TeamCard key={card.id} title={card.title} desc={card.desc} imgUrl={card.imgUrl} />
                )
            }

        </Box>
    )
}

export default TeamCards