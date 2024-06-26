export default function Container(props) {
  const { children } = props;

  return <div className="max-w-6xl mx-auto p-5">
    {children}
  </div>
}