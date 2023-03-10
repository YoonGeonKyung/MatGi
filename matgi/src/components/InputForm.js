import { inputState } from '../store/atom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const InputForm = () => {
	const [inputText, setInputText] = useRecoilState(inputState);

	const navigate = useNavigate();

	const onChangeHandler = e => {
		setInputText(e.target.value);
	};

	const onSubmitHandler = () => {
		navigate('/map');
	};

	return (
		<div>
			<input
				type="text"
				value={inputText}
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
