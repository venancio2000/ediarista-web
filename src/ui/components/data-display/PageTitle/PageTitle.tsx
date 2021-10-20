import { jsx } from "@emotion/react";
import React from "react";
import {PagaTitleContainer, PagaTileStyled, PageSubtitleStyled } from './PageTitle.style';


interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    
    return (
        <PagaTitleContainer>
            <PagaTileStyled>{props.title}</PagaTileStyled>
            <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
        </PagaTitleContainer>
    );
}
export default PageTitle;