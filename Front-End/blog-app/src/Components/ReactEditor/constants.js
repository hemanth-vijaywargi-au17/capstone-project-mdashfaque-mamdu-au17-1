import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import CodeBox from "@bomdi/codebox";
import ImageUpload from "./plugins/image-upload/image-upload";
import Code from "@editorjs/code";

export const EDITOR_JS_TOOLS = {
  header: Header,
  image: ImageUpload,
  list: List,
  table: Table,
  warning: Warning,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  embed: Embed,
  marker: Marker,
  inlineCode: InlineCode,
  code: Code,
};
