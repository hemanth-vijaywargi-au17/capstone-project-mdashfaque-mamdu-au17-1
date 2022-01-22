// React
import { useRef, useCallback } from "react";
// React EditorJS
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";
// Redux
import { useDispatch } from "react-redux";
import { userActions } from "../../Redux/Slices/user";

const ReactEditorJS = createReactEditorJS();

function ReactEditor() {
  const editorCore = useRef(null);
  const title = useRef();
  const file = useRef();
  const summary = useRef();
  const category = useRef();
  const dispatch = useDispatch();

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async (e) => {
    e.preventDefault();
    const articleBody = await editorCore.current.save();
    const articleObj = {
      file: file.current.files[0],
      title: title.current.value,
      summary: summary.current.value,
      articleBody,
      category: category.current.value,
    };
    dispatch(userActions.postArticle(articleObj));
  }, []);

  return (
    <form className="w-full flex justify-center" onSubmit={handleSave}>
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
            required
          />

          <div className="grid place-content-center">
            <label htmlFor="">Article Thumbnail</label>
          </div>

          <input
            type="file"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={file}
            required
          />

          <div className="grid place-content-center">
            <label htmlFor="">Summary</label>
          </div>
          <input
            type="text"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={summary}
            required
          />

          <div className="grid place-content-center">
            <label htmlFor="">Category (Comma seperated)</label>
          </div>
          <input
            type="text"
            className="col-span-2 lg:col-span-3 p-2 text-base"
            ref={category}
            required
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
          <button type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReactEditor;
