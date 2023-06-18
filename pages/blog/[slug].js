

export function getServerSideProps(props) {
  return {
    props: {
      slug: props.query.slug,
    },
  };
}