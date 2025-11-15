import { checkHeading, removeHeadingStars } from "../helper";

const Answer = ({ ans, index, total, type }) => {
  const isHeading = checkHeading(ans);
  const headingText = isHeading ? removeHeadingStars(ans) : ans;

  return (
    <div>
      {(index === 0 && total > 1) || isHeading ? (
        <span className="pt-2 text-lg block dark:text-white text-zinc-700">
          {headingText}
        </span>
      ) : (
        <span className={type == "a" ? "pl-5" : "pl-1"}>{ans}</span>
      )}
    </div>
  );
};

export default Answer;
