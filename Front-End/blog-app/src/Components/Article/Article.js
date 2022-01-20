import Blocks from "editorjs-blocks-react-renderer";
import renderers from "./renderers";

const config = {
  image: {
    className: "",
  },
};

const Article = (props) => (
    <div className="md:w-2/3 mx-8 md:mx-0">
        <Blocks data={props.data} renderers={renderers} config={config} />
    </div>
  
);

export default Article;
