import React from "react";
import { Typography, Box } from "@mui/material";
import {    FooterStyled,
            FooterContainer,
            FooterTitle,
            AppList,
    } from './Footer.style';

const Footer = () => {
    return ( <FooterStyled>
            
                <FooterContainer>
                <Box sx={{ maxWidth: '400px' }}>
                    brunovenancio
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{mt: 2}}>
                                O e-diaristas te ajuda a encontrar um profissionas perfeito 
                                para realizar a limpeza da sua casa. garantimos os melhores
                                profisionais com total segurança e praticidade! São milhares
                                de clientes satisfeitos por todo o país.
                    </Typography>
                </Box>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            
                <div>
                    <AppList>
                        <li>
                            <a href={'/'}
                                target={'_blank'}
                                rel={'nooper noreferrer'}
                            >
                                <img src={'/img/logos/app-store.png'} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href={'/'}
                                target={'_blank'}
                                rel={'nooper noreferrer'}
                            >
                                <img src={'/img/logos/google-play.png'} alt=""/>
                            </a>
                        </li>
                      
                    </AppList>
                </div>
                </FooterContainer>
            </FooterStyled>
    );
};
export default Footer;

