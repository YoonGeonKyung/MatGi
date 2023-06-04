import { useRecoilState } from 'recoil';
import { wishList } from '../store/atom';
import { useEffect } from 'react';

const MyPick = () => {
	const [myWish, setMyWish] = useRecoilState(wishList);

	useEffect(() => {
		const storedRecoilState = localStorage.getItem('myWish');

		if (storedRecoilState) {
			const parsedRecoilState = JSON.parse(storedRecoilState);
			setMyWish(parsedRecoilState);
		}
	}, []);

	return (
		<div>
			{myWish.map(my => (
				<>
					<h2>도시 : {my.SIGUN_NM}</h2>
					<h2>가게 이름 : {my.RESTRT_NM}</h2>
					<h2>전화번호 : {my.TASTFDPLC_TELNO}</h2>
					<h2>대표 음식 : {my.REPRSNT_FOOD_NM}</h2>
					<h2>우편 번호 : {my.REFINE_ZIPNO}</h2>
					<h2>도로명 주소 : {my.REFINE_ROADNM_ADDR}</h2>
					<h2>지번 주소 : {my.REFINE_LOTNO_ADDR}</h2>
				</>
			))}
		</div>
	);
};

export default MyPick;
