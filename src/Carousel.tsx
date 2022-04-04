import { Component, MouseEvent, ReactNode } from "react";

interface IProps {
  images: string[];
}

export default class Carousel extends Component<IProps> {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleEventClick = (event: MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
  };

  render(): ReactNode {
    const { active } = this.state;
    const { images } = this.props;
    console.log(images);
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleEventClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
