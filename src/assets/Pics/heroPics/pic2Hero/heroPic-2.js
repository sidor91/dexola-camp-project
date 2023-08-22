import property2defaultPic from "./Pic1.jpg";
import property2defaultPic2x from "./Pic1_2x.jpg";
import property2variant2Pic from "./Pic2.jpg";
import property2variant2Pic2x from "./Pic2_2x.jpg";
import property2variant3Pic from "./Pic3.jpg";
import property2variant3Pic2x from "./Pic3_2x.jpg";
import property2variant4Pic from "./Pic4.jpg";
import property2variant4Pic2x from "./Pic4_2x.jpg";
import property2variant5Pic from "./Pic5.jpg";
import property2variant5Pic2x from "./Pic5_2x.jpg";


import property2defaultPic_tablet from "./Pic1_tablet.jpg";
import property2defaultPic2x_tablet from "./Pic1_tablet_2x.jpg";
import property2variant2Pic_tablet from "./Pic2_tablet.jpg";
import property2variant2Pic2x_tablet from "./Pic2_tablet_2x.jpg";
import property2variant3Pic_tablet from "./Pic3_tablet.jpg";
import property2variant3Pic2x_tablet from "./Pic3_tablet_2x.jpg";
import property2variant4Pic_tablet from "./Pic4_tablet.jpg";
import property2variant4Pic2x_tablet from "./Pic4_tablet_2x.jpg";
import property2variant5Pic_tablet from "./Pic5_tablet.jpg";
import property2variant5Pic2x_tablet from "./Pic5_tablet_2x.jpg";

export const heroProperty2 = [
	property2defaultPic,
	property2variant2Pic,
	property2variant3Pic,
	property2variant4Pic,
	property2variant5Pic,
];

const heroProperty2_tablet = [
	property2defaultPic_tablet,
	property2variant2Pic_tablet,
	property2variant3Pic_tablet,
	property2variant4Pic_tablet,
	property2variant5Pic_tablet,
];

export const heroProperty2_2x = [
	property2defaultPic2x,
	property2variant2Pic2x,
	property2variant3Pic2x,
	property2variant4Pic2x,
	property2variant5Pic2x,
];

const heroProperty2_2x_tablet = [
	property2defaultPic2x_tablet,
	property2variant2Pic2x_tablet,
	property2variant3Pic2x_tablet,
	property2variant4Pic2x_tablet,
	property2variant5Pic2x_tablet,
];

let images;

const { devicePixelRatio, innerWidth } = window;

if (devicePixelRatio === 1 && 744 <= innerWidth && innerWidth <= 1439) {
	images = heroProperty2_tablet;
} else if (devicePixelRatio === 1) {
	images = heroProperty2;
} else if (devicePixelRatio !== 1 && 744 <= innerWidth && innerWidth <= 1439) {
	images = heroProperty2_2x_tablet;
} else {
	images = heroProperty2_2x;
}

export default images;
