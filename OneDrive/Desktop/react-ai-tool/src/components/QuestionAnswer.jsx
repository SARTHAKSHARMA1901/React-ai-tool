import Answer from "./Answers";

const QuestionAnswer = ({ i, index }) => {
  return (
    <>
      <div key={index} className={i.type === "q" ? "flex justify-end" : ""}>
        {i.type === "q" ? (
          <li
            className="text-right p-1 border-8 dark:bg-zinc-600 bg-gray-100 dark:border-zinc-600 border-gray-100 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit"
            key={`ques-${index}`}
          >
            <Answer
              ans={i?.text}
              index={index}
              total={i?.length}
              type={i.type}
            />
          </li>
        ) : (
          i.text.map((ansItem, ansIndex) => (
            <li className="text-left p-1 m-1" key={`ans-${ansIndex}`}>
              <Answer
                ans={ansItem}
                index={ansIndex}
                total={i?.text?.length}
                type={i.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default QuestionAnswer;
