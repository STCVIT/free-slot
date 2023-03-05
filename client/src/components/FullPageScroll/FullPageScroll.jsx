const FullPageScroll = ({ children }) => {
  return (
    <div className="lg:snap-start lg:h-[100vh] flex w-full items-center justify-center">
      {children}
    </div>
  );
};

export default FullPageScroll;
