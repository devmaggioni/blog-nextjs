import { useRouter } from "next/router";
import PropTypes from "prop-types";
import HomePage from "../HomePage";

function CategorieFilter({ data }) {
  const router = useRouter();

  let filter = [];
  data.map((post) => {
    if (
      JSON.stringify(post.tags)
        .toLowerCase()
        .replace(/ /g, "-")
        .includes(router.query.id)
    )
      filter.push(post);
  });

  return (
    <>
      <HomePage data={filter} />
    </>
  );
}

CategorieFilter.propTypes = {
  data: PropTypes.any,
};

export default CategorieFilter;
