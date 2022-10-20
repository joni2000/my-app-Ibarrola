import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export const DemoCarousel = () => {
  /* catousel hecho con libreria coreui */
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_738352-MLA51753495896_092022-OO.webp"
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://http2.mlstatic.com/D_NQ_738352-MLA51753495896_092022-OO.webp" alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_738352-MLA51753495896_092022-OO.webp"
          alt="slide 3"
        />
      </CCarouselItem>
    </CCarousel>
  );
};
