import styled from 'styled-components';

export const NavgationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	height: 65px;
	padding: 20px;
	border-bottom: 1px solid gray;
`;

export const NavgationTitle = styled.a`
	font-size: 25px;
	color: black;
	margin: 0;
`;

export const Navgation = styled.div`
	display: flex;
	align-items: center;
`;

export const NavgationItem = styled.li`
	list-style: none;
	margin-left: 20px;
`;

export const NavgationLink = styled.a`
	color: gray;
	&:hover {
		color: black;
	}
`;
