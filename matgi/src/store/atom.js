import { atom } from 'recoil';

export const inputState = atom({
	key: 'inputState',
	default: '검색어를 입력하세요.',
});

export const mapLatLng = atom({
	key: 'mapLatLng',
	default: {
		x: 37.2525704606099,
		y: 127.076905736938,
	},
});

export const masterID = atom({
	key: 'masterID',
	default: {
		id: 'master',
		password: '0000',
	},
});

export const wishList = atom({
	key: 'wishList',
	default: [],
});
