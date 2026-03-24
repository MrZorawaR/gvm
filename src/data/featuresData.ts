
import collegeImg from "../assets/images/college-5757815_1280.jpg";
import partnershipImg from "../assets/images/partnership_image.png";

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    title: "Audio Visual",
    description:
      "In an era of technological advancement it is inevitable to impart quality education without teaching aids. Audio Visual Room is the place where students go through their lessons with the help of Visual Aids. By watching the things, along with the reading, the subject knowledge gets imprinted our minds.  Educational and entertainment movies are also shown there.",
    image: "/audio1.webp",
  },
  {
    title: "Salient Features",
    description:
      "To enable students to face the present competitive era and make them aware of various real-world scenarios, the school provides valuable guidance and counselling sessions conducted by experienced experts. These professionals assist students in making realistic educational and vocational choices according to their aptitude and interests.",
    image: collegeImg,
  },
  {
    title: "Computer Lab",
    description:
      "In this era of information technology , the school has its own grand computer lab equipped with 40 computers with Core 2 Duo Intel Processor, TFT Monitor . The computer lab is equipped with state of art projector and touch – screen control & command box.",
    image: "/computer.webp",
  },
  {
    title: "Science Lab",
    description:
      "To quench the desire of the students and make them familiar with latest researches in Science and Technology . the school is having separate Physics , Chemistry and Bio-Labs where the distinguished faculties train the students to cope with various experiments.",
    image: "/science.webp",
  },
  {
    title: "Library",
    description:
      "GVMPS has a spacious library well stocked with about 15,000 books with the number increasing with each passing year. The library has sections ranging from text books and reference books to fiction and general knowledge. There are a variety of books available for students of all levels on various subjects, literature, travel etc. the school subscribes newspapers and magazines to enable students to gain knowledge and develop interest in reading. The students are encouraged to read good books to widen their interests and extend their mental horizon.",
    image: "/library.webp",
  },
  {
    title: "Guidance Bureau",
    description:
      "To enable the students to face the present competitive era and make them aware of various scenario in present time, the school is providing valuable guidance-cum-counselling by the area experts , who assist them in marking realistic educational and vocational choices as per their aptitude. The school psychiatrist also helps the students to overcome their personal as well as social problems in a specialized manner.",
    image: partnershipImg,
  },
  {
    title: "Games & Sports",
    description:
      "The school has a well equipped games and sports section with facilities for various indoor and outdoor games. The students are encouraged to participate in various sports activities to promote physical fitness and team spirit.",
    image: "/sports.webp",
  },
  {
    title: "Music & Dance",
    description:
      "Music and dance room equipped with various musical instruments and dedicated teachers are striving to develop their students as nightingale and rocking stars.",
    image: "/dance.webp",
  },
  {
    title: "Arts & Craft",
    description:
      "The well qualified art teachers bring the students close to the life of colors through regular periods and a large variety of co —curricular activities.",
    image: "/art-craft.webp",
  },
];
