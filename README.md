# Series de Videos - Hugo Site

Plataforma de series de videos construida con Hugo.

## Estructura del Proyecto

```
video/
├── archetypes/          # Plantillas de contenido
├── content/videos/      # Contenido de videos organizados por series
├── layouts/             # Plantillas HTML
│   ├── _default/        # Plantillas base
│   ├── videos/          # Plantillas para videos
│   └── partials/        # Componentes reutilizables
├── static/              # Archivos estáticos
│   ├── css/            # Estilos
│   ├── js/             # JavaScript
│   └── videos/         # Videos locales (opcional)
├── data/               # Datos estructurados
└── config.toml         # Configuración de Hugo
```

## Requisitos

- Hugo Extended v0.100.0 o superior

## Instalación de Hugo

### Linux
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.121.1/hugo_extended_0.121.1_linux-amd64.tar.gz
tar -xzf hugo_extended_0.121.1_linux-amd64.tar.gz
sudo mv hugo /usr/local/bin/
```

### macOS
```bash
brew install hugo
```

### Windows
```bash
choco install hugo-extended
```

## Uso

### Iniciar servidor de desarrollo
```bash
hugo server -D
```

El sitio estará disponible en http://localhost:1313

### Construir para producción
```bash
hugo --minify
```

Los archivos generados estarán en la carpeta `public/`

## Crear Nuevo Contenido

### Crear una nueva serie
```bash
hugo new animes/nombre-serie/_index.md
```

### Crear un nuevo episodio
```bash
hugo new animes/nombre-serie/episodio-1.md
```

## Características

- ✅ Página principal con grid de series
- ✅ Páginas de serie con lista de videos
- ✅ Reproductor de video con sidebar de navegación
- ✅ Diseño responsive
- ✅ Organización por taxonomías (series, categorías, tags)
- ✅ Guardado automático de progreso de video
- ✅ Controles de teclado para el reproductor
- ✅ Videos de ejemplo de Google Cloud Storage

## Atajos de Teclado

- `Espacio`: Play/Pause
- `→`: Adelantar 10 segundos
- `←`: Retroceder 10 segundos
- `f`: Pantalla completa
- `m`: Silenciar/Activar audio

## Estructura de Contenido

Cada video debe incluir el siguiente front matter:

```yaml
---
title: "Título del Video"
date: 2026-02-08T10:00:00Z
draft: false
series: "nombre-de-la-serie"
episode: 1
videoId: "id-unico"
videoUrl: "https://ejemplo.com/video.mp4"
thumbnail: "/images/thumbnail.jpg"
duration: "10:30"
description: "Descripción breve del video"
tags: ["tag1", "tag2"]
---
```

## Personalización

- **Estilos**: Edita [static/css/styles.css](static/css/styles.css)
- **JavaScript**: Edita [static/js/video-player.js](static/js/video-player.js)
- **Configuración**: Edita [config.toml](config.toml)
- **Plantillas**: Edita archivos en [layouts/](layouts/)

## Próximos Pasos

1. Instalar Hugo en tu sistema
2. Ejecutar `hugo server -D` para ver el sitio
3. Personalizar las series y videos de ejemplo
4. Añadir tus propios videos
5. Personalizar estilos según tu marca

## Soporte

Para más información sobre Hugo, visita: https://gohugo.io/documentation/
