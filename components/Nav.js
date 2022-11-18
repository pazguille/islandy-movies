export default function Nav() {
  return (
    <nav class="nav border-b border-gray-800 sticky top-0 z-30 bg-light-blue-900">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between px-4 py-6">
        <ul class="flex flex-col md:flex-row items-center">
          <li>
            <a href="/" class="flex items-center font-bold text-xl">
              <span>islandy</span>
              &nbsp;
              <span class="text-lime-500">movies</span>
            </a>
          </li>
          <li class="md:ml-16 mt-3 md:mt-0">
            <a href="/" class="hover:text-gray-300">Movies</a>
          </li>
          <li class="md:ml-6 mt-3 md:mt-0">
            <a href="/tv" class="hover:text-gray-300">TV Shows</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
