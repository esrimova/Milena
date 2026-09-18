# milenaabogada.com

Sitio estático de Milena Otálvaro — Abogada & Oficial de Cumplimiento.
HTML / CSS / JS a mano. Sin framework, sin build.

## Estructura

```
index.html          Página única
css/styles.css      Estilos (mobile-first)
js/main.js          Menú móvil + año del footer
assets/img/         Imágenes (actualmente marcadores SVG)
Google/             Export de Google Stitch — referencia, fuera del repo (.gitignore)
```

## Desarrollo

No hay build. Se sirve tal cual:

```bash
python -m http.server 8099
# http://127.0.0.1:8099
```

## Pendiente antes de publicar

- [ ] **Ciudad** — `[CIUDAD]` aparece en el footer y en el JSON-LD. Confirmar con Milena.
- [ ] **Fotografía real** — reemplazar los 5 marcadores en `assets/img/`
- [ ] **Imagen Open Graph** — crear `assets/img/og.jpg` (1200×630)
- [ ] Revisar el texto con Milena

## Despliegue

GitHub Pages, repositorio público. DNS y correo permanecen en GoDaddy.
Ver `DECISIONS.md` en las notas del proyecto para la secuencia de migración.
