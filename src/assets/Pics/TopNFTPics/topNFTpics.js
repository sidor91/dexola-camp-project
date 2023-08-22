import pic1 from "./pic1.png";
import pic1_2x from "./pic1_2x.png";
import pic2 from "./pic2.png";
import pic2_2x from "./pic2_2x.png";
import pic3 from "./pic3.png";
import pic3_2x from "./pic3_2x.png";
import pic4 from "./pic4.png";
import pic4_2x from "./pic4_2x.png";
import pic5 from "./pic5.png";
import pic5_2x from "./pic5_2x.png";


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