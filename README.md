# TecnoMedia — rediseño Tailwind v2

Segunda versión del sitio corporativo. Mantiene HTML estático y JavaScript vanilla, reemplaza Bootstrap por Tailwind CSS y no incorpora React porque el sitio no necesita una SPA.

## Cambios incluidos

- Tailwind CSS 4 (CSS ya compilado dentro del ZIP).
- Dark mode manual con persistencia en `localStorage`.
- Animaciones con `IntersectionObserver` y respeto a `prefers-reduced-motion`.
- Navegación "Acerca de" y redirección desde `nosotros.html`.
- Métricas del hero apiladas en móvil; en `sm` pasan a tres columnas.
- Alineación de títulos y textos consistente a la izquierda.
- Logos y tarjetas de alianzas más grandes.
- Alianzas agregadas: Splunk, Grafana y Aikido.
- Aviso de privacidad enlazado localmente desde footer y formulario.
- Formulario sin backend propio usando FormSubmit.
- Logos de TecnoMedia preparados para uso local.

## Probar sin instalar nada

El archivo `assets/css/tailwind.css` ya viene compilado, así que puedes abrir `index.html` o usar Live Server.

## Recompilar Tailwind

Si modificas clases Tailwind:

```powershell
npm install
npm run build:css
```

## Preparar los logos de TecnoMedia

Copia tus logos a `assets/logos/` y luego:

```powershell
.\scripts\preparar-logos.ps1
```

Después revisa `assets/logos/README.md` para los nombres de alianzas.

## Git — reemplazar contenido de la rama de rediseño

Desde tu repo local:

```powershell
git switch redesign-tailwind
```

Copia el contenido de este proyecto encima del repo y conserva tus archivos reales de `assets/logos/`.

Luego:

```powershell
git status
git add .
git commit -m "Rediseño Tailwind, dark mode, animaciones y alianzas"
git push
```
