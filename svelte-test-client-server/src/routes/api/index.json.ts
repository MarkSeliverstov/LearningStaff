// const generateUsers = () =>
//   [...Array(50)].map(() => {
//     const lastName = "Smith";
//     return {
//       avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
//       lastName,
//     };
//   });

// export async function get() {
//   return {
//     body: generateUsers(),
//   };
// }

import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/photos'
	)
	const photos = await response.json()

	return {
		body: {
			photos: photos.slice(0, 100)
		}
	}
}
