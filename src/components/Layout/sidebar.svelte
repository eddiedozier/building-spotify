<script type="text/javascript">
  import HomeLink from 'shared/homeLink';
  import SearchLink from 'shared/searchLink';
  import YourLibraryLink from 'shared/yourLibraryLink';
  import LikedSongsLink from 'shared/likedSongsLink';
  import PlayListLink from 'shared/playListLink';
  import Logo from 'shared/logo';
</script>

<style type="text/css">
  .sidebar-bg {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .sidebar-container {
    padding-top: 23px;
  }
  .side-nav-container {
    width: 230px;
  }
  .playlist-text {
    @apply text-textGray;
    font-size: 11px;
    letter-spacing: 0.18em;
    font-family: 'Circular Spotify Tx T Light', Helvetica, sans-serif;
  }
  .playlist-container {
    margin-top: 25px;
  }
  .create-playlist-icon {
    display: flex;
    justify-content: center;
    background: #fff;
    width: 32px;
    height: 32px;
  }
  .nav-divider {
    margin: 6px 24px 7px 8px;
    border: none;
    height: 1px;
  }
  .create-playlist-text {
    letter-spacing: 0.03em;
    margin-top: 1px;
  }
  .playlists-scroll-list {
    @apply text-textGray;
    height: calc(100vh - 450px);
  }
  .playlist-children {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>

<div class="hidden md:flex md:flex-shrink-0">
  <div class="flex flex-col side-nav-container">
    <div class="flex items-center flex-shrink-0 px-6 pt-6 sidebar-bg">
      <Logo />
    </div>
    <div class="h-0 flex flex-1 flex-col sidebar-bg">
      <nav class="flex-1 sidebar-container">
        <ul class="px-2">
          <HomeLink isActive={location.pathname === '/'} />
          <SearchLink isActive={location.pathname === '/search'} />
          <YourLibraryLink isActive={location.pathname === '/library'} />
        </ul>

        <div class="playlist-container">
          <h2 class="playlist-text uppercase px-6">PlayLists</h2>
          <div class="playlist-children pl-4">
            <button
              type="button"
              on:click={() => console.log('Open Modal')}
              class="side-nav-btn group flex text-white items-center text-sm
              leading-5 font-medium hover:text-white focus:outline-none
              transition ease-in-out duration-200 mt-2 create-playlist-btn">
              <div class="create-playlist-icon mr-4">
                <svg
                  width="24px"
                  fill="#000"
                  shape-rendering="crispEdges"
                  viewBox="0 0 36 36">
                  <path
                    class="CreatePlaylistButton__svg-plus-path"
                    d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" />
                </svg>
              </div>
              <p class="create-playlist-text">Create Playlist</p>
            </button>
            <LikedSongsLink />
            <hr class="nav-divider bg-activeGray" />
            <ul class="playlists-scroll-list overflow-y-auto">
              <PlayListLink text="Calm" />
              <PlayListLink text="2000's" />
              <PlayListLink text="Chris Brown Radio" />
              <PlayListLink text="International" />
              <PlayListLink text="Discover Weekly" />
              <PlayListLink text="Different Music" />
              <PlayListLink text="Motivation" />
              <PlayListLink text="Old School RnB" />
              <PlayListLink text="Programming" />
              <PlayListLink text="Concentrater" />
              <PlayListLink text="Reggae Classics" />
              <PlayListLink text="Starrted" />
              <PlayListLink text="Deep Focus" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>
