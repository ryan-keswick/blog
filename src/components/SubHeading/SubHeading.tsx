interface SubHeadingProps {
  subHeading: string;
}

const SubHeading = ({ subHeading }: SubHeadingProps) => {
  return <h2 className="mt-5 mb-1 font-semibold text-2xl">{subHeading}</h2>;
};

export default SubHeading;
