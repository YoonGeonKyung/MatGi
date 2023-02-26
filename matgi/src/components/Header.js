import React from 'react';
import * as s from './HeaderStyled';

const Header = () => {
	return (
		<s.NavgationContainer>
			<s.NavgationTitle href="/">MATGI</s.NavgationTitle>
			<s.Navgation>
				<s.NavgationItem>
					<s.NavgationLink href="/">찜</s.NavgationLink>
				</s.NavgationItem>
				<s.NavgationItem>
					<s.NavgationLink href="/">로그인</s.NavgationLink>
				</s.NavgationItem>
			</s.Navgation>
		</s.NavgationContainer>
	);
};

export default Header;
