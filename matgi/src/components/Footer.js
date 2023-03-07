import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	height: 65px;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
`;

const FooterText = styled.a`
	color: gray;
	&:hover {
		color: black;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterText href="/">GitHub : https://github.com/YoonGeonKyung/MatGi.git</FooterText>
		</FooterContainer>
	);
};

export default Footer;
