<script type="text/javascript">
  export let position;

  let userWidgetOpen = false;

  // This global function definition is required for apline to access
  window.toggleUserWidget = (toggle, open = true) => {
    if (toggle === 'toggle') {
      userWidgetOpen = !userWidgetOpen;
    } else {
      userWidgetOpen = open;
    }
  };
</script>

<style type="text/css">
  svg {
    display: initial;
  }

  .nav-direction {
    border: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .nav-direction-icon {
    opacity: 1;
    height: 22px;
    width: 22px;
  }

  .top-nav-inner {
    height: 60px;
  }
  .user-widget {
    border-radius: 23px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    color: #fff;
    padding: 2px;
    line-height: 13px;
    letter-spacing: 0.03em;
  }
  .user-widget.active {
    @apply bg-activeGray;
  }

  button figure {
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 28px;
    height: 28px;
  }
  .icon-container {
    @apply bg-lightGray;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .user-username {
    font-size: 12px;
    margin-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 110px;
    pointer-events: none;
  }
  .down-arrow {
    margin: 0 10px 0 10px;
  }
  .user-widget-menu {
    @apply bg-activeGray;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7);
    margin-top: 8px;
    width: 152px;
  }
  .user-widget-container {
    right: -7px;
  }
  .menu-item-with-border {
    border-bottom: 1px solid #404040;
  }
  .flip-arrow {
    transform: rotate(180deg);
    transform-origin: center;
  }
</style>

<div class="relative z-10 flex-shrink-0 flex h-16 bg-darkgray">
  <div
    class="flex-1 px-4 md:px-8 flex justify-between items-center top-nav-inner
    bg-opaqueBlack"
    class:bg-opaqueBlack={position > 50}>
    <div class="flex-1 flex">
      <div class="w-full flex md:ml-0">
        <div class="flex">
          <button
            type="button"
            title="Go Back"
            class="nav-direction mr-4 focus:outline-none">
            <svg viewBox="0 0 24 24" class="nav-direction-icon">
              <path
                fill="currentColor"
                d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555
                8.16" />
            </svg>
          </button>
          <button
            type="button"
            title="Go Forward"
            class="nav-direction focus:outline-none">
            <svg viewBox="0 0 24 24" class="nav-direction-icon">
              <path
                fill="currentColor"
                d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="mr-4 flex">
      <div
        x-on:click.away="open = false; toggleUserWidget('',false)"
        class="ml-3 relative"
        x-data={'{open: false}'}>
        <div>
          <button
            on:click={() => window.toggleUserWidget('toggle')}
            x-on:click="open = !open"
            class="user-widget bg-opaqueBlack hover:bg-activeGray transition
            ease-out duration-100 focus:outline-none"
            class:active={userWidgetOpen}>
            <figure title="user">
              <div class="icon-container">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607
                    11.757 11.521C11.742 11.435 11.737 11.267 11.869
                    11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5
                    6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761
                    1.48601C11.64 0.435011 10.173 -0.0879888 8.636
                    0.0110112C5.756 0.198011 3.501 2.68401 3.501
                    5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82
                    9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243
                    11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786
                    13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885
                    1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152
                    12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891
                    10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499
                    6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699
                    1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994
                    3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201
                    13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803
                    10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513
                    11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884
                    17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692
                    15.216 13.717Z" />
                </svg>
              </div>
            </figure>
            <span class="user-username">5859237330</span>
            <span class="down-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.5px"
                height="9.5px"
                fill="#fff"
                viewBox="0 0 292.362 292.362"
                style="enable-background:new 0 0 292.362 292.362;"
                xml:space="preserve">
                <path
                  class:flip-arrow={userWidgetOpen}
                  d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                  C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                  s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" />

              </svg>
            </span>
          </button>
        </div>
        <div
          x-show="open"
          class="origin-top-right absolute tracking-wide user-widget-container
          w-40 rounded-sm shadow-lg">
          <div
            class="user-widget-menu text-textGray rounded-sm bg-white shadow-xs">
            <a
              href="/"
              class="block px-4 py-2 text-sm hover:text-white hover:bg-lightGray">
              Account
            </a>
            <a
              href="/"
              class="block px-4 py-2 text-sm hover:text-white hover:bg-lightGray
              menu-item-with-border">
              Profile
            </a>
            <a
              href="/"
              class="block px-4 py-2 text-sm hover:text-white hover:bg-lightGray">
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
