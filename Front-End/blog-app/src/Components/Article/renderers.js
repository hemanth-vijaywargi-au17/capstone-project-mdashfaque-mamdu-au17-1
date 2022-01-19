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
            <input type="checkbox" checked={item.checked} readOnly/>
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

const renderers = {
  warning: Warning,
  checklist: CheckList,
  delimiter: Delimiter,
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
