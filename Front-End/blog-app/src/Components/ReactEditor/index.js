import { useRef, useCallback } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";
import { useSelector } from 'react-redux'
import cloudinaryUpload from "../../Hooks/cloudinaryUpload";

const ReactEditorJS = createReactEditorJS();

function ReactEditor() {
  const editorCore = useRef(null);
  const title = useRef();
  const file = useRef();
  const summary = useRef();
  const category = useRef();
  const { _id } = useSelector((state) => state.user);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    let url = "";
    if(file.current.files[0]){
      const {secure_url} = await cloudinaryUpload(file.current.files[0])
      url = secure_url
    }
    const postObj = {
      title: title.current.value,
      summary: summary.current.value,
      body: savedData,
      author: _id,
      likes: 0,
      mainImageURL: url,
      tags: category.current.value.split(" "),
    };
    console.log(postObj)
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="mx-8 md:mx-0 md:w-2/3 flex flex-col items-center gap-2">
        <h1>Write an Article</h1>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 w-fit text-center">
          <div className="grid place-content-center">
            <label htmlFor="">Title</label>
          </div>

          <input
            type="text"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={title}
          />

          <div className="grid place-content-center">
            <label htmlFor="">Article Thumbnail</label>
          </div>

          <input
            type="file"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={file}
          />

          <div className="grid place-content-center">
            <label htmlFor="">Summary</label>
          </div>
          <input
            type="text"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={summary}
          />

          <div className="grid place-content-center">
            <label htmlFor="">Category (space seperated)</label>
          </div>
          <input
            type="text"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={category}
          />
        </div>

        <div className="w-full">
          <ReactEditorJS
            tools={EDITOR_JS_TOOLS}
            defaultValue={{ blocks: [] }}
            onInitialize={handleInitialize}
          />
        </div>

        <div className="flex justify-center my-2">
          <button onClick={handleSave}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default ReactEditor;
