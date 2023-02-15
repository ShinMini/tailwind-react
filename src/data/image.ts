import * as U from './utils'

export const picsumUrl = (width: number, height: number): string => `https://picsum.photos/${width}/${height}`;

	export const randomImage = (w: number = 1000, h: number = 800, delta: number = 200): string => picsumUrl(U.random(w - delta, w + delta), U.random(h - delta, h + delta));

export const randomAvatar = () => {
	const size = U.random(200, 400);
	return picsumUrl(size, size);
}
