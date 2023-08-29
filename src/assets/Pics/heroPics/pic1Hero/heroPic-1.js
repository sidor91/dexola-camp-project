import property1defaultPic from "./Pic1.webp";
import property1defaultPic2x from "./Pic1_2x.webp";
import property1variant2Pic from "./Pic2.webp";
import property1variant2Pic2x from "./Pic2_2x.webp";
import property1variant3Pic from "./Pic3.webp";
import property1variant3Pic2x from "./Pic3_2x.webp";
import property1variant4Pic from "./Pic4.webp";
import property1variant4Pic2x from "./Pic4_2x.webp";
import property1variant5Pic from "./Pic5.webp";
import property1variant5Pic2x from "./Pic5_2x.webp";

const heroProperty1 = [
	property1defaultPic,
	property1variant2Pic,
	property1variant3Pic,
	property1variant4Pic,
	property1variant5Pic,
];

const heroProperty1_2x = [
	property1defaultPic2x,
	property1variant2Pic2x,
	property1variant3Pic2x,
	property1variant4Pic2x,
	property1variant5Pic2x,
];

let images1;

const { devicePixelRatio } = window;

if (devicePixelRatio === 1) {
	images1 = heroProperty1;
} else {
	images1 = heroProperty1_2x;
}

export default images1;
