export default function Section(props) {
  const { children } = props;

  return (
    <section className="my-5">
      {children}
    </section>
  )
}