import pic1 from "./pic1.webp";
import pic1_2x from "./pic1_2x.webp";
import pic2 from "./pic2.webp";
import pic2_2x from "./pic2_2x.webp";
import pic3 from "./pic3.webp";
import pic3_2x from "./pic3_2x.webp";
import pic4 from "./pic4.webp";
import pic4_2x from "./pic4_2x.webp";
import pic5 from "./pic5.webp";
import pic5_2x from "./pic5_2x.webp";


const nonRetinaPics = [pic1, pic2, pic3, pic4, pic5];
const retinaPics = [pic1_2x, pic2_2x, pic3_2x, pic4_2x, pic5_2x];

let images;

const { devicePixelRatio } = window;

if (devicePixelRatio === 1) {
	images = nonRetinaPics;
} else {
	images = retinaPics;
}

export default images;