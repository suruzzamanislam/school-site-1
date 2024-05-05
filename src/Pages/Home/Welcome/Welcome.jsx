import signature from '../../../assets/welcom_sign.png';
const Welcome = () => {
  return (
    <div className="text-center py-5 md:py-9 flex flex-col justify-center items-center space-y-2 md:space-y-4 px-3">
      <h1 className="text-3xl md:text-5xl font-semibold">Welcome</h1>
      <p className="max-w-4xl md:text-xl md:leading-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry is standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <img src={signature} alt="" />
    </div>
  );
};

export default Welcome;
