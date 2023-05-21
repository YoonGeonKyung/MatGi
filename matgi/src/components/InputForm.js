import { useState, useEffect } from 'react';
import { inputState, mapLatLng } from '../store/atom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const inputLocation = {
	x: 0,
	y: 0,
};

const InputForm = () => {
	const setInput = useSetRecoilState(inputState);
	const setLocation = useSetRecoilState(mapLatLng);
	const [textInput, setTextInput] = useState('');
	const navigate = useNavigate();

	const onChangeHandler = e => {
		setTextInput(e.target.value);
	};

	useEffect(() => {
		const getGeoCoding = async () => {
			try {
				const response = await fetch(
					`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
						textInput,
					)}`,
					{
						headers: {
							Authorization: 'KakaoAK 9254458c2f196af7e757f4e147eafc4e', // Kakao API 키 입력
						},
					},
				);

				if (response.ok) {
					const data = await response.json();
					if (data.documents.length > 0) {
						const { x, y } = data.documents[0].address;
						inputLocation.x = x;
						inputLocation.y = y;
					}
				} else {
					console.error('Error:', response.status);
				}
			} catch (error) {
				console.error('Error:', error);
			}
		};

		if (textInput) {
			getGeoCoding();
		}
	}, [textInput]);

	const onSubmitHandler = () => {
		setInput(textInput);
		setLocation({
			x: inputLocation.x,
			y: inputLocation.y,
		});
		navigate('/search/' + textInput);
	};

	return (
		<div>
			<input
				type="text"
				value={textInput}
				placeholder="검색어를 입력하세요."
				onChange={onChangeHandler}
				size="20"
			/>
			<button type="submit" onClick={onSubmitHandler}>
				검색
			</button>
		</div>
	);
};

export default InputForm;
