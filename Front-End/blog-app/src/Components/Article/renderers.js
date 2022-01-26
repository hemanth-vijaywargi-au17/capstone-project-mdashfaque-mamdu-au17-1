// Customizing how to render each block

const Warning = ({ data, className = "" }) => {
  return (
    <div>
      <div>{data.title}</div>
      <div>{data.message}</div>
    </div>
  );
};

const CheckList = ({ data, className = "" }) => {
  return (
    <>
      {data?.items.map((item, i) => (
        <p key={i} className={className}>
          <label>
            <input type="checkbox" checked={item.checked} readOnly />
            <span>{item.text}</span>
          </label>
        </p>
      ))}
    </>
  );
};

const Delimiter = ({ data, className = "" }) => {
  return <div>---</div>;
};

const Code = ({ data, className = "" }) => {
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(data.code);
  };
  return (
    <div className="relative">
      <pre className="bg-black text-white p-4 text-base overflow-x-scroll rounded pr-14">
        {data.code}
      </pre>
      <div className="absolute top-0 right-0 m-2 group text-center flex items-center gap-2">
        <div className="hidden group-hover:block bg-gray-600 text-sm rounded p-1">
          Copy
        </div>
        <svg
          className="w-8 h-8  bg-gray-600 hover:bg-gray-500 p-1 rounded cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={copyToClipboard}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

const Image = ({ data: { url }, className = "" }) => {
  return (
    <div className="w-full flex justify-center">
      <img src={url} alt="" className="max-w-full w-11/12" />
    </div>
  );
};
const renderers = {
  warning: Warning,
  checklist: CheckList,
  delimiter: Delimiter,
  code: Code,
  image: Image,
};

export default renderers;

// {
//   header: Header,
//   image: ImageUpload,
//   list: List,
//   table: Table,
//   warning: Warning,
//   quote: Quote,
//   checklist: CheckList,
//   delimiter: Delimiter,
//   embed: Embed,
//   marker: Marker,
//   inlineCode: InlineCode,
//   code: Code,
// }
