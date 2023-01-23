export interface ListProps {
  id: number;
  desktop_image: any;
  mobile_image: any;
  title: string;
  link: string;
}

const List = [
  {
    id: 1,
    desktop_image: require("../../../images/desktop/image-deep-earth.jpg"),
    mobile_image: require("../../../images/mobile/image-deep-earth.jpg"),
    title: "Deep Earth",
    link: "https://google.com",
  },
  {
    id: 2,
    desktop_image: require("../../../images/desktop/image-night-arcade.jpg"),
    mobile_image: require("../../../images/mobile/image-night-arcade.jpg"),
    title: "Night Arcade",
    link: "https://google.com",
  },
  {
    id: 3,
    desktop_image: require("../../../images/desktop/image-soccer-team.jpg"),
    mobile_image: require("../../../images/mobile/image-soccer-team.jpg"),
    title: "Soccer Team VR",
    link: "https://google.com",
  },
  {
    id: 4,
    desktop_image: require("../../../images/desktop/image-grid.jpg"),
    mobile_image: require("../../../images/mobile/image-grid.jpg"),
    title: "The Grid",
    link: "https://google.com",
  },
  {
    id: 5,
    desktop_image: require("../../../images/desktop/image-from-above.jpg"),
    mobile_image: require("../../../images/mobile/image-from-above.jpg"),
    title: "From Up Above VR",
    link: "https://google.com",
  },
  {
    id: 6,
    desktop_image: require("../../../images/desktop/image-pocket-borealis.jpg"),
    mobile_image: require("../../../images/mobile/image-pocket-borealis.jpg"),
    title: "Pocket Borealis",
    link: "https://google.com",
  },
  {
    id: 7,
    desktop_image: require("../../../images/desktop/image-curiosity.jpg"),
    mobile_image: require("../../../images/mobile/image-curiosity.jpg"),
    title: "The Curiosity",
    link: "https://google.com",
  },
  {
    id: 8,
    desktop_image: require("../../../images/desktop/image-fisheye.jpg"),
    mobile_image: require("../../../images/mobile/image-fisheye.jpg"),
    title: "Make It Fisheye",
    link: "https://google.com",
  },
];

export default List;
