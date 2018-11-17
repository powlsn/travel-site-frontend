import $ from 'jquery';
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

var mobileMenu = new MobileMenu();
var onScrollFeatureItem = new RevealOnScroll($(".feature-item"), "80%");
var onScrollTestimonial = new RevealOnScroll($(".testimonial"), "60%");
