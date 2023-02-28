import React from 'react';
import styled from 'styled-components';

const NavgationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	height: 65px;
	padding: 20px;
	border-bottom: 1px solid gray;
`;

const NavgationTitle = styled.a`
	font-size: 25px;
	color: black;
	margin: 0;
`;

const Navgation = styled.div`
	display: flex;
	align-items: center;
`;

const NavgationItem = styled.li`
	list-style: none;
	margin-left: 20px;
`;

const NavgationLink = styled.a`
	color: gray;
	&:hover {
		color: black;
	}
`;

const Header = () => {
	return (
		<NavgationContainer>
			<NavgationTitle href="/">MATGI</NavgationTitle>
			<Navgation>
				<NavgationItem>
					<NavgationLink href="/">찜</NavgationLink>
				</NavgationItem>
				<NavgationItem>
					<NavgationLink href="/">로그인</NavgationLink>
				</NavgationItem>
			</Navgation>
		</NavgationContainer>
	);
};

export default Header;
