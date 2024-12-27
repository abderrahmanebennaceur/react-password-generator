const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 w-full bg-deep-blue text-soft-white py-4 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
        &#169; {currentYear} Password Generator | Developed by{' '}
          <a
            href="https://github.com/abderrahmanebennaceur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bright-yellow"
          >
            Abderrahmane BENNACEUR
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;