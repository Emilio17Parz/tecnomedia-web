# TecnoMedia Modern — sitio estático

Rediseño frontend de TecnoMedia construido con:

- HTML5
- CSS3
- JavaScript vanilla
- Bootstrap 5.3.3
- Bootstrap Icons
- Google Fonts (Inter)
- FormSubmit para el formulario sin backend propio

## Estructura

```text
tecnomedia-modern/
├─ index.html
├─ nosotros.html
├─ devsecops.html
├─ observabilidad.html
├─ ciberseguridad.html
├─ alianzas.html
├─ contacto.html
└─ assets/
   ├─ css/
   │  └─ styles.css
   └─ js/
      └─ main.js
```

## Cómo probarlo

Puedes abrir `index.html` directamente, aunque lo ideal es levantar un servidor local.

### VS Code
Instala la extensión **Live Server**, haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

### Python
Desde la carpeta del proyecto:

```bash
python -m http.server 5500
```

Luego abre:

```text
http://localhost:5500
```

## Formulario sin backend

`contacto.html` está configurado con:

```html
<form action="https://formsubmit.co/contacto@tecnomedia.com.mx" method="POST">
```

Esto evita mantener un backend propio, pero el envío pasa por un tercero (FormSubmit).

### Primera activación
La primera vez que se envíe un formulario, FormSubmit pedirá confirmar el correo `contacto@tecnomedia.com.mx`.

### Para producción
Recomendado:

1. Confirmar el correo de destino.
2. Probar CAPTCHA y spam.
3. Revisar el aviso de privacidad.
4. Si se requiere control total de datos, sustituir FormSubmit por una función serverless (Cloudflare Workers, Vercel Functions, AWS Lambda, etc.).

## Notas

- Los logos de TecnoMedia y varias alianzas se cargan desde el sitio actual `tecnomedia.com.mx`. Para evitar depender del sitio viejo, conviene descargar esos recursos y servirlos localmente antes del lanzamiento.
- El proyecto mantiene las áreas actuales: DevSecOps, Observabilidad y Ciberseguridad.
- El diseño es responsive y no usa jQuery ni Slick.
