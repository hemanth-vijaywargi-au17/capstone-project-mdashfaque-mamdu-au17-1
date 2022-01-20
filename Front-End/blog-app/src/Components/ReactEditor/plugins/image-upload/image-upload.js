import "./image-upload.css";
import cloudinaryUpload from "../../../../Utils/cloudinaryUpload";

export default class ImageUpload {
  constructor({ data, api }) {
    // Incoming data
    this.data = data;
    this.wrapper = document.createElement("div");
    this.wrapper.classList = "cdx-block image-upload-tool";
    this.file = undefined;
    this.caption = undefined;
  }

  // Toolbox UI is returned from this
  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  readURL = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });
  };
  
  // Block to be Rendered is returned from here
  render() {
    // Image Input
    const imageInput = document.createElement("input");
    imageInput.type = "file";
    // Caption Input
    const captionInput = document.createElement("input");
    captionInput.type = "text"
    captionInput.placeholder = "...image caption";

    this.wrapper.appendChild(imageInput);

    imageInput.addEventListener("change", async (e) => {
      const image = document.createElement("img");
      image.src = await this.readURL(e.target.files[0]);
      image.alt = captionInput.value;
      this.wrapper.innerHTML = "";
      this.wrapper.appendChild(image);
      this.wrapper.appendChild(captionInput);
      this.file = e.target.files[0];
    });

    captionInput.addEventListener("change", async (e) => {
      this.caption = e.target.value;
    });

    return this.wrapper;
  }

  // Saved data is returned here
  async save(blockContent) {
    if (this.file) {
      const { secure_url } = await cloudinaryUpload(this.file);
      return {
        url: secure_url,
        caption: this.caption,
      };
    }
    return {
      url: "",
      caption: "",
    };
  }


  // Saved data validation
  validate(savedData) {
    if (!savedData.url.trim()) {
      return false;
    }
    return true;
  }
}
