import { useState, useEffect } from 'react';
import { inputState } from '../store/atom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const InputForm = () => {
	const [input, setInput] = useRecoilState(inputState);
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
						localStorage.setItem('location', JSON.stringify({ x, y }));
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

		const storedRecoilState = localStorage.getItem('input');

		if (storedRecoilState) {
			const parsedRecoilState = JSON.parse(storedRecoilState);
			setInput(parsedRecoilState);
		}
	}, [textInput]);

	const onSubmitHandler = () => {
		setInput(textInput);
		localStorage.setItem('input', JSON.stringify(textInput));
		navigate('/search/' + textInput);
	};

	return (
		<div>
			<input
				type="text"
				value={textInput}
				placeholder={input}
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
