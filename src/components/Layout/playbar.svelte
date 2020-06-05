<script type="text/javascript">
  import HeartIcon from 'shared/icons/heartIcon';
  import api from 'artists.json';

  let isActive = false;
</script>

<style type="text/css">
  .now-playing-container {
    border-top: 1px solid #000;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .now-playing-bar {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 90px;
    padding: 0 16px;
  }
  .now-playing-left {
    width: 30%;
    min-width: 180px;
  }
  .now-playing-center {
    width: 40%;
    max-width: 722px;
  }
  .now-playing-center svg,
  .now-playing-right svg {
    fill: #b3b3b3;
  }
  .now-playing-right {
    width: 30%;
    min-width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .now-playing-right button {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    margin: 7px;
  }

  .now-playing-right .volume {
    display: flex;
    align-items: center;
    width: 136px;
  }

  .now-playing {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .cover-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 56px;
    height: 56px;
  }

  .current-playing,
  .title,
  .artist {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1px;
    margin-right: -1px;
    font-family: 'Circular Spotify Tx T Light', Helvetica, sans-serif;
  }
  .title {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.015em;
    color: #fff;
    text-align: left;
  }
  .artist {
    @apply text-textGray;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.015em;
    text-align: left;
  }
  .loved button {
    width: 14px;
    min-width: 14px;
  }
  .control-button {
    position: relative;
    background-color: transparent;
    border: none;
  }

  .control-button:hover svg {
    fill: #fff;
  }

  .player-controls {
    display: flex;
    -webkit-box-direction: normal;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .player-controls .buttons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    width: 224px;
  }
  .play-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
  }
  .play-button::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 1px solid #ffffffa1;
  }
  .play-button:hover::after {
    border-color: #fff;
  }
  .play-button svg {
    margin-left: 2px;
  }
  .playback-bar {
    height: 16px;
  }
  .progress-time {
    @apply text-textGray;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.015em;
    min-width: 40px;
    text-align: center;
  }
  .progress-bar {
    height: 14px;
    width: 100%;
    position: relative;
  }
  .progress-bar-bg {
    background-color: #535353;
    border-radius: 2px;
    display: flex;
    height: 4px;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .progress-bar-fg-wrapper {
    overflow: hidden;
    width: 100%;
    height: 4px;
    border-radius: 2px;
  }
  .progress-bar-fg {
    @apply bg-textGray;
    border-radius: 2px;
    height: 4px;
    width: 100%;
    transform: translateX(-50%); /* Change this number to move bar*/
  }
</style>

<section
  class="z-10 fixed absolute bottom-0 bg-activeGray text-white w-full
  now-playing-container">
  <div class="now-playing-bar">
    <div class="now-playing-left">
      <div class="now-playing">
        <div class="cover-container mr-4">
          <img src={api.data[0].albums[0].cover} alt="" />
        </div>
        <div class="current-playing">
          <div class="title">
            <a href="/">The Box</a>
          </div>
          <div class="artist">
            <a href="/">Roddy Ricch</a>
          </div>
        </div>
        <div class="loved flex justify-center ml-2">
          <button
            class="control-button focus:outline-none"
            on:click={() => (isActive = !isActive)}>
            <HeartIcon active={isActive} />
          </button>
        </div>
      </div>
    </div>
    <div class="now-playing-center">
      <div class="player-controls">
        <div class="buttons">
          <div>
            <button class="control-button focus:outline-none">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005">
                <path
                  d="M501.333,352.003h-32c-133.397,0-173.803-64.277-216.597-132.288C207.893,148.397,161.515,74.669,10.667,74.669
                  C4.779,74.669,0,79.448,0,85.336s4.779,10.667,10.667,10.667c139.072,0,180.331,65.6,224,135.061
                  c43.989,69.931,89.472,142.272,234.667,142.272h32c5.888,0,10.667-4.779,10.667-10.667
                  C512,356.781,507.221,352.003,501.333,352.003z" />

                <path
                  d="M501.333,138.669h-32c-83.328,0-140.843,22.933-186.389,74.389c-3.925,4.395-3.499,11.136,0.917,15.04
                  c2.027,1.813,4.544,2.688,7.061,2.688c2.923,0,5.867-1.195,7.979-3.605c27.733-31.253,72.128-67.179,170.432-67.179h32
                  c5.888,0,10.667-4.779,10.667-10.667S507.221,138.669,501.333,138.669z" />

                <path
                  d="M244.267,285.656c-4.885-3.093-11.52-1.621-14.699,3.371l-3.051,4.821c-3.2,4.949-1.728,11.541,3.221,14.72
                  c1.771,1.152,3.776,1.685,5.76,1.685c3.499,0,6.933-1.728,8.981-4.928l3.157-4.971
                  C250.773,295.384,249.259,288.792,244.267,285.656z" />

                <path
                  d="M241.216,290.584c-4.885-3.115-11.52-1.685-14.72,3.264c-42.539,66.837-88.171,122.155-215.829,122.155
                  C4.779,416.003,0,420.781,0,426.669c0,5.888,4.779,10.667,10.667,10.667c138.304,0,189.525-62.464,233.813-132.032
                  C247.659,300.333,246.187,293.741,241.216,290.584z" />

                <path
                  d="M508.864,355.16l-64-64c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l56.448,56.448l-56.448,56.448
                  c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.093l64-64
                  C513.024,366.083,513.024,359.32,508.864,355.16z" />

                <path
                  d="M508.885,141.805l-64-64c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l56.448,56.448l-56.469,56.469
                  c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.552-3.115l64-64
                  C513.045,152.728,513.045,145.965,508.885,141.805z" />

              </svg>
            </button>
          </div>
          <div>
            <button class="control-button focus:outline-none">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 493.52 493.52">
                <path
                  d="M447.126,0.236c-10.056,0-20.884,4.12-32.148,11.884L140.882,200.952c-17.644,12.152-27.252,28.504-27.252,46.06
                  c-0.004,17.56,9.78,33.924,27.428,46.076L415.39,481.784c11.284,7.768,22.568,11.736,32.604,11.736h0.012
                  c10.76,0,18.916-4.404,25.276-12.972c6.268-8.46,8.688-20.476,8.688-35.012V48.508C481.974,18.74,469.186,0.236,447.126,0.236z" />

                <path
                  d="M53.106,0.036L39.894,0C25.018,0,11.55,12.112,11.55,26.996v439.42c0,14.884,13.024,27.1,27.908,27.1h0.456l12.948-0.072
                  c14.88,0,28.092-12.164,28.092-27.048V27.028C80.958,12.144,67.97,0.036,53.106,0.036z" />

              </svg>
            </button>
          </div>
          <div>
            <button class="control-button play-button focus:outline-none">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 494.148 494.148">
                <path
                  d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
                  c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
                  C432.632,229.572,422.964,213.288,405.284,201.188z" />

              </svg>
            </button>
          </div>
          <div>
            <button class="control-button focus:outline-none">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 493.796 493.796">
                <path
                  d="M355.938,200.956L81.414,12.128c-11.28-7.776-23.012-11.88-33.056-11.88c-22.052,0-36.672,18.496-36.672,48.26v397.036
                  c0,14.54,4.228,26.688,10.496,35.144c6.364,8.572,16.32,13.108,27.076,13.108c10.04,0,21.308-4.112,32.584-11.876l274.276-188.828
                  c17.632-12.152,27.3-28.508,27.296-46.076C383.414,229.456,373.594,213.1,355.938,200.956z" />

                <path
                  d="M456.446,493.672l-0.293-0.004c-0.048,0-0.095,0.004-0.143,0.004H456.446z" />
                <path
                  d="M455.638,0L444.29,0.032c-14.86,0-27.724,12.112-27.724,26.992v439.368c0,14.896,12.652,27.124,27.532,27.124
                  l12.055,0.152c14.805-0.079,25.957-12.412,25.957-27.252V26.996C482.11,12.116,470.51,0,455.638,0z" />

              </svg>
            </button>
          </div>
          <div>
            <button class="control-button focus:outline-none">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 472.615 472.615">
                <path
                  d="M355.232,0l-13.525,13.525l65.821,65.821h-279.17c-52.894,0-95.924,43.031-95.924,95.919v59.633h19.128v-59.633
                  c0-42.343,34.452-76.79,76.796-76.79h279.17l-65.821,65.821l13.525,13.525l88.91-88.91L355.232,0z" />

                <path
                  d="M421.053,237.714v59.632c0,42.344-34.452,76.795-76.796,76.795H65.087l65.821-65.825l-13.525-13.525l-88.909,88.914
                  l88.909,88.91l13.525-13.525L65.087,393.27h279.17c52.895,0,95.924-43.031,95.924-95.924v-59.632H421.053z" />

              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="playback-bar flex justify-between">
        <div class="progress-time">1:58</div>
        <div class="progress-bar">
          <div class="progress-bar-bg">
            <div class="progress-bar-fg-wrapper">
              <div class="progress-bar-fg" />
            </div>
          </div>
        </div>
        <div class="progress-time">3:16</div>
      </div>
    </div>

    <div class="now-playing-right">
      <div class="queue flex">
        <button class="control-button focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40">
            <path
              d="M2,13V7a1,1,0,0,1,1.51-.86l5,3a1,1,0,0,1,0,1.72l-5,3A1,1,0,0,1,3,14a1,1,0,0,1-.49-.13A1,1,0,0,1,2,13ZM12,8H29a1,1,0,0,0,0-2H12a1,1,0,0,0,0,2Zm17,4H12a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Zm0,6H3a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Zm0,6H3a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Z" />
          </svg>
        </button>
      </div>
      <div class="device-connected">
        <button class="control-button focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
            <path
              d="M94.456,48.381c-0.333-0.171-0.736-0.141-1.04,0.079L77.377,60H68.33c-0.258,0-0.506,0.1-0.692,0.279
              c-0.689,0.661-1.241,1.227-1.56,1.988C66.026,62.389,66,62.521,66,62.653v12.966c0,0.133,0.026,0.264,0.078,0.386
              c0.335,0.8,0.975,1.471,1.802,1.888C68.02,77.963,68.174,78,68.33,78h9.041l16.036,11.805C93.582,89.934,93.791,90,94,90
              c0.154,0,0.309-0.036,0.451-0.107C94.788,89.722,95,89.377,95,89V49.271C95,48.896,94.79,48.553,94.456,48.381z
              M93,87.022
              L78.292,76.195C78.12,76.068,77.912,76,77.699,76h-9.107c-0.254-0.163-0.457-0.372-0.592-0.609V62.881
              c0.155-0.277,0.408-0.558,0.736-0.881h8.963c0.21,0,0.414-0.066,0.584-0.188L93,51.223V87.022z
              M63.773,82
              c-6.728-0.215-7.023-4.128-7.036-4.343l-0.63-6.741H63c0.553,0,1-0.448,1-1s-0.447-1-1-1H14.583c-0.534,0-1.115-0.466-1.583-1.259
              v-5.678h50c0.553,0,1-0.448,1-1s-0.447-1-1-1H13v-40.47c0.464-0.789,1.074-1.329,1.707-1.509h70.586
              c0.633,0.181,1.243,0.721,1.707,1.509V48c0,0.552,0.447,1,1,1s1-0.448,1-1V19.25c0-0.163-0.04-0.323-0.115-0.467
              c-0.782-1.482-1.936-2.462-3.247-2.758C85.565,16.008,85.491,16,85.417,16H14.583c-0.074,0-0.148,0.008-0.221,0.025
              c-1.312,0.297-2.465,1.276-3.247,2.758C11.04,18.927,11,19.087,11,19.25v48.667c0,0.163,0.04,0.323,0.115,0.467
              c0.851,1.61,2.114,2.533,3.468,2.533h29.311l-0.633,6.8c-0.002,0.041-0.215,4.066-7.033,4.284c-0.546,0.018-0.977,0.469-0.968,1.016
              c0.009,0.546,0.454,0.984,1,0.984h27.481c0.546,0,0.991-0.438,1-0.984C64.75,82.47,64.319,82.018,63.773,82z
              M42.851,82
              c2.287-1.8,2.406-4.157,2.405-4.157l0.646-6.926h8.196l0.644,6.867c0.001,0.038,0.12,2.412,2.412,4.217H42.851z" />
          </svg>
        </button>
      </div>
      <div class="volume">
        <button class="control-button focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 122.5">
            <path
              d="M63.9,32.5l-2.6,3c7.5,6.6,8.2,18,1.6,25.4c-0.5,0.6-1,1.1-1.6,1.6l2.6,3C73,57.5,74,43.7,66,34.6
              C65.3,33.9,64.6,33.2,63.9,32.5z" />
            <path
              d="M81,27.4c-0.6-0.7-1.3-1.4-2-2l-2.7,3c11.4,10.4,12.2,28,1.8,39.4c-0.6,0.6-1.2,1.2-1.8,1.8l2.7,3
              C92,60.7,92.9,40.4,81,27.4z" />
            <path
              d="M8.6,34.9v28.2H27l26.2,18.4v-65L27,34.9H8.6z
              M25.6,59.1h-13V38.9h13V59.1z
              M29.6,37.9l19.6-13.7v49.6L29.6,60.1V37.9z" />
          </svg>
        </button>
        <div class="progress-bar">
          <div class="progress-bar-bg">
            <div class="progress-bar-fg-wrapper">
              <div class="progress-bar-fg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
