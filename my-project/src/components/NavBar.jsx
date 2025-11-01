function NavBar() {
    return(
        <nav className="fixed top-0 w-full bg-linear-to-r from-blue-910 to-blue-500 to-white-800 **:backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8"> 
              <a href="#informacoes"className="hover:text-gray-200 text-white text-sm">Sobre</a>
              <a href="#quemsomos"className="hover:text-gray-200 text-white text-sm">Quem somos</a>
              <a href="#cases"className="hover:text-gray-200 text-white text-sm">Cases de sucesso</a>
              <a className="hover:text-gray-200 text-white text-sm">Suporte</a>

            </div>
        </nav>
    )
}

export default NavBar