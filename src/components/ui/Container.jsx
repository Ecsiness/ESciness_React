const Container = ({ children }) => {
  return (
    <div className="max-w-4xl lg:max-w-6xl 2xl:max-w-7xl mx-auto lg:pl-6 bg-transparent">
      {children}
    </div>
  );
};

export default Container;
