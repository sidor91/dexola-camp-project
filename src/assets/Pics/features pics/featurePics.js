import pic1 from "./Pic1.jpg";
import pic1_2x from "./Pic1_2x.jpg";
import pic2 from "./Pic2.jpg";
import pic2_2x from "./Pic2_2x.jpg";
import pic3 from "./Pic3.jpg";
import pic3_2x from "./Pic3_2x.jpg";

const nonRetinaPics = [pic1, pic2, pic3];
const retinaPics = [pic1_2x, pic2_2x, pic3_2x];

let images;

const { devicePixelRatio } = window;

if (devicePixelRatio === 1) {
	images = nonRetinaPics;
} else {
	images = retinaPics;
}

export default images;