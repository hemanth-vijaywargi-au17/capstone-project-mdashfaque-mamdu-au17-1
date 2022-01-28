async function cloudinaryUpload(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "DevBlog");
  data.append("cloud_name", "dxjl65i1m");
  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dxjl65i1m/image/upload",
    { method: "post", body: data }
  );
  const JsonData = await response.json();
  return JsonData;
}

export default cloudinaryUpload;
