import display from "../assets/display.png";
import performance from "../assets/ai.png";
import button from "../assets/button.png";
import charging from "../assets/charging.png";
import battery from "../assets/battery.png";

interface Feature {
  id: number; 
  title: string;
  heading: string;
  description: string[];
  image: string;
}


export const features: Feature[] = [
  {
    id: 1,
    title: "Display Technology",
    heading: "Super Retina XDR OLED + Dynamic Island",
    description: [
      "6.1-inch all-screen OLED (2556 × 1179 px, 460 ppi)",
      "Dynamic Island, HDR, True Tone, P3 wide color, Haptic Touch",
      "Up to 1600 nits (HDR), 2000 nits peak brightness (outdoor)",
      "IP68 water/dust resistance with rugged Ceramic Shield front" 
    ],
    image: display
  },
  {
    id: 2,
    title: "Performance & AI",
    heading: "A18 Chip & Apple Intelligence",
    description: [
      "A18 chip (6-core CPU: 2 performance + 4 efficiency) with 5-core GPU",
      "16-core Neural Engine delivering 35 TOPS, supports Apple Intelligence",
      "8 GB RAM across all models for seamless multitasking",
      "Built on 3 nm process with enhanced thermal design and performance" 
    ],
    image: performance
  },
  {
    id: 3,
    title: "Buttons & Controls",
    heading: "Action Button & Camera Control",
    description: [
      "Customizable Action Button (flashlight, camera, shortcuts)",
      "Camera Control button (quick open, press for zoom/menu/video)",
      "First time on non-Pro model, physically located below the side button",
      "Improved user experience—custom control at your fingertips"
    ],
    image: button
  },
  {
    id: 4,
    title: "Camera System",
    heading: "48 MP Dual-Lens & Spatial Capabilities",
    description: [
      "Vertical dual-lens: 48 MP wide + 12 MP ultrawide (spatial video)",
      "Supports Photographic Styles, Smart HDR 5, Photonic Engine",
      "Spatial video and audio recording, visual intelligence insights",
      "Enhanced photography from low-light to detailed textures"
    ],
    image: charging
  },
  {
    id: 5,
    title: "Charging & Battery",
    heading: "Faster Charging & Lasting Battery",
    description: [
      "Qi2 standard unlocked via iOS 26—supports up to 25 W wireless charging",
      "USB-C port enables up to 45 W wired charging, powers accessories",
      "Improved battery life thanks to efficient A18 and thermal design",
      "50 % charge in ~30 minutes with compatible chargers"
    ],
    image: battery
  }
];
