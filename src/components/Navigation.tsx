function Navigation() {
  return (
    <div className="left-64  absolute w-full">
      <nav className="w-full h-20 flex bg-gray-50">
        <div className="flex gap-4 w-full">
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
