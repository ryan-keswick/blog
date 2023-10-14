interface SubHeadingProps {
  subHeading: string;
}

const SubHeading = ({ subHeading }: SubHeadingProps) => {
  return <h2 className="mb-[-16px] font-semibold text-2xl">{subHeading}</h2>;
};

export default SubHeading;
