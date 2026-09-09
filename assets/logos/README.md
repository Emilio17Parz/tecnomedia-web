# Logos locales

El sitio ya no necesita cargar el logo de TecnoMedia desde la web anterior.

## TecnoMedia

Coloca o renombra tus archivos así:

- `tecnomedia-light.png` → usa **TecnoMedia_FondoBlanco** o el logo que se vea bien sobre fondo claro.
- `tecnomedia-dark.png` → usa **TecnoMedia_TextoBlanco** o el logo que se vea bien sobre fondo oscuro.

También puedes ejecutar desde la raíz:

```powershell
.\scripts\preparar-logos.ps1
```

## Alianzas

Coloca los logos dentro de `assets/logos/partners/` con estos nombres:

- `appdynamics.png`
- `harness.png`
- `veracode.png`
- `netscout.png`
- `apigee.png`
- `datadog.png`
- `cyberark.png`
- `solace.png`
- `splunk.png`
- `grafana.png`
- `aikido.png`

Si falta un archivo, la web mostrará el nombre de la alianza y no un ícono roto.
