const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3
    },
    smallTablet: {
      breakpoint: { max: 700, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 330 },
      items: 1.4
    },
    smallMobile: {
      breakpoint: { min: 0, max: 330},
      items: 1
    }
  };

  export default responsive;