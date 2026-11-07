# Portafolio de Julián Millar

Sitio personal (React + Vite + Tailwind v4), desplegado automáticamente en Netlify desde `main`.

## Actualizar el contenido

Todo el texto del CV vive en [`src/data.ts`](src/data.ts): perfil, stack, idiomas, proyectos, experiencia y formación.
Las capturas de los proyectos están en `public/proyecto-*.webp` (1200×800).

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Formulario de contacto

Usa Netlify Forms (formulario `contacto`). Requiere tener activada la detección de formularios en
Netlify → Site configuration → Forms. Los mensajes llegan al panel de Netlify y pueden reenviarse por email.
