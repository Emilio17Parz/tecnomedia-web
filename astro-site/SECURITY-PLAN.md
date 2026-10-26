# Plan de seguridad - TecnoMedia Astro

## Estado actual
- Sitio visual migrado a Astro sin redisenar.
- Tailwind 4 preparado.
- Assets locales preservados.
- Rutas `.html` preservadas.
- Esquema Zod del formulario creado.
- Variables de entorno preparadas.
- Action segura dejada como ejemplo, NO activa aun.

## Siguiente fase
Las Astro Actions necesitan un adapter de servidor. Cuando se defina hosting:
1. Activar `src/actions/index.ts`.
2. Validar con Zod.
3. Verificar Cloudflare Turnstile del lado servidor.
4. Implementar rate limiting.
5. Cifrar el payload con la clave publica PGP de TecnoMedia.
6. Enviar solo el ciphertext mediante API de correo.
7. Mantener tokens y claves en variables de entorno.
8. Configurar CSP, HSTS, Referrer-Policy, Permissions-Policy y X-Content-Type-Options.
9. Probar requests manipulados, XSS, spam y limites.
