import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';


const files1 = await imagemin(['./img/*.{jpg,png}'], {
	destination: './src/assets/img',
	plugins: [
		imageminWebp({quality: 50})
	]
});



console.log(files1);
