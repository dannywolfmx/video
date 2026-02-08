// Video player functionality
document.addEventListener('DOMContentLoaded', function () {
   const videoPlayer = document.getElementById('videoPlayer');

   if (videoPlayer) {
      // Guardar progreso del video en localStorage
      const videoId = window.location.pathname;

      // Restaurar posición guardada
      const savedTime = localStorage.getItem('video-time-' + videoId);
      if (savedTime) {
         videoPlayer.currentTime = parseFloat(savedTime);
      }

      // Guardar progreso cada 5 segundos
      videoPlayer.addEventListener('timeupdate', function () {
         if (!videoPlayer.paused) {
            localStorage.setItem('video-time-' + videoId, videoPlayer.currentTime);
         }
      });

      // Limpiar progreso cuando el video termina
      videoPlayer.addEventListener('ended', function () {
         localStorage.removeItem('video-time-' + videoId);
      });

      // Control de teclado
      document.addEventListener('keydown', function (e) {
         if (!videoPlayer) return;

         switch (e.key) {
            case ' ':
               e.preventDefault();
               if (videoPlayer.paused) {
                  videoPlayer.play();
               } else {
                  videoPlayer.pause();
               }
               break;
            case 'ArrowRight':
               e.preventDefault();
               videoPlayer.currentTime += 10;
               break;
            case 'ArrowLeft':
               e.preventDefault();
               videoPlayer.currentTime -= 10;
               break;
            case 'f':
               e.preventDefault();
               if (videoPlayer.requestFullscreen) {
                  videoPlayer.requestFullscreen();
               } else if (videoPlayer.webkitRequestFullscreen) {
                  videoPlayer.webkitRequestFullscreen();
               }
               break;
            case 'm':
               e.preventDefault();
               videoPlayer.muted = !videoPlayer.muted;
               break;
         }
      });

      // Mostrar controles al mover el mouse
      let controlsTimeout;
      const playerWrapper = videoPlayer.closest('.player-wrapper');

      if (playerWrapper) {
         playerWrapper.addEventListener('mousemove', function () {
            videoPlayer.setAttribute('controls', 'controls');
            clearTimeout(controlsTimeout);

            controlsTimeout = setTimeout(function () {
               if (!videoPlayer.paused) {
                  videoPlayer.removeAttribute('controls');
               }
            }, 3000);
         });
      }
   }

   // Resaltar video activo en el sidebar
   const currentUrl = window.location.pathname;
   const sidebarLinks = document.querySelectorAll('.sidebar-video-item a');

   sidebarLinks.forEach(function (link) {
      if (link.getAttribute('href') === currentUrl) {
         link.parentElement.classList.add('active');
      }
   });

   // Smooth scroll para navegación
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
            target.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            });
         }
      });
   });
});

// Funciones de utilidad
function formatTime(seconds) {
   const minutes = Math.floor(seconds / 60);
   const secs = Math.floor(seconds % 60);
   return minutes + ':' + (secs < 10 ? '0' : '') + secs;
}

function shareVideo() {
   if (navigator.share) {
      navigator.share({
         title: document.title,
         url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
   } else {
      // Copiar URL al portapapeles
      navigator.clipboard.writeText(window.location.href).then(() => {
         alert('URL copiada al portapapeles');
      });
   }
}
