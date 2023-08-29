import property2defaultPic from "./Pic1.webp";
import property2defaultPic2x from "./Pic1_2x.webp";
import property2variant2Pic from "./Pic2.webp";
import property2variant2Pic2x from "./Pic2_2x.webp";
import property2variant3Pic from "./Pic3.webp";
import property2variant3Pic2x from "./Pic3_2x.webp";
import property2variant4Pic from "./Pic4.webp";
import property2variant4Pic2x from "./Pic4_2x.webp";
import property2variant5Pic from "./Pic5.webp";
import property2variant5Pic2x from "./Pic5_2x.webp";

export const heroProperty2 = [
	property2defaultPic,
	property2variant2Pic,
	property2variant3Pic,
	property2variant4Pic,
	property2variant5Pic,
];

export const heroProperty2_2x = [
	property2defaultPic2x,
	property2variant2Pic2x,
	property2variant3Pic2x,
	property2variant4Pic2x,
	property2variant5Pic2x,
];

let images2;

const { devicePixelRatio } = window;

if (devicePixelRatio === 1) {
	images2 = heroProperty2;
} else {
	images2 = heroProperty2_2x;
}

export default images2;
