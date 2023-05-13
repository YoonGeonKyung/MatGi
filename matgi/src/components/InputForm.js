import { inputState } from '../store/atom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const InputForm = () => {
	const [input, setInput] = useRecoilState(inputState);
	const navigate = useNavigate();

	const onChangeHandler = e => {
		setInput(e.target.value);
	};

	const onSubmitHandler = () => {
		navigate('/search/' + input);
	};

	return (
		<div>
			<input
				type="text"
				value={input}
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
