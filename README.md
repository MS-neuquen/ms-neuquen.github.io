# MaxService — Sitio web

Landing page estática (HTML5 + CSS3 + JavaScript vanilla, sin frameworks ni build tools) para
**MaxService**, servicio técnico integral de climatización, electricidad y mantenimiento en
Neuquén Capital y alrededores.

## Previsualizar en local

No hace falta instalar nada. Alcanza con:

- Doble click en `index.html` para abrirlo directamente en el navegador, o
- Si tenés Node instalado, parado en esta carpeta correr `npx serve` y abrir la URL que te muestre.

## Estructura

```
├── index.html
├── css/style.css
├── js/main.js
├── images/
└── .nojekyll
```

Todas las rutas a `css/`, `js/` e `images/` son relativas, así que el sitio funciona igual
publicado en la raíz de un dominio o en una subcarpeta.

## Imágenes: qué reemplazar por foto real

Todas las fotos de trabajos, del Taller Móvil y de Maxi son **placeholders** (fondo de color con
el texto "Foto real próximamente"). Para poner las fotos reales, reemplazá el archivo con el
mismo nombre dentro de `images/` — no hace falta tocar ningún código:

| Archivo a reemplazar                  | Dónde se usa                                    |
|----------------------------------------|--------------------------------------------------|
| `images/hero-bg.jpg`                   | Fondo del hero (portada) — foto de un trabajo real o del Taller Móvil |
| `images/maxi-trabajando.jpg`           | Sección "Nosotros" — foto real de Maxi trabajando |
| `images/taller-movil.jpg`              | Sección "Taller Móvil" — foto real del vehículo/unidad |
| `images/servicio-climatizacion.jpg`    | Tarjeta de servicio "Climatización"              |
| `images/servicio-electricidad.jpg`     | Tarjeta de servicio "Electricidad"               |
| `images/servicio-mantenimiento.jpg`    | Tarjeta de servicio "Mantenimiento Técnico"      |
| `images/empresas-comercios.jpg`        | Sección "Empresas y Comercios"                   |
| `images/trabajo-01.jpg` … `trabajo-08.jpg` | Galería "Trabajos Realizados" (8 fotos)      |

`images/logo.png` y `images/favicon.png` ya son los definitivos (se generaron a partir del logo real).

## Pendiente: confirmar email de contacto

El email que aparece en la sección de Contacto y en el footer (`info@maxservice.com.ar`) es un
**placeholder** — está marcado en `index.html` con el comentario `<!-- TODO: confirmar email real -->`.
Reemplazalo por el email definitivo apenas esté confirmado (aparece dos veces: `href="mailto:..."` y el texto visible).

## Publicar en GitHub Pages

El repositorio de este sitio está pensado para llamarse **`ms-neuquen.github.io`** (repo especial
de usuario), así el sitio queda publicado directamente en la raíz: `https://ms-neuquen.github.io/`.

Pasos en GitHub:

1. Ir a **Settings → Pages** del repositorio.
2. En **Source**, elegir **"Deploy from a branch"**.
3. Branch: **`main`**, carpeta **`/ (root)`**.
4. Guardar.

Si en el futuro se conecta un dominio propio (ej. `maxservice.com.ar`), hay que agregar un
archivo `CNAME` en la raíz del repo con ese dominio y configurar el DNS correspondiente.

### Subir cambios futuros

Como el sitio no tiene build, cualquier cambio futuro (texto, una foto nueva, o pedirle un
ajuste corto a Claude Code) solo requiere:

```
git add .
git commit -m "Actualizo tal cosa"
git push
```

Y GitHub Pages actualiza el sitio publicado automáticamente.

---
© 2026 MaxService — Todos los derechos reservados.
