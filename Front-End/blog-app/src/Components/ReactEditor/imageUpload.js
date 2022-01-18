import Image from "@editorjs/image";

const ImageTool = {
  class: Image,
  config: {
    // Custom uploader
    uploader: {
      async uploadByFile(file) {
        let imageData = await cloudinaryUpload(file);
        return {
          success: 1,
          file: {
            url: imageData.secure_url,
          }, // file Obj
        }; // return Obj
      }, // UploadByFile
    }, // Uploader
  }, // Config
}; // ImageTool

async function cloudinaryUpload(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "DevBlog");
  data.append("cloud_name", "dxjl65i1m");
  const response = await fetch(
    "http://api.cloudinary.com/v1_1/dxjl65i1m/image/upload",
    { method: "post", body: data }
  );
  const JsonData = await response.json();
  return JsonData;
}

export default ImageTool;
