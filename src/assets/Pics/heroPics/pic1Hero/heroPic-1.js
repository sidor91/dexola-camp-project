import property1defaultPic from "./Pic1.jpg";
import property1defaultPic2x from "./Pic1_2x.jpg";
import property1variant2Pic from "./Pic2.jpg";
import property1variant2Pic2x from "./Pic2_2x.jpg";
import property1variant3Pic from "./Pic3.jpg";
import property1variant3Pic2x from "./Pic3_2x.jpg";
import property1variant4Pic from "./Pic4.jpg";
import property1variant4Pic2x from "./Pic4_2x.jpg";
import property1variant5Pic from "./Pic5.jpg";
import property1variant5Pic2x from "./Pic5_2x.jpg";

import property1defaultPic_tablet from "./Pic1_tablet.jpg";
import property1defaultPic2x_tablet from "./Pic1_tablet_2x.jpg";
import property1variant2Pic_tablet from "./Pic2_tablet.jpg";
import property1variant2Pic2x_tablet from "./Pic2_tablet_2x.jpg";
import property1variant3Pic_tablet from "./Pic3_tablet.jpg";
import property1variant3Pic2x_tablet from "./Pic3_tablet_2x.jpg";
import property1variant4Pic_tablet from "./Pic4_tablet.jpg";
import property1variant4Pic2x_tablet from "./Pic4_tablet_2x.jpg";
import property1variant5Pic_tablet from "./Pic5_tablet.jpg";
import property1variant5Pic2x_tablet from "./Pic5_tablet_2x.jpg";


 const heroProperty1 = [
	property1defaultPic,
	property1variant2Pic,
	property1variant3Pic,
	property1variant4Pic,
	property1variant5Pic,
 ];

 const heroProperty1_tablet = [
		property1defaultPic_tablet,
		property1variant2Pic_tablet,
		property1variant3Pic_tablet,
		property1variant4Pic_tablet,
		property1variant5Pic_tablet,
 ];

 const heroProperty1_2x = [
	property1defaultPic2x,
	property1variant2Pic2x,
	property1variant3Pic2x,
	property1variant4Pic2x,
	property1variant5Pic2x,
 ];

 const heroProperty1_2x_tablet = [
		property1defaultPic2x_tablet,
		property1variant2Pic2x_tablet,
		property1variant3Pic2x_tablet,
		property1variant4Pic2x_tablet,
		property1variant5Pic2x_tablet,
 ];

let images;

const { devicePixelRatio, innerWidth } = window;

if (devicePixelRatio === 1 && 744 <= innerWidth && innerWidth <= 1439) {
	images = heroProperty1_tablet;
} else if (devicePixelRatio === 1) {
	images = heroProperty1;
} else if (devicePixelRatio !== 1 && 744 <= innerWidth && innerWidth <= 1439) {
	images = heroProperty1_2x_tablet;
} else {
	images = heroProperty1_2x;
}

export default images;