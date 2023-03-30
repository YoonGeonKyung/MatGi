import { inputState } from '../store/atom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';

const InputForm = () => {
	const [searchText, setSearchText] = useState();
	const setInputState = useSetRecoilState(inputState);
	const navigate = useNavigate();

	const onChangeHandler = e => {
		setSearchText(e.target.value);
	};

	const onSubmitHandler = () => {
		setInputState(pre => searchText);
		navigate('/map');
	};

	return (
		<div>
			<input
				type="text"
				value={searchText}
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
