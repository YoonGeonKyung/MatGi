import { atom } from 'recoil';

export const inputState = atom({
	key: 'inputState',
	default: '',
});

export const mapLatLng = atom({
	key: 'mapLatLng',
	default: {
		x: 37.2525704606099,
		y: 127.076905736938,
	},
});
